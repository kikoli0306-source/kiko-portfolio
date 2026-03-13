<script lang="ts">
  import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
  <title>CV - Kiko Li</title>
</svelte:head>

<div class="min-h-screen bg-[#0d0d0d] text-white/80 px-8 md:px-20 py-16">

  <div class="flex justify-between items-center">
    <a href="/" class="font-body text-xs text-white/30 hover:text-white/70 tracking-widest uppercase transition-colors duration-300">
      &#8592; back
    </a>
    <Button variant="outline" class="font-body text-xs tracking-widest uppercase text-white/50 border-white/20 hover:text-white/80 bg-transparent">
      <a href="/Kiko_Li_resume-v1(2).pdf" download>Download CV &#8595;</a>
    </Button>
  </div>

  <div class="mt-16 mb-20">
    <h1 class="font-display text-6xl md:text-8xl italic text-white/90">CV</h1>
    <p class="mt-3 font-body text-xs text-white/30 tracking-[0.4em] uppercase">Kiko Li · kikoli0306@gmail.com</p>
  </div>

  <div class="max-w-4xl space-y-24">

    <!-- Education -->
    <div>
      <p class="font-body text-xs tracking-[0.3em] uppercase text-zinc-500 mb-10">Education</p>
      <div class="space-y-6">

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">University of Chicago</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Jun. 2026</p>
          </div>
          <p class="font-body text-base text-white/50">Master of Arts — Digital Studies of Language, Culture, and History</p>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">School of the Art Institute of Chicago</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Jan. 2025</p>
          </div>
          <p class="font-body text-base text-white/50">Bachelor of Fine Arts — Painting and Drawing</p>
          <p class="font-body text-sm text-zinc-500 mt-1">Creative Honors Scholarship Recipient</p>
        </div>

      </div>
    </div>

    <!-- Experience -->
    <div>
      <p class="font-body text-xs tracking-[0.3em] uppercase text-zinc-500 mb-10">Experience</p>
      <div class="space-y-6">

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Tineco</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Jul. – Aug. 2024</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Executive Producer / Producer · Hangzhou, China</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Led end-to-end advertising production from conceptualization to execution</li>
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Directed cross-functional teams across creative, filming, and post-production</li>
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Managed project budgets and resource allocation across multiple productions</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">CHTV Media and Entertainment LLC</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Feb. 2024</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Make-up Artist and Stylist · California, USA</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Designed costume and makeup concepts aligned with program themes</li>
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Collaborated with directors, producers, and photographers for visual cohesion</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Hangzhou Tuwei Digital Intelligence Technology</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Mar. – Sep. 2023</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">3D Computer Intern · Hangzhou, China</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Rendered large-scale industrial scenes using VRay in 3DMax</li>
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Modelled one-to-one 3D replicas of petroleum industry equipment from technical manuals</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Zhejiang University of Finance and Economics</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Sep. 2022 – Jan. 2023</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Research Assistant · Online</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Collected and organised West Lake visitor flow data; simulated tourist personality profiles</li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Projects -->
    <div>
      <p class="font-body text-xs tracking-[0.3em] uppercase text-zinc-500 mb-10">Projects</p>
      <div class="space-y-6">

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Ocean Intelligent Visualisation and Monitoring System</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Nov. 2024 – Mar. 2025</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Data Researcher and 3D Visualizer</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Built a smart agent to crawl ocean data using Coze powered by DeepSeek</li>
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Modelled ocean and harbour environments in 3D with animated demo</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">The Pillow Man</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Jun. 2024</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Art Director · Chicago</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Led prop production and set design for theatrical production</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Student Short Film: August 4th</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">Aug. 2024</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Art Director and BTS Photographer · Changsha, China</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Designed complete visual atmosphere through set dressing and color palette</li>
          </ul>
        </div>

        <div class="bg-white/5 px-6 py-6 rounded-sm">
          <div class="flex justify-between items-start mb-3">
            <p class="font-body text-xl text-white font-medium">Deified</p>
            <p class="font-body text-sm tracking-wide text-zinc-500 shrink-0 ml-4">May 2023</p>
          </div>
          <p class="font-body text-base text-white/50 mb-4">Art Director · Chicago</p>
          <ul class="space-y-2">
            <li class="font-body text-sm text-zinc-400 leading-relaxed">Designed visual style including color schemes, scene composition, and lighting</li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Skills -->
    <div>
      <p class="font-body text-xs tracking-[0.3em] uppercase text-zinc-500 mb-10">Skills</p>
      <div class="space-y-4">

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Creative Technology and Digital Media</p>
          <p class="font-body text-sm text-zinc-400">Unity (C#) · Unreal Engine 5 · 3ds Max + V-Ray · Cesium for Unreal</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Web Development</p>
          <p class="font-body text-sm text-zinc-400">SvelteKit · TypeScript · Tailwind CSS · Shadcn UI · REST APIs · Vercel · Git and GitHub</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Data and Digital Humanities</p>
          <p class="font-body text-sm text-zinc-400">SQL / SQLite · Neo4j (Cypher) · Protege / OWL · Data modeling</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Creative and Research Practice</p>
          <p class="font-body text-sm text-zinc-400">Interactive storytelling · Digital cultural heritage · Data-driven visualization · Sensory media</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Traditional Craft</p>
          <p class="font-body text-sm text-zinc-400">Oil Painting · Ceramics · Woodworking · Plaster · Screen Printing · Creative Makeup · Wax</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Software</p>
          <p class="font-body text-sm text-zinc-400">Adobe Photoshop · Illustrator · InDesign · Premiere · Rhino · Microsoft Office</p>
        </div>

        <div class="bg-white/5 px-6 py-5 rounded-sm">
          <p class="font-body text-xs text-zinc-500 tracking-widest uppercase mb-3">Languages</p>
          <p class="font-body text-sm text-zinc-400">English (Fluent) · Mandarin Chinese (Native)</p>
        </div>

      </div>
    </div>

  </div>

  <div class="w-16 h-px bg-white/10 mt-24 mb-12"></div>

  <div class="flex justify-between items-center w-full">
    <a href="/about" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8592; about</a>
    <a href="/work" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8594; works</a>
  </div>

</div>