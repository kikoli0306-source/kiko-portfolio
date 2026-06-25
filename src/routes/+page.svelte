<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';
</script>

<svelte:head>
  <title>Kiko Li — Artist</title>
</svelte:head>

<div class="relative w-screen h-screen overflow-hidden">

  <!-- SVG 水波滤镜定义 -->
  <svg class="absolute w-0 h-0">
    <defs>
      <filter id="ripple">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.008"
          numOctaves="3"
          seed="2"
          result="noise">
          <animate
            attributeName="baseFrequency"
            values="0.012 0.008;0.015 0.010;0.012 0.008"
            dur="8s"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="18"
          xChannelSelector="R"
          yChannelSelector="G"
        >
          <animate
            attributeName="scale"
            values="18;28;18"
            dur="8s"
            repeatCount="indefinite"
          />
        </feDisplacementMap>
      </filter>
    </defs>
  </svg>

  <!-- 背景油画，带水波滤镜 -->
  <img
    src="/hero.jpg"
    alt="painting"
    class="absolute inset-0 w-full h-full object-cover animate-breathe"
    style="filter: url(#ripple);"
  />

  <!-- 暗色遮罩 -->
  <div class="absolute inset-0 bg-black/25"></div>

  <!-- 中央文字 -->
  <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
    <h1 class="font-display text-5xl md:text-7xl text-white/90 italic tracking-wide">
      Kiko Li
    </h1>
    <p class="mt-3 font-body text-xs text-white/50 tracking-[0.35em] uppercase">
      Artist · Designer · Chicago
    </p>
    <p class="mt-6 font-body text-sm text-white/70 tracking-wide typewriter overflow-hidden whitespace-nowrap border-r-2 border-white/60">
      Where memory, data, and imagination converge.
    </p>
  </div>

  <NavArrows />

</div>

<style>
  @keyframes breathe {
    0%   { transform: scale(1) rotate(0deg); }
    33%  { transform: scale(1.03) rotate(0.3deg); }
    66%  { transform: scale(1.02) rotate(-0.2deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
  .animate-breathe {
    animation: breathe 16s ease-in-out infinite;
    transform-origin: center center;
  }

  @keyframes typing {
    from { width: 0 }
    to   { width: 100% }
  }
  @keyframes blink {
    0%, 100% { border-color: transparent }
    50%      { border-color: rgba(255,255,255,0.6) }
  }
  .typewriter {
    width: 0;
    animation:
      typing 5s steps(44) 1.5s forwards,
      blink 0.8s step-end 1.5s 6;
  }
</style>