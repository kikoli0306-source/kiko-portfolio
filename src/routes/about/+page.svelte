<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';
</script>

<svelte:head>
  <title>About - Kiko Li</title>
</svelte:head>

<div class="min-h-screen bg-[#0d0d0d] text-white/80 px-8 md:px-20 py-16">

  <a href="/" class="font-body text-xs text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors duration-300">
    &#8592; back
  </a>

  <div class="mt-16 mb-20">
    <h1 class="font-display text-6xl md:text-8xl italic text-white/90">Kiko Li</h1>
    <p class="mt-3 font-body text-xs text-white/30 tracking-[0.4em] uppercase">Artist · Designer · Chicago</p>
  </div>

  <div class="max-w-2xl">
    <p class="font-body text-xs text-white/30 tracking-[0.3em] uppercase mb-8">Artist Statement</p>
    <p class="font-body text-lg font-light leading-[1.9] text-white/60">My work explores how memory, scent, emotion, and cultural traces can be reconstructed through digital media. Trained initially as a painter, I now create across digital environments, interactive media, and data-driven systems, using technology to translate ephemeral human experiences into immersive forms. My practice investigates how digital space can serve as a medium for reconnecting cultural memory, sensory perception, and storytelling.</p>
  </div>



  <div class="w-16 h-px bg-white/10 my-20"></div>

  <NavArrows />

</div>