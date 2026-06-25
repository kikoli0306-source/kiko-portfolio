<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import NavArrows from '$lib/components/NavArrows.svelte';

  interface Work {
    title: string;
    desc: string;
    tags: string[];
    color: number;
    image: string;
    link: string;
  }

  // --- 作品数据 — title / desc 请自行填写 ---
  const works: Work[] = [
    { title: "", desc: "", tags: [], color: 0x7c6fcd, image: "/DSC_0007.JPG", link: "/work/project-1" },
    { title: "", desc: "", tags: [], color: 0x4a9e8a, image: "/hero.jpg",      link: "/work/project-2" },
    { title: "", desc: "", tags: [], color: 0xd4825a, image: "/work1.jpg",     link: "/work/work1"     },
    { title: "", desc: "", tags: [], color: 0x5a8fd4, image: "/work2.jpg",     link: "/work/work2"     },
    { title: "", desc: "", tags: [], color: 0xc47ab5, image: "/work3.jpg",     link: "/work/work3"     },
    { title: "", desc: "", tags: [], color: 0xe8b84b, image: "/work4.jpg",     link: "/work/work4"     },
    { title: "", desc: "", tags: [], color: 0x66bb8a, image: "/work5.jpg",     link: "/work/work5"     },
    { title: "", desc: "", tags: [], color: 0xe06b6b, image: "/work6.jpg",     link: "/work/work6"     },
    { title: "", desc: "", tags: [], color: 0x9b7bca, image: "/work7.jpg",     link: "/work/work7"     },
  ];

  let container: HTMLDivElement;
  let threeCanvas: HTMLCanvasElement;
  let selectedWork: Work | null = null;
  let cleanup: () => void = () => {};

  // 确定性伪随机，保证每次刷新位置固定
  function rand(seed: number): number {
    const x = Math.sin(seed * 9301.0 + 49297.0) * 233280.0;
    return x - Math.floor(x);
  }

  async function initThree(): Promise<void> {
    const THREE = await import('three');

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    // --- 渲染器 ---
    const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    // --- 场景 ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08081a);
    scene.fog = new THREE.Fog(0x08081a, 18, 40);

    // --- 相机 ---
    const camera = new THREE.PerspectiveCamera(75, W / H, 0.1, 200);
    camera.position.set(0, 0, 6);
    camera.rotation.order = 'YXZ';

    // --- 星星粒子 300 颗，半径 20-50 ---
    const starCount = 300;
    const starPos   = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const phi   = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r     = 20 + Math.random() * 30;
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.cos(phi);
      starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.8,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.9,
    });
    scene.add(new THREE.Points(starsGeo, starsMat));

    // --- 作品卡片 ---
    // 分布：近(i 0-2, z 5→-5)  中(i 3-6, z -5→-12)  远(i 7-8, z -12→-20)
    // x 正负交替保证左右均匀；y 覆盖 -8 到 8
    const cardMeshes: THREE.Mesh[] = [];
    const texLoader  = new THREE.TextureLoader();

    works.forEach((work, i) => {
      // 确定性位置
      const xSign = (i % 2 === 0) ? 1 : -1;
      const xAbs  = 1 + rand(i * 7 + 0) * 5;      // 1 → 6
      const x     = xSign * xAbs;
      const baseY = (rand(i * 7 + 1) - 0.5) * 10;  // -5 → 5

      let z: number;
      if      (i < 3) z =  3  - rand(i * 7 + 2) * 5;   //  3 → -2   近
      else if (i < 7) z = -2  - rand(i * 7 + 2) * 5;   // -2 → -7   中
      else            z = -7  - rand(i * 7 + 2) * 5;   // -7 → -12  远

      // 手动位置覆盖（如果还不对请把图片路径从 hero.jpg 改成 DSC_0007.JPG）
      let finalX = x, finalY = baseY, finalZ = z;
      if (work.image === '/hero.jpg') {
        finalX = 3.0; finalY = 1.8; finalZ = -11;
      }

      // onLoad 回调读取真实宽高比，创建对应 PlaneGeometry
      texLoader.load(work.image, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const aspect = (texture.image as HTMLImageElement).width /
                       (texture.image as HTMLImageElement).height;
        const cardH  = 2.8;
        const cardW  = cardH * aspect;  // 横图宽、竖图窄，比例正确

        const geo  = new THREE.PlaneGeometry(cardW, cardH);
        const mat  = new THREE.MeshBasicMaterial({
          map:  texture,
          side: THREE.FrontSide,  // 单面渲染，背面自然消失
        });
        const mesh = new THREE.Mesh(geo, mat);

        mesh.position.set(finalX, finalY, finalZ);
        mesh.userData = { work, baseY: finalY };
        scene.add(mesh);
        cardMeshes.push(mesh);
      });
    });

    // --- 交互状态 ---
    let isDragging   = false;
    let prevX = 0,   prevY = 0;
    let mouseDownPos = { x: 0, y: 0 };
    let azimuth      = 0, velAz = 0;
    let elevation    = 0, velEl = 0;
    let camZ         = 8, velZ  = 0;
    let lastPinchDist = 0;

    const onDown = (x: number, y: number) => {
      isDragging   = true;
      prevX = x;   prevY = y;
      mouseDownPos = { x, y };
    };
    const onMove = (x: number, y: number) => {
      if (!isDragging) return;
      velAz += (x - prevX) * 0.002;  // 灵敏度降低
      velEl += (y - prevY) * 0.002;
      prevX = x; prevY = y;
    };
    const onUp = () => { isDragging = false; };

    container.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove',    e => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup',      onUp);

    container.addEventListener('touchstart', e => {
      if (e.touches.length === 2) {
        lastPinchDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      } else {
        onDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', e => {
      if (e.touches.length === 2) {
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        velZ -= (dist - lastPinchDist) * 0.06;
        lastPinchDist = dist;
      } else if (e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onUp);

    container.addEventListener('wheel', e => {
      e.preventDefault();
      velZ -= e.deltaY * 0.022;
    }, { passive: false });

    // --- 点击大图（忽略拖拽误触）---
    const raycaster = new THREE.Raycaster();
    const mouseVec  = new THREE.Vector2();

    threeCanvas.addEventListener('click', e => {
      if (Math.abs(e.clientX - mouseDownPos.x) > 5 ||
          Math.abs(e.clientY - mouseDownPos.y) > 5) return;
      const rect = container.getBoundingClientRect();
      mouseVec.x =  ((e.clientX - rect.left) / container.offsetWidth)  * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top)  / container.offsetHeight) * 2 + 1;
      raycaster.setFromCamera(mouseVec, camera);
      const hits = raycaster.intersectObjects(cardMeshes, false);
      if (hits.length > 0) selectedWork = hits[0].object.userData.work as Work;
    });

    // --- 动画循环 ---
    let time = 0;
    let raf: number;

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.008;

      // 惯性衰减（停得更快）
      if (!isDragging) {
        velAz *= 0.90;
        velEl *= 0.90;
        if (Math.abs(velAz) < 0.0002) velAz += 0.0005;  // 几乎不自转
      }
      velZ *= 0.88;

      azimuth   += velAz;
      elevation  = Math.max(-Math.PI / 3.5, Math.min(Math.PI / 3.5, elevation + velEl));
      camZ       = Math.max(-8, Math.min(8, camZ + velZ));

      camera.rotation.y = azimuth;
      camera.rotation.x = elevation;
      camera.position.z = camZ;

      // 卡片：轻微漂浮 + 始终正面朝向镜头
      cardMeshes.forEach((card, idx) => {
        card.position.y = (card.userData.baseY as number) +
                          Math.sin(time + idx * 0.8) * 0.0008;  // 幅度减小
        card.lookAt(camera.position);
      });

      renderer.render(scene, camera);
    }
    animate();

    // --- resize ---
    const ro = new ResizeObserver(() => {
      const nW = container.offsetWidth;
      const nH = container.offsetHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    });
    ro.observe(container);

    cleanup = () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      starsGeo.dispose();
      starsMat.dispose();
      renderer.dispose();
    };
  }

  onMount(initThree);
  onDestroy(() => cleanup());
</script>

<div class="gallery-root" bind:this={container}>
  <canvas class="scene" bind:this={threeCanvas}></canvas>
  <span class="hint">拖拽旋转 · 滚轮前进探索</span>
  <NavArrows />

  {#if selectedWork}
    <div
      class="overlay"
      role="presentation"
      onclick={(e) => { if (e.target === e.currentTarget) selectedWork = null; }}
      onkeydown={(e) => e.key === 'Escape' && (selectedWork = null)}
    >
      <button class="close-btn" onclick={() => (selectedWork = null)} aria-label="关闭">✕</button>

      <div class="lightbox">
        <img class="lightbox-img" src={selectedWork.image} alt={selectedWork.title} />

        <div class="lightbox-info">
          {#if selectedWork.title}
            <h2 class="lb-title">{selectedWork.title}</h2>
          {:else}
            <h2 class="lb-title lb-placeholder">标题待填写</h2>
          {/if}
          {#if selectedWork.desc}
            <p class="lb-desc">{selectedWork.desc}</p>
          {:else}
            <p class="lb-desc lb-placeholder">作品描述待填写</p>
          {/if}
          {#if selectedWork.tags.length > 0}
            <div class="lb-tags">
              {#each selectedWork.tags as tag}
                <span class="lb-tag">{tag}</span>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .gallery-root {
    width: 100%;
    height: 100dvh;
    position: relative;
    overflow: hidden;
    cursor: grab;
  }
  .gallery-root:active { cursor: grabbing; }

  .scene {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .hint {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    padding: 6px 16px;
    border-radius: 20px;
    pointer-events: none;
    white-space: nowrap;
    z-index: 10;
    letter-spacing: 0.04em;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.80);
    backdrop-filter: blur(12px);
    z-index: 30;
    cursor: default;
  }

  .close-btn {
    position: absolute;
    top: 20px;
    right: 24px;
    background: rgba(255, 255, 255, 0.08);
    border: 0.5px solid rgba(255, 255, 255, 0.18);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    z-index: 31;
  }
  .close-btn:hover { background: rgba(255, 255, 255, 0.18); }

  .lightbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 90vw;
    max-height: 90dvh;
    pointer-events: none;
  }

  .lightbox-img {
    display: block;
    max-width: 85vw;
    max-height: 68dvh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 6px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.7);
  }

  .lightbox-info {
    text-align: center;
    color: #fff;
    max-width: 540px;
    padding: 0 20px;
  }

  .lb-title {
    margin: 0 0 8px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  .lb-desc {
    margin: 0;
    font-size: 13px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.55);
  }

  .lb-placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-style: italic;
  }

  .lb-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-top: 12px;
  }

  .lb-tag {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 11px;
    color: rgba(255, 255, 255, 0.6);
  }
</style>
