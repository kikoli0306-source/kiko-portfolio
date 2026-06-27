<script lang="ts">
  import { onMount } from 'svelte';

  let lang = $state<'en' | 'zh'>('en');
  let bgCanvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = bgCanvas.getContext('2d')!;

    interface Ripple { x: number; y: number; r: number; maxR: number; life: number; }
    interface Particle { x: number; y: number; vx: number; vy: number; life: number; }

    const ripples: Ripple[] = [];
    const particles: Particle[] = [];

    let logW = 0, logH = 0;
    let t = 0;
    let nextRipple = performance.now() + rnd(800, 1200);
    let animId: number;

    function rnd(a: number, b: number) { return Math.random() * (b - a) + a; }

    function resize() {
      logW = window.innerWidth;
      logH = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      bgCanvas.width = logW * dpr;
      bgCanvas.height = logH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function wave(x: number, time: number, row: number) {
      return Math.sin(x * 0.013 + time * 0.5 + row * 1.7) * 3.5
           + Math.sin(x * 0.007 + time * 0.3 + row * 0.9) * 2.0
           + Math.sin(x * 0.025 + time * 0.7 + row * 2.3) * 1.2;
    }

    function spawn() {
      const x = rnd(logW * 0.05, logW * 0.95);
      const y = rnd(logH * 0.05, logH * 0.95);
      const maxR = rnd(45, 100);
      ripples.push({ x, y, r: 0, maxR, life: 0 });
      const count = Math.floor(rnd(2, 5));
      for (let i = 0; i < count; i++) {
        particles.push({ x, y, vx: rnd(-1.8, 1.8), vy: rnd(-3.5, -0.8), life: 0 });
      }
    }

    function draw(now: number) {
      animId = requestAnimationFrame(draw);
      t += 0.016;

      // Transparent — page CSS controls background color
      ctx.clearRect(0, 0, logW, logH);

      // Water surface wave lines
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.lineWidth = 0.5;
      for (let row = 0; row * 20 < logH + 20; row++) {
        const baseY = row * 20;
        ctx.beginPath();
        for (let x = 0; x <= logW; x += 3) {
          const y = baseY + wave(x, t, row);
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Spawn ripple on schedule
      if (now >= nextRipple) {
        spawn();
        nextRipple = now + rnd(800, 1200);
      }

      // Draw & advance ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.life += 0.008;
        if (rp.life >= 1) { ripples.splice(i, 1); continue; }
        rp.r = rp.life * rp.maxR;
        const baseAlpha = (1 - rp.life) * 0.7;

        for (let layer = 0; layer < 3; layer++) {
          const lr = Math.max(0, rp.r - layer * 14);
          if (lr <= 0) continue;
          const la = baseAlpha * (1 - layer * 0.28);
          ctx.beginPath();
          ctx.ellipse(rp.x, rp.y, lr, lr * 0.35, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(120,120,220,${la.toFixed(3)})`;
          ctx.lineWidth = Math.max(0.3, 1 - layer * 0.25);
          ctx.stroke();
        }
      }

      // Draw & advance particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12;
        p.life += 0.025;
        if (p.life >= 1) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${((1 - p.life) * 0.3).toFixed(3)})`;
        ctx.fill();
      }
    }

    window.addEventListener('resize', resize);
    resize();
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  });
</script>

<svelte:head>
  <title>Rain Touch — Kiko Li</title>
</svelte:head>

<!-- Full-screen rain canvas background -->
<canvas bind:this={bgCanvas} class="bg-canvas"></canvas>
<!-- Overlay to keep text readable -->
<div class="bg-overlay"></div>

<div class="root">
  <div class="content">
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; projects</a>
      <button class="lang-toggle" onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
        {lang === 'en' ? '中文' : 'English'}
      </button>
    </div>

    {#if lang === 'en'}
    <div class="header">
      <h1 class="title">Rain Touch</h1>
      <p class="subtitle">Physical Computing · Haptic Interaction</p>
    </div>

    <p class="desc">
      Rain Touch is a tangible interface that translates falling rain into touch. A Processing sketch generates a visual field of raindrops, and as each drop lands, the system sends a signal over serial to an Arduino, which drives a vibration motor — letting the user feel the rhythm of rain through their fingertips rather than only seeing it on screen.
    </p>

    <p class="desc">
      The project explores bidirectional communication between screen and body: visual events become physical sensations in real time. Built with Arduino, a vibration motor, and Processing serial communication, it turns an ambient natural phenomenon into an intimate, embodied experience — an attempt to make something as ephemeral as rainfall tactile and present.
    </p>

    <div class="tags">
      {#each ['Arduino', 'Processing', 'Serial Communication', 'Haptics', 'Physical Computing'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <p class="section-label">Demo</p>

    {:else}

    <div class="header">
      <h1 class="title">雨触</h1>
      <p class="subtitle">物理计算 · 触觉交互</p>
    </div>

    <p class="desc">
      雨触是一个将落雨转化为触感的交互装置。Processing 程序生成一片下落雨滴的视觉画面，当每一滴雨落下时，系统通过串口向 Arduino 发送信号，驱动振动马达——让使用者用指尖感受雨的节奏，而不只是在屏幕上观看。
    </p>

    <p class="desc">
      项目探索屏幕与身体之间的双向通信：视觉事件被实时转化为身体的触觉感受。基于 Arduino、振动马达与 Processing 串口通信构建，它把一种弥漫的自然现象转化为亲密的、具身的体验——尝试让雨这样转瞬即逝的东西变得可触摸、可感知。
    </p>

    <div class="tags">
      {#each ['Arduino', 'Processing', 'Serial Communication', 'Haptics', 'Physical Computing'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <p class="section-label">演示</p>

    {/if}

    <div class="video-wrap">
      <iframe
        src="https://www.youtube.com/embed/dTBbYVYnJhU"
        title="Rain Touch demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </div>

    <div class="divider"></div>

    <a href="/projects" class="back">&#8592; back to projects</a>
  </div>
</div>


<style>
  .bg-canvas {
    position: fixed;
    inset: 0;
    z-index: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }

  .bg-overlay {
    position: fixed;
    inset: 0;
    z-index: 1;
    background: rgba(8, 8, 26, 0.35);
    pointer-events: none;
  }

  :global(html), :global(body) {
    background: #08081a;
  }

  .root {
    position: relative;
    z-index: 2;
    width: 100vw;
    min-height: 100dvh;
    background: transparent;
    display: flex;
    justify-content: center;
    padding: 80px 40px 120px;
    box-sizing: border-box;
  }

  .content { width: 100%; max-width: 860px; display: flex; flex-direction: column; gap: 0; }
  .top-bar { display: flex; justify-content: space-between; align-items: center; }
  .back { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: lowercase; color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.2s; align-self: flex-start; }
  .back:hover { color: rgba(255,255,255,0.75); }
  .lang-toggle { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: lowercase; color: rgba(255,255,255,0.3); background: none; border: 0.5px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 4px 12px; cursor: pointer; transition: color 0.2s, border-color 0.2s; }
  .lang-toggle:hover { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.35); }
  .header { margin-top: 56px; }
  .title { font-family: "Fraunces", serif; font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 300; letter-spacing: 0.05em; color: rgba(255,255,255,0.88); margin: 0; line-height: 1.1; }
  .subtitle { margin: 10px 0 0; font-size: 0.85rem; letter-spacing: 0.12em; color: rgba(255,255,255,0.35); text-transform: uppercase; }
  .desc { margin: 32px 0 0; font-size: 0.85rem; line-height: 2; color: rgba(255,255,255,0.5); max-width: 620px; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
  .tag { background: rgba(255,255,255,0.07); border-radius: 20px; padding: 3px 12px; font-size: 0.68rem; letter-spacing: 0.04em; color: rgba(255,255,255,0.45); }
  .section-label { margin: 56px 0 12px; font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.25); }
  .video-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; border: 0.5px solid rgba(255,255,255,0.08); }
  .video { width: 100%; height: 100%; border: none; display: block; }
  .divider { width: 64px; height: 0.5px; background: rgba(255,255,255,0.1); margin: 72px 0; }
</style>
