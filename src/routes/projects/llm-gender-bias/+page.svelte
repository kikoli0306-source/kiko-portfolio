<script lang="ts">
  let lightbox: string | null = $state(null);
</script>

<svelte:head>
  <title>LLM Gender Bias Study — Kiko Li</title>
</svelte:head>

<svelte:window onkeydown={(e) => { if (e.key === 'Escape') lightbox = null; }} />

<div class="root">
  <div class="content">
    <a href="/projects" class="back">&#8592; projects</a>

    <div class="header">
      <h1 class="title">LLM Gender Bias Study</h1>
      <p class="subtitle">AI Research · Computational Humanities</p>
    </div>

    <p class="desc">
      This project examines how large language models reproduce gendered assumptions embedded in
      their training data. Through five experiments testing Gemini 2.5 Flash and DeepSeek V4
      Flash, it measures how models handle gender in family-role questions, occupational
      descriptions, and prompt interventions — revealing that bias is not a technical flaw but a
      structural reflection of cultural patterns in language.
    </p>

    <div class="tags">
      {#each ['Python', 'Streamlit', 'Plotly', 'Gemini API', 'DeepSeek API', 'AI Research'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <div class="actions">
      <a
        class="action-btn"
        href="https://ai-bias-project-dashboard-pfpkwiwsbcw3nph4lwdusd.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ View Dashboard
      </a>
    </div>

    <button
      class="cover-btn"
      onclick={() => lightbox = '/llm-gender-bias/cover.jpg'}
      aria-label="Enlarge dashboard screenshot"
    >
      <img
        src="/llm-gender-bias/cover.jpg"
        alt="LLM Gender Bias Study dashboard interface"
        class="cover"
      />
    </button>

    <p class="embed-hint">scroll to explore · if the dashboard doesn't load, open it directly ↗</p>

    <div class="embed-wrap">
      <iframe
        src="https://ai-bias-project-dashboard-pfpkwiwsbcw3nph4lwdusd.streamlit.app/?embedded=true"
        title="LLM Gender Bias Study Dashboard"
        frameborder="0"
        class="embed"
      ></iframe>
    </div>

    <div class="divider"></div>

    <a href="/projects" class="back">&#8592; back to projects</a>
  </div>
</div>

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

  .header {
    margin-top: 56px;
  }

  .title {
    font-size: clamp(2.5rem, 7vw, 5rem);
    font-weight: 300;
    letter-spacing: 0.12em;
    color: rgba(255, 255, 255, 0.88);
    font-style: italic;
    margin: 0;
    line-height: 1.1;
  }

  .subtitle {
    margin: 10px 0 0;
    font-size: 0.85rem;
    letter-spacing: 0.12em;
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

  .actions {
    margin-top: 32px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .action-btn {
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
  }

  .action-btn:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 0.95);
  }

  .cover-btn {
    margin-top: 40px;
    background: none;
    border: none;
    padding: 0;
    cursor: zoom-in;
    border-radius: 6px;
    overflow: hidden;
    display: block;
    outline: 0.5px solid rgba(255, 255, 255, 0.08);
    transition: outline-color 0.2s;
  }

  .cover-btn:hover {
    outline-color: rgba(255, 255, 255, 0.25);
  }

  .cover {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    border-radius: 6px;
  }

  .embed-hint {
    margin: 32px 0 8px;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.25);
    letter-spacing: 0.04em;
  }

  .embed-wrap {
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    overflow: hidden;
  }

  .embed {
    width: 100%;
    height: 700px;
    border: none;
    display: block;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.1);
    margin: 72px 0;
  }

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

{#if lightbox}
  <div
    class="overlay"
    role="button"
    tabindex="0"
    aria-label="Close image"
    onclick={() => lightbox = null}
    onkeydown={(e) => e.key === 'Enter' && (lightbox = null)}
  >
    <img class="lightbox-img" src={lightbox} alt="Screenshot enlarged" />
  </div>
{/if}
