<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';
  import RainCanvas from '$lib/components/RainCanvas.svelte';
  import { onMount } from 'svelte';

  interface Project {
    title: string;
    desc: string;
    tags: string[];
    link?: string;
    cover?: string;
    preview?: string;
    slug?: string;
    canvas?: boolean;
  }

  const projects: Project[] = [
    {
      title: 'Wheel of Fortune',
      desc: 'A gesture-controlled tarot selection device that turns card selection into an embodied ritual. Seven tarot cards rotate on a motorized platform, controlled by non-contact hand gestures.',
      tags: ['Arduino', 'Ultrasonic Sensors', 'Stepper Motor', 'Physical Computing', 'Interaction Design'],
      cover: '/wheel-of-fortune/cover.jpg',
      preview: '/wheel-of-fortune/preview.mp4',
      slug: 'wheel-of-fortune',
    },
    {
      title: 'Rain Touch',
      desc: 'A tangible interface that translates falling rain into touch. A Processing sketch generates a field of raindrops, and as each drop lands, the system drives a vibration motor through Arduino — letting users feel the rhythm of rain.',
      tags: ['Arduino', 'Processing', 'Serial Communication', 'Haptics', 'Physical Computing'],
      slug: 'rain-touch',
      canvas: true,
    },
    {
      title: 'Tangible Surveillance',
      desc: 'A data physicalization system using toio robots, projection mapping, and a physical map to make Chicago\'s ALPR camera network spatially tangible.',
      tags: ['toio', 'Projection Mapping', 'Data Physicalization', 'SvelteKit'],
      cover: '/tangible-surveillance/cover.jpg',
      preview: '/tangible-surveillance/preview.mp4',
      slug: 'tangible-surveillance',
    },
    {
      title: 'Brave Buddies',
      desc: 'A solo-developed 2D co-op platformer in Unity. Two players fight through forest, jungle, and snow levels together.',
      tags: ['Unity', 'C#', 'Game Design', '2D Platformer'],
      cover: '/brave-buddies/cover.png',
      preview: '/brave-buddies/preview.mp4',
      slug: 'brave-buddies',
    },
    {
      title: 'Chicago ALPR Surveillance Dashboard',
      desc: 'A Streamlit dashboard mapping 595 recorded ALPR camera locations across Chicago and comparing camera concentration with community-level socioeconomic hardship indicators.',
      tags: ['Python', 'Streamlit', 'Plotly', 'GeoPandas', 'Data Visualization'],
      cover: '/alpr-dashboard/cover.jpg',
      slug: 'alpr-dashboard',
    },
    {
      title: 'LLM Gender Bias Study',
      desc: 'A study examining how large language models reproduce gendered assumptions through five experiments testing Gemini and DeepSeek across family roles, occupations, and prompt interventions.',
      tags: ['Python', 'Streamlit', 'Plotly', 'Gemini API', 'DeepSeek API', 'AI Research'],
      cover: '/llm-gender-bias/cover.jpg',
      slug: 'llm-gender-bias',
    },
    {
      title: 'SmartDrag',
      desc: 'A portable digital twin scene editor built on Unreal Engine 5. Drag-and-drop 3D scene construction, real-time data binding, AI-assisted generation, and intelligent monitoring for industrial environments.',
      tags: ['Unreal Engine 5', 'Digital Twin', 'AI', '3D', 'Data Visualization'],
      slug: 'smartdrag',
    },
  ];

  onMount(() => {
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      const items = document.querySelectorAll('.project-item');
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
      items.forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${(i % 3) * 80}ms`;
        observer.observe(el);
      });
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  });
</script>

<svelte:head>
  <title>Projects — Kiko Li</title>
</svelte:head>

<div class="root">
  <div class="content">
    <h1 class="title">Projects</h1>
    <div class="grid">
      {#each projects as project, i}
        <svelte:element
          this={project.slug ? 'a' : 'div'}
          class="project-item"
          href={project.slug ? `/projects/${project.slug}` : undefined}
        >
          <div class="cover-wrap">
            {#if project.preview}
              <video src={project.preview} autoplay muted loop playsinline class="cover-img"></video>
            {:else if project.cover}
              <img class="cover-img" src={project.cover} alt={project.title} />
            {:else if project.canvas}
              <RainCanvas />
            {:else}
              <div class="cover-placeholder"></div>
            {/if}
          </div>
          <div class="meta">
            <h2 class="project-title">{project.title}</h2>
            <p class="project-desc">{project.desc}</p>
            <div class="tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            {#if project.link}
              <a class="project-link" href={project.link} target="_blank" rel="noopener noreferrer">View Project ↗</a>
            {:else if project.slug}
              <span class="project-link">View Project →</span>
            {/if}
          </div>
        </svelte:element>
      {/each}
    </div>
  </div>
  <NavArrows />
</div>

<style>
  .root {
    width: 100vw;
    min-height: 100dvh;
    background: #08081a;
    padding: 80px 40px 120px;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .title {
    font-family: "Fraunces", serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 300;
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.88);
    margin: 0 0 72px;
    line-height: 1.1;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px 32px;
  }

  .project-item {
    display: flex;
    flex-direction: column;
    gap: 0;
    text-decoration: none;
    color: inherit;
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.8s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
  }

  .project-item:global(.visible) {
    opacity: 1;
    transform: translateY(0);
  }

  .cover-wrap {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    margin-bottom: 20px;
    background: rgba(255,255,255,0.03);
  }

  .cover-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .project-item:hover .cover-img {
    transform: scale(1.03);
  }

  .cover-wrap video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .project-item:hover .cover-wrap video {
    transform: scale(1.03);
  }

  .cover-placeholder {
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.04);
    border: 0.5px solid rgba(255,255,255,0.06);
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .project-title {
    font-family: "Fraunces", serif;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 0.04em;
    color: rgba(255,255,255,0.85);
    margin: 0;
  }

  .project-desc {
    font-size: 0.75rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.4);
    margin: 0;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }

  .tag {
    background: rgba(255,255,255,0.05);
    border-radius: 20px;
    padding: 2px 10px;
    font-size: 0.65rem;
    letter-spacing: 0.04em;
    color: rgba(255,255,255,0.35);
  }

  .project-link {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    text-decoration: none;
    transition: color 0.2s;
  }

  .project-item:hover .project-link {
    color: rgba(255,255,255,0.65);
  }
</style>
