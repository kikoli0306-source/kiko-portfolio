<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';

  let lang = $state<'en' | 'zh'>('en');

  $effect(() => {
    void lang; // re-run whenever lang changes
    let observer: IntersectionObserver;
    const raf = requestAnimationFrame(() => {
      const reveals = document.querySelectorAll('.reveal');
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const lines = entry.target.querySelectorAll('.line');
            lines.forEach((line, j) => {
              setTimeout(() => line.classList.add('visible'), j * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05 });
      reveals.forEach(el => observer.observe(el));
    });
    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  });
</script>

<svelte:head>
  <title>About — Kiko Li</title>
</svelte:head>

<div class="root">

  <div class="top-bar">
    <a href="/" class="back">&#8592; back</a>
    <div class="top-right">
      <div class="cv-wrapper">
        <button class="cv-btn">↓ cv</button>
        <div class="cv-menu">
          <a class="cv-option" href="/Kiko_Li_Resume_EN.docx" download>English</a>
          <a class="cv-option" href="/李想_中文简历.docx" download>中文</a>
        </div>
      </div>
      <button class="lang-toggle" onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
        {lang === 'en' ? '中文' : 'English'}
      </button>
    </div>
  </div>

  {#if lang === 'en'}

  <div class="hero reveal">
    <div class="clip"><h1 class="title line">Kiko Li</h1></div>
    <div class="clip"><p class="hero-sub line">Creative Technologist · Digital Media · Chicago</p></div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">About</span></div></div>
    <div class="sec-body">
      <div class="clip"><p class="body line">I'm Kiko Li, a creative technologist and digital media practitioner based in Chicago.</p></div>
      <div class="clip"><p class="body line">My background is in painting and drawing, but I've spent the last few years building data dashboards, interactive installations, SvelteKit apps, and 3D environments. The common thread is translation — turning data, memory, or systems into something a person can actually experience.</p></div>
      <div class="clip"><p class="body line">I hold an M.A. in Digital Media Studies from the University of Chicago and a BFA from the School of the Art Institute of Chicago. I work across Python, JavaScript, Unity, Unreal Engine, and whatever else the project needs.</p></div>
      <div class="clip"><p class="body line">I'm drawn to work where technical decisions have design consequences, and design decisions have real stakes.</p></div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">Education</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">University of Chicago</p><p class="edu-date">June 2026</p></div>
        <p class="edu-degree">M.A. in Digital Media Studies</p>
        <p class="edu-detail">Merit Scholarship Recipient — $20,000</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">School of the Art Institute of Chicago</p><p class="edu-date">Jan 2025</p></div>
        <p class="edu-degree">Bachelor of Fine Arts — Painting & Drawing</p>
        <p class="edu-detail">Creative Honors Scholarship Recipient — $54,000</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">Experience</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Fathia</p><p class="edu-date">May – Jun 2026</p></div>
        <p class="edu-degree">User Data Analytics Intern</p>
        <p class="edu-detail">Collected and structured user data via the YouTube Data API; built datasets to support potential customer identification and segmentation. Developed automated scripts to model multi-dimensional user behavior; integrated LLM to generate personalized outreach emails at scale.</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Tineco</p><p class="edu-date">Jul – Aug 2024</p></div>
        <p class="edu-degree">Producer / Executive Producer · Hangzhou, China</p>
        <p class="edu-detail">Led end-to-end execution of ad campaigns; managed production budget and vendor negotiations across multiple projects. Coordinated cross-functional teams (creative, logistics, media) to deliver shooting plans on schedule.</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Hangzhou Tuwei Digital Intelligence Technology</p><p class="edu-date">Jun – Sep 2023</p></div>
        <p class="edu-degree">3D Visualization Intern</p>
        <p class="edu-detail">Built 1:1 scale 3D models of petroleum equipment using 3ds Max and VRay; delivered production-ready assets on deadline.</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">Projects</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Flock Camera Data Physicalization</p><p class="edu-date">Apr 2026</p></div>
        <p class="edu-degree">University of Chicago</p>
        <p class="edu-detail">Built a tangible data physicalization installation mapping Chicago Flock/ALPR camera distribution using Toio robots and projection mapping. Designed dual-robot interaction for spatial selection and demographic filtering.</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Ocean Intelligent Visualization Project</p><p class="edu-date">Nov 2024 – Mar 2025</p></div>
        <p class="edu-degree">Data & Systems Project Member · Remote</p>
        <p class="edu-detail">Processed and cleaned 10M+ global ocean records; built a smart agent (Coze + DeepSeek) to automate data crawling via REST APIs. Developed SvelteKit dashboards and animated demos to present data insights; assisted in 3D modelling of ocean environments.</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Deified & The Pillow Man</p><p class="edu-date">2023 – 2024</p></div>
        <p class="edu-degree">Set Design</p>
        <p class="edu-detail">Directed visual style and scene composition for two theatrical productions in Chicago.</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Zhejiang University of Finance and Economics</p><p class="edu-date">Jun – Sep 2022</p></div>
        <p class="edu-degree">Data Analysis Project Member</p>
        <p class="edu-detail">Analyzed West Lake visitor flow data; co-authored peer-reviewed paper published in Scientific Reports (2023).</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">Awards</span></div></div>
    <div class="sec-body">
      <div class="clip"><p class="body line">Bronze Award, 19th Zhejiang Provincial "Challenge Cup" College Student Academic Science & Technology Competition ("AI+" Track) — Co-developed "SmartDrag: A Portable Digital Twin Scene Editor" with a cross-disciplinary team.</p></div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">Skills</span></div></div>
    <div class="sec-body skills-grid">
      <div class="skill line"><p class="skill-cat">Programming</p><p class="skill-val">Python, JavaScript, TypeScript, C/C++, Java, SQL</p></div>
      <div class="skill line"><p class="skill-cat">Web & Data</p><p class="skill-val">SvelteKit, Tailwind CSS, REST API, Git/GitHub, Vercel, Streamlit, Excel, Dashboard Design</p></div>
      <div class="skill line"><p class="skill-cat">Creative Tech</p><p class="skill-val">Unity (C#), Unreal Engine 5, Arduino</p></div>
      <div class="skill line"><p class="skill-cat">3D & Design</p><p class="skill-val">Blender, Fusion 360, 3ds Max/VRay, 3D Printing, Figma, Photoshop, Illustrator, Premiere</p></div>
      <div class="skill line"><p class="skill-cat">Languages</p><p class="skill-val">Mandarin Chinese (Native) · English (Full Professional Proficiency)</p></div>
    </div>
  </div>

  {:else}

  <div class="hero reveal">
    <div class="clip"><h1 class="title line">李想</h1></div>
    <div class="clip"><p class="hero-sub line">创意技术 · 数字媒体 · 芝加哥</p></div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">关于</span></div></div>
    <div class="sec-body">
      <div class="clip"><p class="body line">我是 李想，一名常驻芝加哥的创意技术与数字媒体实践者。</p></div>
      <div class="clip"><p class="body line">我的背景始于绘画与造型艺术，但过去几年里，我逐渐转向数据仪表盘、交互装置、SvelteKit 应用和 3D 环境的构建。贯穿这些实践的，是一种"转译"的过程——把数据、记忆或系统，转化为人能够真实感知和体验的东西。</p></div>
      <div class="clip"><p class="body line">我拥有芝加哥大学 Digital Media Studies 硕士学位，以及芝加哥艺术学院艺术学士学位。我喜欢那些真正需要在技术和设计之间来回判断的工作。对我来说，技术从来不只是实现功能，设计也不只是让东西看起来更好。一个技术选择会改变人的使用方式，一个设计选择也可能影响信息如何被理解、被信任，甚至被行动。</p></div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">教育背景</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">芝加哥大学</p><p class="edu-date">2026年6月</p></div>
        <p class="edu-degree">数字媒体研究 文学硕士</p>
        <p class="edu-detail">荣获优秀奖学金，金额2万美元</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">芝加哥艺术学院</p><p class="edu-date">2025年1月</p></div>
        <p class="edu-degree">绘画与素描 艺术学士（BFA）</p>
        <p class="edu-detail">荣获创意荣誉奖学金，金额5.4万美元</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">实习经历</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Fathia</p><p class="edu-date">2026年5月 — 6月</p></div>
        <p class="edu-degree">用户数据分析实习生</p>
        <p class="edu-detail">调用YouTube Data API对目标用户群体进行系统性数据采集，构建结构化用户数据集，支持潜在客户识别与分层分析。开发自动化数据处理脚本，对用户行为特征进行多维度建模，结合LLM批量生成个性化营销邮件，显著提升客户触达效率。</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">添可（Tineco）</p><p class="edu-date">2024年7月 — 8月</p></div>
        <p class="edu-degree">制片人 / 执行制片人 · 杭州，中国</p>
        <p class="edu-detail">统筹多个广告项目的全流程执行，负责预算管控与供应商资源谈判。协调创意、物流、媒介等跨部门团队高效协作，确保拍摄计划如期落地。</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">杭州图微数字智能科技</p><p class="edu-date">2023年6月 — 9月</p></div>
        <p class="edu-degree">三维可视化实习生</p>
        <p class="edu-detail">运用3ds Max与VRay完成石油设备的1:1精度三维建模，按时交付符合生产要求的数字资产。</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">项目经历</span></div></div>
    <div class="sec-body">
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">Flock摄像头数据实物化装置</p><p class="edu-date">2026年4月</p></div>
        <p class="edu-degree">芝加哥大学</p>
        <p class="edu-detail">结合Toio机器人与投影映射技术，打造可触摸感知的空间数据装置，直观呈现芝加哥Flock/ALPR摄像头的地理分布。设计双机器人协同交互机制，支持区域选择与人口统计学维度的实时筛选。</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">海洋智能可视化项目</p><p class="edu-date">2024年11月 — 2025年3月</p></div>
        <p class="edu-degree">数据与系统项目成员 · 远程</p>
        <p class="edu-detail">清洗处理逾1000万条全球海洋数据；基于Coze与DeepSeek搭建智能体，通过REST API完成数据自动化采集。使用SvelteKit开发数据可视化仪表盘与动态演示页面，并参与海洋场景的三维环境建模。</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">《Deified》与《枕头人》</p><p class="edu-date">2023 — 2024</p></div>
        <p class="edu-degree">舞台美术置景</p>
        <p class="edu-detail">担任芝加哥两部话剧的视觉风格统筹与场景构图设计。</p>
      </div>
      <div class="edu line">
        <div class="edu-row"><p class="edu-school">浙江财经大学</p><p class="edu-date">2022年6月 — 9月</p></div>
        <p class="edu-degree">数据分析项目成员</p>
        <p class="edu-detail">深入分析西湖景区游客流量数据，合著同行评审学术论文并发表于《Scientific Reports》（2023年）。</p>
      </div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">获奖情况</span></div></div>
    <div class="sec-body">
      <div class="clip"><p class="body line">铜奖 — 浙江省第十九届"挑战杯"大学生课外学术科技作品竞赛"人工智能+"专项赛：与跨学科团队联合研发作品《智拖快手——便携式数字孪生场景编辑器》。</p></div>
    </div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">专业技能</span></div></div>
    <div class="sec-body skills-grid">
      <div class="skill line"><p class="skill-cat">编程语言</p><p class="skill-val">Python、JavaScript、TypeScript、C/C++、Java、SQL</p></div>
      <div class="skill line"><p class="skill-cat">网页与数据</p><p class="skill-val">SvelteKit、Tailwind CSS、REST API、Git/GitHub、Vercel、Streamlit、Excel、仪表盘设计</p></div>
      <div class="skill line"><p class="skill-cat">创意技术</p><p class="skill-val">Unity（C#）、Unreal Engine 5、Arduino</p></div>
      <div class="skill line"><p class="skill-cat">三维与设计</p><p class="skill-val">Blender、Fusion 360、3ds Max/VRay、3D打印、Figma、Photoshop、Illustrator、Premiere</p></div>
      <div class="skill line"><p class="skill-cat">语言能力</p><p class="skill-val">中文（普通话，母语）· 英语（专业工作语言）</p></div>
    </div>
  </div>

  {/if}

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
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .top-right {
    display: flex;
    align-items: center;
    gap: 10px;
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

  .cv-wrapper {
    position: relative;
  }

  .cv-btn {
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
  .cv-wrapper:hover .cv-btn { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.35); }

  .cv-menu {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    background: #0e0e24;
    border: 0.5px solid rgba(255,255,255,0.12);
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-4px);
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .cv-wrapper:hover .cv-menu {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .cv-option {
    font-size: 0.70rem;
    letter-spacing: 0.15em;
    text-transform: lowercase;
    color: rgba(255,255,255,0.35);
    text-decoration: none;
    padding: 7px 18px;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s;
  }
  .cv-option:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.8); }

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

  .hero {
    margin-top: 120px;
    margin-bottom: 120px;
  }

  .title {
    font-family: "Fraunces", serif;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 300;
    letter-spacing: 0.03em;
    color: rgba(255,255,255,0.88);
    margin: 0 0 12px;
    line-height: 1;
  }

  .hero-sub {
    font-size: 0.78rem;
    letter-spacing: 0.25em;
    color: rgba(255,255,255,0.3);
    text-transform: uppercase;
    margin: 0;
  }

  .section {
    display: grid;
    grid-template-columns: 160px 1fr;
    gap: 0 64px;
    padding: 64px 0;
    border-top: 0.5px solid rgba(255,255,255,0.06);
    max-width: 960px;
  }

  .label-col { padding-top: 4px; }

  .sec-label {
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.2);
  }

  .sec-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .body {
    font-size: 0.88rem;
    line-height: 2;
    color: rgba(255,255,255,0.5);
    margin: 0;
  }

  .edu {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 32px;
    border-bottom: 0.5px solid rgba(255,255,255,0.05);
  }
  .edu:last-child { border-bottom: none; padding-bottom: 0; }

  .edu-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .edu-school {
    font-size: 0.9rem;
    font-weight: 500;
    color: rgba(255,255,255,0.8);
    margin: 0;
  }

  .edu-date {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.05em;
    margin: 0 0 0 16px;
    white-space: nowrap;
  }

  .edu-degree {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    margin: 0;
  }

  .edu-detail {
    font-size: 0.75rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.3);
    margin: 0;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
  }

  .skill {
    padding: 20px 24px;
    border: 0.5px solid rgba(255,255,255,0.05);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .skill-cat {
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.2);
    margin: 0;
  }

  .skill-val {
    font-size: 0.78rem;
    line-height: 1.7;
    color: rgba(255,255,255,0.5);
    margin: 0;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255,255,255,0.1);
    margin: 72px 0;
  }

  .clip { overflow: hidden; }

  .line {
    display: block;
    transform: translateY(60%);
    opacity: 0;
    transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.1s ease;
  }

  .line:global(.visible) {
    transform: translateY(0);
    opacity: 1;
  }
</style>
