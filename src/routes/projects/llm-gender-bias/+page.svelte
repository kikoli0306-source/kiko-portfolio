<script lang="ts">
  import ProjectLanguageToggle from "$lib/components/ProjectLanguageToggle.svelte";
  let lang = $state<'en' | 'zh'>('en');
</script>

<svelte:head>
  <title>LLM Gender Bias Study — Kiko Li</title>
</svelte:head>

<div class="root">
  <div class="content" lang={lang === 'en' ? 'en' : 'zh-CN'}>
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; {lang === 'en' ? 'projects' : '项目'}</a>
      <ProjectLanguageToggle bind:lang />
    </div>

    <div class="header">
      <h1 class="title">{lang === 'en' ? "LLM Gender Bias Study" : "大语言模型性别偏见研究"}</h1>
      <p class="subtitle">{lang === 'en' ? "AI Research · Computational Humanities" : "人工智能研究 · 计算人文学"}</p>
    </div>

    <p class="desc">
      {#if lang === 'en'}
      This project examines how large language models reproduce gendered assumptions embedded in
      their training data. Through five experiments testing Gemini 2.5 Flash and DeepSeek V4
      Flash, it measures how models handle gender in family-role questions, occupational
      descriptions, and prompt interventions — revealing that bias is not a technical flaw but a
      structural reflection of cultural patterns in language.
    {:else}
      本项目研究大型语言模型如何再现其训练数据中蕴含的性别预设。通过针对 Gemini 2.5 Flash 和 DeepSeek V4 Flash 的五项实验，项目衡量模型在家庭角色问题、职业描述和提示词干预中如何处理性别问题，揭示偏见并非技术缺陷，而是语言中文化模式的结构性反映。
      {/if}
    </p>

    <div class="tags">
      {#each (lang === 'en' ? ['Python', 'Streamlit', 'Plotly', 'Gemini API', 'DeepSeek API', 'AI Research'] : ['Python', 'Streamlit', 'Plotly', 'Gemini API', 'DeepSeek API', '人工智能研究']) as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <div class="actions">
      <a class="action-btn" href="https://ai-bias-project-dashboard-pfpkwiwsbcw3nph4lwdusd.streamlit.app/" target="_blank" rel="noopener noreferrer">{lang === 'en' ? "↗ View Dashboard" : "↗ 查看仪表盘"}</a>
    </div>

    <p class="embed-hint">{lang === 'en' ? "scroll to explore · if the dashboard does not load, open it directly" : "可滚动浏览 · 如仪表盘未加载，请直接打开"}</p>

    <div class="embed-wrap">
      <iframe src="https://ai-bias-project-dashboard-pfpkwiwsbcw3nph4lwdusd.streamlit.app/?embedded=true" title={lang === 'en' ? "LLM Gender Bias Study Dashboard" : "大语言模型性别偏见研究仪表盘"} frameborder="0" class="embed"></iframe>
    </div>

    <div class="divider"></div>

    <a href="/projects" class="back">&#8592; {lang === 'en' ? 'back to projects' : '返回项目列表'}</a>
  </div>
</div>

<style>
  .top-bar { display: flex; justify-content: space-between; align-items: center; }
  .root { width: 100vw; min-height: 100dvh; background: #08081a; display: flex; justify-content: center; padding: 80px 40px 120px; box-sizing: border-box; }
  .content { width: 100%; max-width: 860px; display: flex; flex-direction: column; gap: 0; }
  .back { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: lowercase; color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.2s; align-self: flex-start; }
  .back:hover { color: rgba(255,255,255,0.75); }
  .header { margin-top: 56px; }
  .title { font-family: "Fraunces", serif; font-size: clamp(2.5rem, 7vw, 5rem); font-weight: 300; letter-spacing: 0.05em; color: rgba(255,255,255,0.88); margin: 0; line-height: 1.1; }
  .subtitle { margin: 10px 0 0; font-size: 0.85rem; letter-spacing: 0.05em; color: rgba(255,255,255,0.35); text-transform: uppercase; }
  .desc { margin: 40px 0 0; font-size: 0.85rem; line-height: 2; color: rgba(255,255,255,0.5); max-width: 620px; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
  .tag { background: rgba(255,255,255,0.07); border-radius: 20px; padding: 3px 12px; font-size: 0.68rem; letter-spacing: 0.04em; color: rgba(255,255,255,0.45); }
  .actions { margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap; }
  .action-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; border: 0.5px solid rgba(255,255,255,0.2); border-radius: 6px; background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.75); font-size: 0.8rem; letter-spacing: 0.08em; text-decoration: none; transition: background 0.2s, border-color 0.2s, color 0.2s; }
  .action-btn:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.95); }
  .embed-hint { margin: 32px 0 8px; font-size: 0.7rem; color: rgba(255,255,255,0.25); letter-spacing: 0.04em; }
  .embed-wrap { border: 0.5px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden; }
  .embed { width: 100%; height: 700px; border: none; display: block; }
  .divider { width: 64px; height: 0.5px; background: rgba(255,255,255,0.1); margin: 72px 0; }
</style>
