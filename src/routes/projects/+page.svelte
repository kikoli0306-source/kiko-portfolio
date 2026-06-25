<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';

  interface Project {
    title: string;
    desc: string;
    tags: string[];
    link?: string;
    cover?: string;
    slug?: string;
  }

  const projects: Project[] = [
    {
      title: 'Brave Buddies',
      desc: 'A solo-developed 2D co-op platformer in Unity. Two players fight through forest, jungle, and snow levels together.',
      tags: ['Unity', 'C#', 'Game Design', '2D Platformer'],
      cover: '/brave-buddies/cover.png',
      slug: 'brave-buddies',
    },
    {
      title: 'Tangible Surveillance',
      desc: 'A data physicalization system using toio robots, projection mapping, and a physical map to make Chicago\'s ALPR camera network spatially tangible.',
      tags: ['toio', 'Projection Mapping', 'Data Physicalization', 'SvelteKit'],
      cover: '/tangible-surveillance/cover.jpg',
      slug: 'tangible-surveillance',
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
  ];
</script>

<svelte:head>
  <title>Projects — Kiko Li</title>
</svelte:head>

<div class="root">
  <div class="content">
    <h1 class="title">Projects</h1>

    <div class="grid">
      {#each projects as project}
        <svelte:element
          this={project.slug ? 'a' : 'div'}
          class="card"
          href={project.slug ? `/projects/${project.slug}` : undefined}
        >
          {#if project.cover}
            <img class="card-cover" src={project.cover} alt={project.title} />
          {/if}
          <h2 class="card-title">{project.title}</h2>
          <p class="card-desc">{project.desc}</p>
          <div class="tags">
            {#each project.tags as tag}
              <span class="tag">{tag}</span>
            {/each}
          </div>
          {#if project.link}
            <a class="card-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project ↗
            </a>
          {/if}
          {#if project.slug}
            <span class="card-link">View Project →</span>
          {/if}
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
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 80px 40px 120px;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    max-width: 860px;
  }

  .title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 300;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.85);
    font-style: italic;
    margin: 0 0 60px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }

  .card {
    background: rgba(255, 255, 255, 0.03);
    border: 0.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
    transition: border-color 0.25s, background 0.25s;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
  }

  .card-cover {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  .card h2,
  .card p,
  .card .tags,
  .card .card-link {
    margin-left: 32px;
    margin-right: 32px;
  }

  .card h2 { margin-top: 24px; }
  .card p { margin-top: 14px; }
  .card .tags { margin-top: 14px; }
  .card .card-link { margin-top: 14px; margin-bottom: 24px; }

  .card:hover {
    background: rgba(255, 255, 255, 0.055);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .card-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.85);
  }

  .card-desc {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.45);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 4px;
  }

  .tag {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.5);
  }

  .card-link {
    margin-top: 4px;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.35);
    text-decoration: none;
    transition: color 0.2s;
    align-self: flex-start;
  }

  .card-link:hover {
    color: rgba(255, 255, 255, 0.75);
  }
</style>
