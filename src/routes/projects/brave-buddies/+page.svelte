<script lang="ts">
  let lang = $state<'en' | 'zh'>('en');
  let lightbox: string | null = $state(null);

  const screenshots = [
    { src: '/brave-buddies/cover.png', alt: 'Title screen' },
    { src: '/brave-buddies/screenshot-2.png', alt: 'Forest level' },
    { src: '/brave-buddies/screenshot-3.png', alt: 'Snow level' },
    { src: '/brave-buddies/screenshot-4.png', alt: 'End screen' },
    { src: '/brave-buddies/screenshot-1.png', alt: 'Intro tutorial' },
  ];

  function openLightbox(src: string) { lightbox = src; }
  function closeLightbox() { lightbox = null; }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeLightbox();
  }
</script>

<svelte:head>
  <title>Brave Buddies — Kiko Li</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="root">
  <div class="content">
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; projects</a>
      <button class="lang-toggle" onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
        {lang === 'en' ? '中文' : 'English'}
      </button>
    </div>

    {#if lang === 'en'}

    <div class="header">
      <h1 class="title">Brave Buddies</h1>
      <p class="subtitle">Solo-developed 2D Co-op Platformer</p>
    </div>

    <p class="desc">
      A solo-developed 2D co-op platformer made in Unity. Players control Wilo and Gabby across
      three handcrafted biomes — forest, jungle, and snow — fighting enemies, collecting coins,
      and surviving together.
    </p>

    <div class="tags">
      {#each ['Unity', 'C#', 'Game Design', '2D Platformer'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <a
      class="play-btn"
      href="https://kikoli0620.itch.io/brave-buddies"
      target="_blank"
      rel="noopener noreferrer"
    >
      🎮 Play on itch.io
    </a>

    {:else}

    <div class="header">
      <h1 class="title">勇敢伙伴</h1>
      <p class="subtitle">独立开发的 2D 合作平台游戏</p>
    </div>

    <p class="desc">
      一款独立开发的 Unity 2D 合作平台游戏。玩家操控 Wilo 和 Gabby，穿越三个手工打造的场景——森林、丛林与雪地，一同击败敌人、收集金币、相互扶持。
    </p>

    <div class="tags">
      {#each ['Unity', 'C#', 'Game Design', '2D Platformer'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <a
      class="play-btn"
      href="https://kikoli0620.itch.io/brave-buddies"
      target="_blank"
      rel="noopener noreferrer"
    >
      🎮 在 itch.io 上试玩
    </a>

    {/if}

    <div class="gallery">
      {#each screenshots as shot}
        <button class="thumb" onclick={() => openLightbox(shot.src)} aria-label={shot.alt}>
          <img src={shot.src} alt={shot.alt} />
        </button>
      {/each}
    </div>

    <div class="divider"></div>

    <a href="/projects" class="back">&#8592; back to projects</a>
  </div>
</div>

{#if lightbox}
  <div
    class="overlay"
    role="button"
    tabindex="0"
    aria-label="Close image"
    onclick={closeLightbox}
    onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
  >
    <img class="lightbox-img" src={lightbox} alt="Screenshot enlarged" />
  </div>
{/if}

<style>
  .root {
    width: 100vw;
    min-height: 100dvh;
    background: #08081a;
    display: flex;
    justify-content: center;
    padding: 80px 40px 120px;
    box-sizing: border-box;
  }

  .content {
    width: 100%;
    max-width: 860px;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .back {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
    transition: color 0.2s;
    align-self: flex-start;
  }

  .back:hover {
    color: rgba(255, 255, 255, 0.75);
  }

  .lang-toggle {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255,255,255,0.3);
    background: none;
    border: 0.5px solid rgba(255,255,255,0.15);
    border-radius: 4px;
    padding: 4px 12px;
    cursor: pointer;
    transition: color 0.2s, border-color 0.2s;
  }
  .lang-toggle:hover { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.35); }

  .header {
    margin-top: 56px;
  }

  .title {
    font-family: "Fraunces", serif;
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.88);

    margin: 0;
    line-height: 1.1;
  }

  .subtitle {
    margin: 10px 0 0;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
  }

  .desc {
    margin: 40px 0 0;
    font-size: 0.85rem;
    line-height: 2;
    color: rgba(255, 255, 255, 0.5);
    max-width: 620px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 24px;
  }

  .tag {
    background: rgba(255, 255, 255, 0.07);
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 0.68rem;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.45);
  }

  .play-btn {
    margin-top: 32px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 24px;
    border: 0.5px solid rgba(255, 255, 255, 0.2);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-decoration: none;
    transition: background 0.2s, border-color 0.2s, color 0.2s;
    align-self: flex-start;
  }

  .play-btn:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.95);
  }

  .gallery {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .thumb {
    background: none;
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    overflow: hidden;
    padding: 0;
    cursor: zoom-in;
    transition: border-color 0.2s, transform 0.2s;
  }

  .thumb:hover {
    border-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.015);
  }

  .thumb img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.1);
    margin: 72px 0;
  }

  /* Lightbox */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.92);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: zoom-out;
    padding: 32px;
    box-sizing: border-box;
  }

  .lightbox-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 4px;
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.6);
  }
</style>
