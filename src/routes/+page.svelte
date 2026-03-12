<svelte:head>
  <title>Kiko Li — Artist</title>
</svelte:head>

<div class="relative w-screen h-screen overflow-hidden">

  <img
    src="/hero.jpg"
    alt="painting"
    class="absolute inset-0 w-full h-full object-cover animate-breathe"
  />

  <div class="absolute inset-0 bg-black/30"></div>

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

  <a href="/work"
    class="absolute bottom-10 left-10 text-white/80 hover:text-white text-lg tracking-widest transition-colors duration-300 flex items-center gap-2">
    &#8594; works
  </a>

  <a href="/about"
    class="absolute bottom-10 right-10 text-white/80 hover:text-white text-lg tracking-widest transition-colors duration-300 flex items-center gap-2">
    &#8594; about
  </a>

</div>

<style>
  @keyframes breathe {
    0%   { transform: scale(1) rotate(0deg); }
    33%  { transform: scale(1.03) rotate(0.3deg); }
    66%  { transform: scale(1.02) rotate(-0.2deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
  .animate-breathe {
    animation: breathe 12s ease-in-out infinite;
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