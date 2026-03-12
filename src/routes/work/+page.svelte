<script lang="ts">
  import { works } from '$lib/works';
</script>

<svelte:head>
  <title>Works - Kiko Li</title>
</svelte:head>

<div class="min-h-screen bg-[#0d0d0d] text-white/80 px-8 md:px-20 py-16">

  <a href="/" class="font-body text-xs text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors duration-300">
    &#8592; back
  </a>

  <div class="mt-16 mb-20">
    <h1 class="font-display text-6xl md:text-8xl italic text-white/90">Works</h1>
    <p class="mt-3 font-body text-xs text-white/30 tracking-[0.4em] uppercase">Selected Paintings</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
    {#each works as work}
      <a href="/work/{work.slug}" class="group block">
        <div class="overflow-hidden bg-white/5">
          <img
            src={work.image}
            alt={work.title}
            class="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
        <div class="mt-4 flex justify-between items-start">
          <div>
            <p class="font-display text-xl italic text-white/70 group-hover:text-white/90 transition-colors duration-300">{work.title}</p>
            <p class="font-body text-xs text-white/30 mt-1">{work.medium}</p>
          </div>
          <p class="font-body text-xs text-white/20 tracking-widest shrink-0 ml-4">{work.year}</p>
        </div>
      </a>
    {/each}
  </div>

  <div class="w-16 h-px bg-white/10 my-24"></div>

  <div class="flex justify-between items-center">
    <a href="/about" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8592; about</a>
    <a href="/cv" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8594; cv</a>
  </div>

</div>