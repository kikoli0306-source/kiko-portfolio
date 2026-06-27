<script lang="ts">
  let lang: 'en' | 'zh' = $state('en');
</script>

<svelte:head>
  <title>SmartDrag — Kiko Li</title>
</svelte:head>

<div class="root">
  <div class="content">
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; projects</a>
      <div class="lang-toggle">
        <button
          class="lang-btn"
          class:active={lang === 'en'}
          onclick={() => (lang = 'en')}
        >EN</button>
        <span class="lang-sep">/</span>
        <button
          class="lang-btn"
          class:active={lang === 'zh'}
          onclick={() => (lang = 'zh')}
        >中文</button>
      </div>
    </div>

    <div class="header">
      <h1 class="title">SmartDrag</h1>
      <p class="subtitle">Digital Twin · Unreal Engine 5 · Team Project</p>
    </div>

    {#if lang === 'en'}
      <p class="desc">
        SmartDrag is a portable digital twin scene editor built on Unreal Engine 5, designed to lower the barrier for industrial 3D simulation. The platform allows non-technical users to drag and drop 3D models from a standard library, bind real-time data from multiple sources, and construct complete digital twin scenes without writing code.
      </p>
      <p class="desc">
        Key features include AI-assisted scene generation from text descriptions, automated inspection path planning, intelligent fault alerting with AI-generated emergency responses, weather and fire visual effects, and a real-time monitoring dashboard. The system was developed with oil field operations as the primary use case, and has been deployed in partnership with industry organizations including Hangzhou Tuwei Digital Intelligence Technology.
      </p>
      <p class="desc">
        This project was awarded the Bronze Award at the 19th Zhejiang Provincial "Challenge Cup" College Student Academic Science & Technology Competition ("AI+" Track), developed with a cross-disciplinary team of seven.
      </p>
    {:else}
      <p class="desc">
        智拖快手是一款基于 Unreal Engine 5 的便携式数字孪生场景编辑器，旨在降低工业三维仿真的使用门槛。平台支持非专业用户通过拖拽方式从标准模型库中选取模型，绑定多源实时数据，无需编写代码即可快速构建完整的数字孪生场景。
      </p>
      <p class="desc">
        核心功能包括：AI 一键生成场景、自动巡检路径规划、智能故障报警与 AI 应急方案生成、天气与火焰特效、实时可视化大屏监控。系统以油田运维为核心应用场景，已与杭州图威数字智能科技等企业联合部署落地。
      </p>
      <p class="desc">
        本项目荣获第十九届浙江省"挑战杯"大学生课外学术科技作品竞赛铜奖（"AI+"赛道），由七人跨学科团队共同开发。
      </p>
    {/if}

    <div class="section">
      <p class="section-label">{lang === 'en' ? 'Presentation' : '项目演示'}</p>
      <div class="embed-wrap">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vSBawBGIuB7UpDyR_seZRlXO36M3A3dK9wKsQr-9t03waeBscXSAFpRE74ipn1FAw/pubembed?start=false&loop=false&delayms=3000"
          frameborder="0"
          allowfullscreen
          class="embed"
        ></iframe>
      </div>
    </div>

    <div class="tags">
      {#each ['Unreal Engine 5', 'Digital Twin', 'AI', '3D Modeling', 'Data Visualization', 'Arduino'] as tag}
        <span class="tag">{tag}</span>
      {/each}
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
    align-items: center;
    justify-content: space-between;
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
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .lang-btn {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.25);
    transition: color 0.2s;
    font-family: inherit;
  }

  .lang-btn:hover {
    color: rgba(255, 255, 255, 0.6);
  }

  .lang-btn.active {
    color: rgba(255, 255, 255, 0.75);
  }

  .lang-sep {
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.15);
    user-select: none;
  }

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

  .section {
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .section-label {
    margin: 0;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
  }

  .embed-wrap {
    width: 100%;
    aspect-ratio: 16 / 9;
    border: 0.5px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    overflow: hidden;
  }

  .embed {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
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

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255, 255, 255, 0.1);
    margin: 72px 0;
  }
</style>
