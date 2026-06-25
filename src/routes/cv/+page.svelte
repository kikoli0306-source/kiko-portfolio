<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';

  let lang = $state<'en' | 'zh'>('en');
</script>

<svelte:head>
  <title>CV — Kiko Li</title>
</svelte:head>

<div class="root">

  <div class="top-bar">
    <a href="/" class="back">&#8592; back</a>
    <div class="top-actions">
      <button class="lang-toggle" onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
        {lang === 'en' ? '中文' : 'English'}
      </button>
      <a href="/Kiko_Li_resume-v1(2).pdf" download class="download">Download CV ↓</a>
    </div>
  </div>

  <div class="header">
    <h1 class="title">CV</h1>
    <p class="subtitle">Kiko Li · kikoli0306@gmail.com</p>
  </div>

  <div class="sections">

    {#if lang === 'en'}

    <div class="section">
      <p class="section-label">Professional Summary</p>
      <div class="card">
        <p class="body-text">Recent M.A. graduate from the University of Chicago bridging data analysis, creative technology, and web development. Experienced in building interactive applications and data-driven visualizations across design, digital media, and product contexts.</p>
      </div>
    </div>

    <div class="section">
      <p class="section-label">Education</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">University of Chicago</p>
          <p class="entry-date">June 2026</p>
        </div>
        <p class="entry-sub">M.A. in Digital Media Studies</p>
        <ul class="bullets">
          <li>Merit Scholarship Recipient — $20,000</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">School of the Art Institute of Chicago</p>
          <p class="entry-date">Jan 2025</p>
        </div>
        <p class="entry-sub">Bachelor of Fine Arts (Painting & Drawing)</p>
        <ul class="bullets">
          <li>Creative Honors Scholarship Recipient — $54,000</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">Internship Experience</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Fathia</p>
          <p class="entry-date">May – Jun 2026</p>
        </div>
        <p class="entry-sub">User Data Analytics Intern</p>
        <ul class="bullets">
          <li>Collected and structured user data via the YouTube Data API; built datasets to support potential customer identification and segmentation</li>
          <li>Developed automated scripts to model multi-dimensional user behavior; integrated LLM to generate personalized outreach emails at scale</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Tineco</p>
          <p class="entry-date">Jul – Aug 2024</p>
        </div>
        <p class="entry-sub">Producer / Executive Producer · Hangzhou, China</p>
        <ul class="bullets">
          <li>Led end-to-end execution of ad campaigns; managed production budget and vendor negotiations across multiple projects</li>
          <li>Coordinated cross-functional teams (creative, logistics, media) to deliver shooting plans on schedule</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Hangzhou Tuwei Digital Intelligence Technology</p>
          <p class="entry-date">Jun – Sep 2023</p>
        </div>
        <p class="entry-sub">3D Visualization Intern</p>
        <ul class="bullets">
          <li>Built 1:1 scale 3D models of petroleum equipment using 3ds Max and VRay; delivered production-ready assets on deadline</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">Projects</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Flock Camera Data Physicalization</p>
          <p class="entry-date">Apr 2026</p>
        </div>
        <p class="entry-sub">University of Chicago</p>
        <ul class="bullets">
          <li>Built a tangible data physicalization installation mapping Chicago Flock/ALPR camera distribution using Toio robots and projection mapping</li>
          <li>Designed dual-robot interaction for spatial selection and demographic filtering</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Data & Systems Project Member</p>
          <p class="entry-date">Nov 2024 – Mar 2025</p>
        </div>
        <p class="entry-sub">Ocean Intelligent Visualization Project — Remote</p>
        <ul class="bullets">
          <li>Processed and cleaned 10M+ global ocean records; built a smart agent (Coze + DeepSeek) to automate data crawling via REST APIs</li>
          <li>Developed SvelteKit dashboards and animated demos to present data insights; assisted in 3D modelling of ocean environments</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Set Design — Deified & The Pillow Man</p>
          <p class="entry-date">2023 – 2024</p>
        </div>
        <ul class="bullets">
          <li>Directed visual style and scene composition for two theatrical productions in Chicago</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Data Analysis Project Member</p>
          <p class="entry-date">Jun – Sep 2022</p>
        </div>
        <p class="entry-sub">Zhejiang University of Finance and Economics</p>
        <ul class="bullets">
          <li>Analyzed West Lake visitor flow data; co-authored peer-reviewed paper published in Scientific Reports (2023)</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">Awards</p>
      <div class="card">
        <p class="entry-title">Bronze Award, 19th Zhejiang Provincial "Challenge Cup" — "AI+" Track</p>
        <ul class="bullets">
          <li>Co-developed "SmartDrag: A Portable Digital Twin Scene Editor" with a cross-disciplinary team</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">Skills</p>
      <div class="card skill-card">
        <p class="skill-cat">Programming</p>
        <p class="skill-val">Python, JavaScript, TypeScript, C/C++, Java, SQL</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">Web & Data</p>
        <p class="skill-val">SvelteKit, Tailwind CSS, REST API, Git/GitHub, Vercel, Streamlit, Excel, Dashboard Design</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">Creative Tech</p>
        <p class="skill-val">Unity (C#), Unreal Engine 5, Arduino</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">3D & Design</p>
        <p class="skill-val">Blender, Fusion 360, 3ds Max/VRay, 3D Printing, Figma, Photoshop, Illustrator, Premiere</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">Languages</p>
        <p class="skill-val">Mandarin Chinese (Native) · English (Full Professional Proficiency)</p>
      </div>
    </div>

    {:else}

    <div class="section">
      <p class="section-label">个人简介</p>
      <div class="card">
        <p class="body-text">芝加哥大学数字媒体研究方向硕士应届毕业生，融合数据分析、创意技术与网页开发三大领域。曾深度参与交互应用开发与数据可视化项目，实践横跨设计、数字媒体与产品多个方向。</p>
      </div>
    </div>

    <div class="section">
      <p class="section-label">教育背景</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">芝加哥大学</p>
          <p class="entry-date">2026年6月</p>
        </div>
        <p class="entry-sub">数字媒体研究 硕士</p>
        <ul class="bullets">
          <li>荣获优秀奖学金，金额2万美元</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">芝加哥艺术学院</p>
          <p class="entry-date">2025年1月</p>
        </div>
        <p class="entry-sub">绘画与素描 艺术学士（BFA）</p>
        <ul class="bullets">
          <li>荣获创意荣誉奖学金，金额5.4万美元</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">实习经历</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Fathia</p>
          <p class="entry-date">2026年5月 — 6月</p>
        </div>
        <p class="entry-sub">用户数据分析实习生</p>
        <ul class="bullets">
          <li>调用YouTube Data API对目标用户群体进行系统性数据采集，构建结构化用户数据集，支持潜在客户识别与分层分析</li>
          <li>开发自动化数据处理脚本，对用户行为特征进行多维度建模，结合LLM批量生成个性化营销邮件，显著提升客户触达效率</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">添可（Tineco）</p>
          <p class="entry-date">2024年7月 — 8月</p>
        </div>
        <p class="entry-sub">制片人 / 执行制片人 · 杭州，中国</p>
        <ul class="bullets">
          <li>统筹多个广告项目的全流程执行，负责预算管控与供应商资源谈判</li>
          <li>协调创意、物流、媒介等跨部门团队高效协作，确保拍摄计划如期落地</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">杭州图微数字智能科技</p>
          <p class="entry-date">2023年6月 — 9月</p>
        </div>
        <p class="entry-sub">三维可视化实习生</p>
        <ul class="bullets">
          <li>运用3ds Max与VRay完成石油设备的1:1精度三维建模，按时交付符合生产要求的数字资产</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">项目经历</p>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">Flock摄像头数据实物化装置</p>
          <p class="entry-date">2026年4月</p>
        </div>
        <p class="entry-sub">芝加哥大学</p>
        <ul class="bullets">
          <li>结合Toio机器人与投影映射技术，打造可触摸感知的空间数据装置，直观呈现芝加哥Flock/ALPR摄像头的地理分布</li>
          <li>设计双机器人协同交互机制，支持区域选择与人口统计学维度的实时筛选</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">数据与系统项目成员</p>
          <p class="entry-date">2024年11月 — 2025年3月</p>
        </div>
        <p class="entry-sub">海洋智能可视化项目（远程）</p>
        <ul class="bullets">
          <li>清洗处理逾1000万条全球海洋数据；基于Coze与DeepSeek搭建智能体，通过REST API完成数据自动化采集</li>
          <li>使用SvelteKit开发数据可视化仪表盘与动态演示页面，并参与海洋场景的三维环境建模</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">舞台美术置景 —《Deified》与《枕头人》</p>
          <p class="entry-date">2023 — 2024</p>
        </div>
        <ul class="bullets">
          <li>担任芝加哥两部话剧的视觉风格统筹与场景构图设计</li>
        </ul>
      </div>
      <div class="card">
        <div class="entry-header">
          <p class="entry-title">数据分析项目成员</p>
          <p class="entry-date">2022年6月 — 9月</p>
        </div>
        <p class="entry-sub">浙江财经大学</p>
        <ul class="bullets">
          <li>深入分析西湖景区游客流量数据，合著同行评审学术论文并发表于《Scientific Reports》（2023年）</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">获奖情况</p>
      <div class="card">
        <p class="entry-title">铜奖 — 浙江省第十九届"挑战杯"大学生课外学术科技作品竞赛"人工智能+"专项赛</p>
        <ul class="bullets">
          <li>与跨学科团队联合研发作品《智拖快手——便携式数字孪生场景编辑器》</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <p class="section-label">专业技能</p>
      <div class="card skill-card">
        <p class="skill-cat">编程语言</p>
        <p class="skill-val">Python、JavaScript、TypeScript、C/C++、Java、SQL</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">网页与数据</p>
        <p class="skill-val">SvelteKit、Tailwind CSS、REST API、Git/GitHub、Vercel、Streamlit、Excel、仪表盘设计</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">创意技术</p>
        <p class="skill-val">Unity（C#）、Unreal Engine 5、Arduino</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">三维与设计</p>
        <p class="skill-val">Blender、Fusion 360、3ds Max/VRay、3D打印、Figma、Photoshop、Illustrator、Premiere</p>
      </div>
      <div class="card skill-card">
        <p class="skill-cat">语言能力</p>
        <p class="skill-val">中文（普通话，母语）· 英语（专业工作语言）</p>
      </div>
    </div>

    {/if}

  </div>

  <div class="divider"></div>
  <NavArrows />

</div>

<style>
  .root {
    width: 100vw;
    min-height: 100dvh;
    background: #08081a;
    padding: 80px 40px 120px;
    box-sizing: border-box;
    color: rgba(255,255,255,0.8);
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-actions {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .back {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255,255,255,0.3);
    text-decoration: none;
    transition: color 0.2s;
  }
  .back:hover { color: rgba(255,255,255,0.75); }

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
  .lang-toggle:hover {
    color: rgba(255,255,255,0.75);
    border-color: rgba(255,255,255,0.35);
  }

  .download {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255,255,255,0.3);
    text-decoration: none;
    transition: color 0.2s;
  }
  .download:hover { color: rgba(255,255,255,0.75); }

  .header {
    margin-top: 56px;
    margin-bottom: 64px;
  }

  .title {
    font-family: "Fraunces", serif;
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 600;
    letter-spacing: 0.05em;
    color: rgba(255,255,255,0.88);
    margin: 0;
    line-height: 1.1;
  }

  .subtitle {
    margin: 10px 0 0;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: rgba(255,255,255,0.3);
    text-transform: uppercase;
  }

  .sections {
    max-width: 860px;
    display: flex;
    flex-direction: column;
    gap: 56px;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-label {
    font-size: 0.68rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    margin: 0 0 4px;
  }

  .card {
    background: rgba(255,255,255,0.03);
    border: 0.5px solid rgba(255,255,255,0.08);
    border-radius: 6px;
    padding: 20px 24px;
  }

  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 4px;
  }

  .entry-title {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255,255,255,0.85);
    margin: 0;
  }

  .entry-date {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.3);
    letter-spacing: 0.05em;
    white-space: nowrap;
    margin-left: 16px;
  }

  .entry-sub {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.4);
    margin: 4px 0 10px;
  }

  .body-text {
    font-size: 0.82rem;
    line-height: 1.9;
    color: rgba(255,255,255,0.5);
    margin: 0;
  }

  .bullets {
    margin: 8px 0 0 0;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .bullets li {
    font-size: 0.78rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.45);
  }

  .skill-card {
    display: flex;
    gap: 24px;
    align-items: baseline;
  }

  .skill-cat {
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.25);
    white-space: nowrap;
    min-width: 120px;
    margin: 0;
  }

  .skill-val {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.6;
    margin: 0;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255,255,255,0.1);
    margin: 72px 0;
  }
</style>
