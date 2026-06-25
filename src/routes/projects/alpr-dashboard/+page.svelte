<svelte:head>
  <title>Chicago ALPR Surveillance Dashboard — Kiko Li</title>
</svelte:head>

<div class="root">
  <div class="content">
    <a href="/projects" class="back">&#8592; projects</a>

    <div class="header">
      <h1 class="title">Chicago ALPR Surveillance Dashboard</h1>
      <p class="subtitle">Data Visualization · Public Safety Technology</p>
    </div>

    <p class="desc">
      This project examines where recorded automated license plate reader (ALPR) cameras appear
      in Chicago and how their distribution relates to community-level socioeconomic hardship.
      Using 595 recorded ALPR camera locations, camera points were spatially joined to Chicago's
      77 community area polygons and compared with hardship, poverty, unemployment, and income
      indicators.
    </p>

    <p class="desc">
      The dashboard includes an ALPR camera point map, side-by-side community maps for camera
      concentration and socioeconomic context, a hardship/camera quadrant scatter plot, a
      proportional symbol map, an operator composition chart, and a ranked chart of high-exposure
      community areas. The goal is not to prove causation, but to make spatial patterns of public
      safety technology visible and interpretable.
    </p>

    <div class="tags">
      {#each ['Python', 'Streamlit', 'Plotly', 'GeoPandas', 'Data Visualization'] as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <div class="actions">
      <a
        class="action-btn"
        href="https://alpr-surveillance-dashboard-axawcpzaowmvest455ladk.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ View Dashboard
      </a>
      <a
        class="action-btn"
        href="https://github.com/kikoli0306-source/alpr-surveillance-dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        ↗ GitHub
      </a>
    </div>

    <p class="embed-hint">scroll to explore · if the dashboard doesn't load, open it directly ↗</p>

    <div class="embed-wrap">
      <iframe
        src="https://alpr-surveillance-dashboard-axawcpzaowmvest455ladk.streamlit.app/?embedded=true"
        title="Chicago ALPR Surveillance Dashboard"
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
</style>
