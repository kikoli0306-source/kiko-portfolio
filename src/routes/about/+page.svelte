<script lang="ts">
  import { resume } from '$lib/resume';
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

<div class="root" lang={lang === 'en' ? 'en' : 'zh-CN'}>

  <div class="top-bar">
    <a href="/" class="back">&#8592; back</a>
    <div class="top-right">
      <a
        href={lang === 'en' ? '/Xiang_Li_CV_EN.pdf' : '/Xiang_Li_CV_CN.pdf'}
        download={lang === 'en' ? 'Xiang_Li_CV_EN.pdf' : '李想-CV-CN.pdf'}
        class="lang-toggle"
        style="text-decoration: none;"
      >{lang === 'en' ? 'Résumé ↓' : '简历 ↓'}</a>
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
    <div class="sec-body about-body">
      <img src="/kiko-portrait.jpg" alt="Kiko Li" class="portrait line" />
      <div class="about-text">
        <div class="clip"><p class="body line">I'm Kiko Li, a creative technologist and digital media practitioner based in Chicago.</p></div>
        <div class="clip"><p class="body line">My background is in painting and drawing, but I've spent the last few years building data dashboards, interactive installations, SvelteKit apps, and 3D environments. The common thread is translation — turning data, memory, or systems into something a person can actually experience.</p></div>
        <div class="clip"><p class="body line">I hold an M.A. in Digital Media Studies from the University of Chicago and a BFA from the School of the Art Institute of Chicago. I work across Python, JavaScript, Unity, Unreal Engine, and whatever else the project needs.</p></div>
        <div class="clip"><p class="body line">I'm drawn to work where technical decisions have design consequences, and design decisions have real stakes.</p></div>
      </div>
    </div>
  </div>

  {:else}

  <div class="hero reveal">
    <div class="clip"><h1 class="title line">李想</h1></div>
    <div class="clip"><p class="hero-sub line">创意技术 · 数字媒体 · 芝加哥</p></div>
  </div>

  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">关于</span></div></div>
    <div class="sec-body about-body">
      <img src="/kiko-portrait.jpg" alt="李想" class="portrait line" />
      <div class="about-text">
        <div class="clip"><p class="body line">我是 李想，一名常驻芝加哥的创意技术与数字媒体实践者。</p></div>
        <div class="clip"><p class="body line">我的背景始于绘画与造型艺术，但过去几年里，我逐渐转向数据仪表盘、交互装置、SvelteKit 应用和 3D 环境的构建。贯穿这些实践的，是一种"转译"的过程——把数据、记忆或系统，转化为人能够真实感知和体验的东西。</p></div>
        <div class="clip"><p class="body line">我拥有芝加哥大学 Digital Media Studies 硕士学位，以及芝加哥艺术学院艺术学士学位。我喜欢那些真正需要在技术和设计之间来回判断的工作。对我来说，技术从来不只是实现功能，设计也不只是让东西看起来更好。一个技术选择会改变人的使用方式，一个设计选择也可能影响信息如何被理解、被信任，甚至被行动。</p></div>
      </div>
    </div>
  </div>

  {/if}


  {#each resume[lang].sections as section}
    <div class="section reveal">
      <div class="label-col"><div class="clip"><span class="sec-label line">{section.title}</span></div></div>
      <div class="sec-body">
        {#each section.entries as item}
          <div class="edu line">
            <div class="edu-row"><p class="edu-school">{item.title}</p><p class="edu-date">{item.date}</p></div>
            {#if item.role || item.where}<p class="edu-degree">{[item.role, item.where].filter(Boolean).join(' · ')}</p>{/if}
            {#each item.details as detail}<p class="edu-detail">{detail}</p>{/each}
            {#if item.link}<a href={item.link} class="proj-link">{lang === 'en' ? 'View Project →' : '查看项目 →'}</a>{/if}
          </div>
        {/each}
      </div>
    </div>
  {/each}
  <div class="section reveal">
    <div class="label-col"><div class="clip"><span class="sec-label line">{lang === 'en' ? 'Skills' : '技能'}</span></div></div>
    <div class="sec-body skills-grid">
      {#each resume[lang].skills as skill}
        <div class="skill line"><p class="skill-cat">{skill.category}</p><p class="skill-val">{skill.value}</p></div>
      {/each}
    </div>
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

  .proj-link {
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.35);
    text-decoration: none;
    transition: color 0.2s;
    margin-top: 4px;
    align-self: flex-start;
  }
  .proj-link:hover { color: rgba(255,255,255,0.75); }

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
    margin-bottom: 0;
  }

  .about-body {
    flex-direction: row !important;
    gap: 40px !important;
    align-items: flex-start !important;
  }

  .about-text {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .portrait {
    width: 140px;
    height: 140px;
    object-fit: cover;
    object-position: center 8%;
    display: block;
    border-radius: 50%;
    border: 0.5px solid rgba(255,255,255,0.1);
    filter: grayscale(10%);
    flex-shrink: 0;
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
    gap: 0 80px;
    padding: 80px 0;
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

  @media (max-width: 640px) {
    .root { padding: 56px 24px 80px; }
    .section { grid-template-columns: 1fr; gap: 24px; padding: 48px 0; }
    .edu-row { flex-direction: column; gap: 8px; }
    .edu-date { margin-left: 0; }
    .skills-grid { grid-template-columns: 1fr; }
    .about-body { flex-direction: column !important; }
  }

  .clip { overflow: hidden; }

  .line {
    display: block;
    transform: translateY(60%);
    opacity: 0;
    transition: transform 2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.6s ease;
  }

  .line:global(.visible) {
    transform: translateY(0);
    opacity: 1;
  }
</style>
