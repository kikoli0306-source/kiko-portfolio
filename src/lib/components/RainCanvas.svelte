<script lang="ts">
  import { onMount } from 'svelte';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext('2d')!;

    interface Ripple { x: number; y: number; r: number; maxR: number; life: number; }
    interface Particle { x: number; y: number; vx: number; vy: number; life: number; }

    const ripples: Ripple[] = [];
    const particles: Particle[] = [];

    let logW = 0, logH = 0;
    let t = 0;
    let nextRipple = performance.now() + rnd(600, 800);
    let animId: number;

    function rnd(a: number, b: number) { return Math.random() * (b - a) + a; }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      logW = rect.width;
      logH = rect.height;
      if (logW === 0 || logH === 0) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = logW * dpr;
      canvas.height = logH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function wave(x: number, time: number, row: number) {
      return Math.sin(x * 0.013 + time * 0.5 + row * 1.7) * 3.5
           + Math.sin(x * 0.007 + time * 0.3 + row * 0.9) * 2.0
           + Math.sin(x * 0.025 + time * 0.7 + row * 2.3) * 1.2;
    }

    function spawn() {
      const x = rnd(logW * 0.08, logW * 0.92);
      const y = rnd(logH * 0.15, logH * 0.85);
      const maxR = rnd(40, 90);
      ripples.push({ x, y, r: 0, maxR, life: 0 });
      const count = Math.floor(rnd(2, 5));
      for (let i = 0; i < count; i++) {
        particles.push({ x, y, vx: rnd(-1.8, 1.8), vy: rnd(-3.5, -0.8), life: 0 });
      }
    }

    function draw(now: number) {
      animId = requestAnimationFrame(draw);
      if (logW === 0 || logH === 0) return;
      t += 0.016;

      // Background gradient
      const g = ctx.createLinearGradient(0, 0, 0, logH);
      g.addColorStop(0, 'rgb(12,12,40)');
      g.addColorStop(1, 'rgb(25,18,60)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, logW, logH);

      // Water surface wave lines
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
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

      // Spawn new ripple on schedule
      if (now >= nextRipple) {
        spawn();
        nextRipple = now + rnd(600, 800);
      }

      // Draw & advance ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.life += 0.008;
        if (rp.life >= 1) { ripples.splice(i, 1); continue; }
        rp.r = rp.life * rp.maxR;
        const baseAlpha = (1 - rp.life) * 0.55;

        for (let layer = 0; layer < 3; layer++) {
          const lr = Math.max(0, rp.r - layer * 14);
          if (lr <= 0) continue;
          const lry = lr * 0.35;
          const la = baseAlpha * (1 - layer * 0.28);
          ctx.beginPath();
          ctx.ellipse(rp.x, rp.y, lr, lry, 0, 0, Math.PI * 2);
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
        p.vy += 0.12; // gravity
        p.life += 0.025;
        if (p.life >= 1) { particles.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,210,255,${((1 - p.life) * 0.3).toFixed(3)})`;
        ctx.fill();
      }
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  });
</script>

<canvas bind:this={canvas}></canvas>

<style>
  canvas {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
