<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
  const { work } = data;
</script>

<svelte:head>
  <title>{work.title} - Kiko Li</title>
</svelte:head>

<div class="min-h-screen bg-[#0d0d0d] text-white/80 px-8 md:px-20 py-16">

  <a href="/work" class="font-body text-xs text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors duration-300">
    &#8592; works
  </a>

  <div class="mt-16 max-w-4xl">
    <img
      src={work.image}
      alt={work.title}
      class="w-full object-contain"
    />

    <div class="mt-8">
      <div class="flex items-start justify-between gap-6">
        <h1 class="font-display text-3xl md:text-4xl italic text-white/90">{work.title}</h1>
        <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 pt-1">{work.year}</p>
      </div>
      <p class="font-body text-base text-zinc-400 mt-2">{work.medium}</p>
    </div>
  </div>

  <div class="w-16 h-px bg-white/10 my-20"></div>

  <a href="/work" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">
    &#8592; back to works
  </a>

</div>