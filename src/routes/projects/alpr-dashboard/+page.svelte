<script lang="ts">
  let lang = $state<'en' | 'zh'>('en');
</script>

<svelte:head>
  <title>Chicago ALPR Surveillance Dashboard — Kiko Li</title>
</svelte:head>

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

    {:else}

    <div class="header">
      <h1 class="title">芝加哥 ALPR 监控仪表盘</h1>
      <p class="subtitle">数据可视化 · 公共安全技术</p>
    </div>

    <p class="desc">
      本项目考察记录在案的自动车牌识别（ALPR）摄像头在芝加哥各地的分布情况，及其与社区层面社会经济困境指数之间的关联。通过对 595 个 ALPR 摄像头位置数据进行空间关联分析，将摄像头点位与芝加哥 77 个社区区块多边形匹配，并与困境指数、贫困率、失业率及收入水平等指标进行比较。
    </p>

    <p class="desc">
      仪表盘包含 ALPR 摄像头分布点图、社区摄像头密度与社会经济背景的对比地图、困境/摄像头四象限散点图、比例符号地图、运营主体构成图，以及高曝光社区的排名图表。项目的目标不在于证明因果关系，而是让公共安全技术的空间分布模式可见、可解读。
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
        ↗ 查看仪表盘
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

    <p class="embed-hint">可滚动浏览 · 如仪表盘未加载，请直接点击上方链接打开 ↗</p>

    {/if}

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
