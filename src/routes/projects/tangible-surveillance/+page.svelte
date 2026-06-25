<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  function initViewer(canvas: HTMLCanvasElement, stlUrl: string) {
    // Read actual size after layout; canvas has fixed height 280px so h is safe,
    // but width depends on flex layout — use getBoundingClientRect as ground truth.
    const rect = canvas.getBoundingClientRect();
    const w = rect.width || canvas.offsetWidth || 400;
    const h = rect.height || 280;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h, false); // false = don't set CSS size (CSS owns it)
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
    camera.position.set(0, 1.5, 4);
    camera.lookAt(0, 0, 0);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dir1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dir1.position.set(1, 2, 3);
    scene.add(dir1);
    const dir2 = new THREE.DirectionalLight(0xffffff, 0.4);
    dir2.position.set(-2, -1, -2);
    scene.add(dir2);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;

    const loader = new STLLoader();
    loader.load(
      stlUrl,
      (geometry) => {
        geometry.computeVertexNormals();

        // Center geometry
        geometry.computeBoundingBox();
        const center = new THREE.Vector3();
        geometry.boundingBox!.getCenter(center);
        geometry.translate(-center.x, -center.y, -center.z);

        // Normalize scale to fit in a ~3-unit cube
        const size = new THREE.Vector3();
        geometry.boundingBox!.getSize(size);
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 3 / maxDim;

        const mesh = new THREE.Mesh(
          geometry,
          new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.5, metalness: 0.1 })
        );
        mesh.scale.setScalar(scale);
        scene.add(mesh);
        controls.update();
      },
      undefined,
      (err) => console.error('[STLLoader] failed to load', stlUrl, err)
    );

    let animId: number;
    function animate() {
      animId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Keep renderer sized to canvas on layout changes
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          renderer.setSize(width, height, false);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      }
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      renderer.dispose();
    };
  }

  let lightbox: string | null = $state(null);

  onMount(() => {
    // Wait one rAF so flex layout has resolved and clientWidth is non-zero
    requestAnimationFrame(() => {
      const cameraCanvas = document.getElementById('canvas-camera') as HTMLCanvasElement;
      const carCanvas = document.getElementById('canvas-car') as HTMLCanvasElement;
      if (cameraCanvas) initViewer(cameraCanvas, '/tangible-surveillance/camera.stl');
      if (carCanvas) initViewer(carCanvas, '/tangible-surveillance/car.stl');
    });
  });
</script>

<svelte:head>
  <title>Tangible Surveillance — Kiko Li</title>
</svelte:head>

<svelte:window onkeydown={(e) => { if (e.key === 'Escape') lightbox = null; }} />

<div class="root">
  <div class="content">
    <a href="/projects" class="back">&#8592; projects</a>

    <div class="header">
      <h1 class="title">Tangible Surveillance</h1>
      <p class="subtitle">Data Physicalization · Actuated UI</p>
    </div>

    <p class="desc">
      Our group created a data physicalization system that uses toio robots, projection mapping,
      and a physical map interface to make Chicago's automatic license plate recognition (ALPR)
      camera network spatially tangible. Six toios are deployed on a physical mat linked to two
      projected maps: a city-scale overview and a zoomed-in community-area view. One toio acts as
      a reticle for panning the map; one represents a moving car; four represent nearby ALPR
      cameras that automatically relocate to the closest camera positions and rotate to face each
      camera's actual surveillance direction. Camera toios' LEDs shift from blue to yellow to red
      as the car approaches — when the car enters a camera's detection cone, the car toio flashes
      red and emits an alert. A sidebar displays socioeconomic data for the active community area
      including poverty rate, unemployment, and per capita income.
    </p>

    <p class="desc">
      A key observation emerged during testing: in heavily surveilled neighborhoods, the four
      camera toios crowded together and physically could not move properly — the mat could not
      accommodate the actual density of cameras. This unintentionally exposed how concentrated
      surveillance is in certain areas, while reminding us that physicalization as a medium
      inevitably simplifies the data it represents.
    </p>

    <iframe
      src="https://www.youtube.com/embed/w17SwY5e4nY"
      title="Tangible Surveillance demo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="video"
    ></iframe>

    <div class="section">
      <p class="section-label">Interface & Artifacts</p>

      <button
        class="screenshot-btn"
        onclick={() => lightbox = '/tangible-surveillance/screenshot-1.png'}
        aria-label="Enlarge interface screenshot"
      >
        <img
          src="/tangible-surveillance/screenshot-1.png"
          alt="System interface showing ALPR camera distribution and socioeconomic data"
          class="screenshot"
        />
      </button>

      <div class="models">
        <div class="model-item">
          <canvas id="canvas-camera" class="model-canvas"></canvas>
          <p class="model-label">Camera Toio Shell</p>
        </div>
        <div class="model-item">
          <canvas id="canvas-car" class="model-canvas"></canvas>
          <p class="model-label">Car Toio Shell</p>
        </div>
      </div>
    </div>

    <div class="tags">
      {#each ['toio', 'Projection Mapping', 'Data Physicalization', 'SvelteKit', 'Chicago ALPR'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <div class="divider"></div>

    <a href="/projects" class="back">&#8592; back to projects</a>
  </div>
</div>

{#if lightbox}
  <div
    class="overlay"
    role="button"
    tabindex="0"
    aria-label="Close image"
    onclick={() => lightbox = null}
    onkeydown={(e) => e.key === 'Enter' && (lightbox = null)}
  >
    <img class="lightbox-img" src={lightbox} alt="Screenshot enlarged" />
  </div>
{/if}

<style>
  .root {
    width: 100vw;
    min-height: 100dvh;
    background: #08081a;
    display: flex;
    justify-content: center;
    padding: 80px 40px 120px;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    max-width: 860px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .back {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    transition: color 0.2s;
    align-self: flex-start;
  }

  .back:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  .header {
    margin-top: 56px;
  }

  .title {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 300;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.88);
    font-style: italic;
    margin: 0;
    line-height: 1.1;
  }

  .subtitle {
    margin: 10px 0 0;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
  }

  .desc {
    margin: 40px 0 0;
    font-size: 0.85rem;
    line-height: 2;
    color: rgba(255, 255, 255, 0.5);
    max-width: 620px;
  }

  .video {
    margin-top: 40px;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 6px;
    border: none;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 24px;
  }

  .tag {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.45);
  }

  .section {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-label {
    margin: 0;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
  }

  .screenshot-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: zoom-in;
    border-radius: 6px;
    overflow: hidden;
    display: block;
    transition: border-color 0.2s;
    outline: 0.5px solid rgba(255, 255, 255, 0.08);
  }

  .screenshot-btn:hover {
    outline-color: rgba(255, 255, 255, 0.25);
  }

  .screenshot {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    border-radius: 6px;
  }

  .models {
    display: flex;
    gap: 16px;
  }

  .model-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .model-canvas {
    width: 100%;
    height: 280px;
    border-radius: 6px;
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    display: block;
  }

  .model-label {
    margin: 0;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    text-align: center;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.1);
    margin: 72px 0;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: zoom-out;
    padding: 32px;
    box-sizing: border-box;
  }

  .lightbox-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.6);
  }
</style>
