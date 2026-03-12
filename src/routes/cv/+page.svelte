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

  <div class="max-w-2xl mb-20">
    <p class="font-body text-xs text-white/30 tracking-[0.3em] uppercase mb-10">Experience</p>
    <div class="space-y-12">

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Tineco</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Jul. – Aug. 2024</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Executive Producer / Producer · Hangzhou, China</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Led end-to-end advertising production from conceptualization to execution</li>
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Directed cross-functional teams across creative, filming, and post-production</li>
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Managed project budgets and resource allocation across multiple productions</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">CHTV Media and Entertainment LLC</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Feb. 2024</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Make-up Artist and Stylist · California, USA</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Designed costume and makeup concepts aligned with program themes</li>
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Collaborated with directors, producers, and photographers for visual cohesion</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Hangzhou Tuwei Digital Intelligence Technology</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Mar. – Sep. 2023</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">3D Computer Intern · Hangzhou, China</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Rendered large-scale industrial scenes using VRay in 3DMax</li>
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Modelled one-to-one 3D replicas of petroleum industry equipment from technical manuals</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Zhejiang University of Finance and Economics</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Sep. 2022 – Jan. 2023</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Research Assistant · Online</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Collected and organised West Lake visitor flow data; simulated tourist personality profiles</li>
        </ul>
      </div>

    </div>
  </div>

  <div class="w-16 h-px bg-white/10 mb-20"></div>

  <div class="max-w-2xl mb-20">
    <p class="font-body text-xs text-white/30 tracking-[0.3em] uppercase mb-10">Projects</p>
    <div class="space-y-12">

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Ocean Intelligent Visualisation and Monitoring System</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Nov. 2024 – Mar. 2025</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Data Researcher and 3D Visualizer</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Built a smart agent to crawl ocean data using Coze powered by DeepSeek</li>
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Modelled ocean and harbour environments in 3D with animated demo</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">The Pillow Man</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Jun. 2024</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Art Director · Chicago</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Led prop production and set design for theatrical production</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Student Short Film: August 4th</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">Aug. 2024</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Art Director and BTS Photographer · Changsha, China</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Designed complete visual atmosphere through set dressing and color palette</li>
        </ul>
      </div>

      <div>
        <div class="flex justify-between items-start mb-2">
          <p class="font-body text-base text-white/80">Deified</p>
          <p class="font-body text-xs text-white/25 tracking-widest shrink-0 ml-4">May 2023</p>
        </div>
        <p class="font-body text-sm text-white/40 mb-3">Art Director · Chicago</p>
        <ul class="space-y-2">
          <li class="font-body text-sm text-white/40 font-light leading-relaxed">Designed visual style including color schemes, scene composition, and lighting</li>
        </ul>
      </div>

    </div>
  </div>

  <div class="w-16 h-px bg-white/10 mb-20"></div>

  <div class="max-w-2xl mb-20">
    <p class="font-body text-xs text-white/30 tracking-[0.3em] uppercase mb-10">Skills</p>
    <div class="space-y-10">

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Creative Technology and Digital Media</p>
        <ul class="space-y-1">
          <li class="font-body text-sm text-white/40 font-light">Unity (C#) — 2D/3D interactive environments, gameplay mechanics, camera systems</li>
          <li class="font-body text-sm text-white/40 font-light">Unreal Engine 5 — real-time visualization, simulation environments</li>
          <li class="font-body text-sm text-white/40 font-light">3ds Max and V-Ray — architectural and industrial 3D modeling and rendering</li>
          <li class="font-body text-sm text-white/40 font-light">Cesium for Unreal — geospatial visualization and real-world terrain integration</li>
        </ul>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Web Development</p>
        <p class="font-body text-sm text-white/40 font-light">SvelteKit · TypeScript · Tailwind CSS · Shadcn UI · REST APIs · Vercel · Git and GitHub</p>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Data and Digital Humanities</p>
        <ul class="space-y-1">
          <li class="font-body text-sm text-white/40 font-light">SQL / SQLite — relational database design and queries</li>
          <li class="font-body text-sm text-white/40 font-light">Neo4j (Cypher) — graph databases and relationship modeling</li>
          <li class="font-body text-sm text-white/40 font-light">Protege / OWL — ontology modeling and knowledge representation</li>
          <li class="font-body text-sm text-white/40 font-light">Data modeling and metadata structures</li>
        </ul>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Creative and Research Practice</p>
        <p class="font-body text-sm text-white/40 font-light">Interactive storytelling · Digital cultural heritage · Data-driven visualization · Memory and sensory media</p>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Traditional Craft</p>
        <p class="font-body text-sm text-white/40 font-light">Oil Painting · Ceramics · Woodworking · Plaster · Screen Printing · Creative Makeup · Wax</p>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Software</p>
        <p class="font-body text-sm text-white/40 font-light">Adobe Photoshop · Illustrator · InDesign · Premiere · Rhino · Microsoft Office</p>
      </div>

      <div>
        <p class="font-body text-xs text-white/25 tracking-widest uppercase mb-3">Languages</p>
        <p class="font-body text-sm text-white/40 font-light">English (Fluent) · Mandarin Chinese (Native)</p>
      </div>

    </div>
  </div>

  <div class="w-16 h-px bg-white/10 mb-20"></div>

  <div class="flex justify-between items-center">
    <a href="/about" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8592; about</a>
    <a href="/work" class="font-body text-sm text-white/40 hover:text-white/80 tracking-widest transition-colors duration-300">&#8594; works</a>
  </div>

</div>