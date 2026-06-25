<script lang="ts">
  import NavArrows from '$lib/components/NavArrows.svelte';

  let lang = $state<'en' | 'zh'>('en');
</script>

<svelte:head>
  <title>About — Kiko Li</title>
</svelte:head>

<div class="root">

  <div class="top-bar">
    <a href="/" class="back">&#8592; back</a>
    <button class="lang-toggle" onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
      {lang === 'en' ? '中文' : 'English'}
    </button>
  </div>

  <div class="header">
    <h1 class="title">Kiko Li</h1>
    {#if lang === 'en'}
      <p class="subtitle">Creative Technologist · Digital Media · Chicago</p>
    {:else}
      <p class="subtitle">创意技术 · 数字媒体 · 芝加哥</p>
    {/if}
  </div>

  <div class="content">
    {#if lang === 'en'}
      <p class="body">I'm Kiko Li, a creative technologist and digital media practitioner based in Chicago.</p>
      <p class="body">My background is in painting and drawing, but I've spent the last few years building data dashboards, interactive installations, SvelteKit apps, and 3D environments. The common thread is translation — turning data, memory, or systems into something a person can actually experience.</p>
      <p class="body">I hold an M.A. in Digital Media Studies from the University of Chicago and a BFA from the School of the Art Institute of Chicago. I work across Python, JavaScript, Unity, Unreal Engine, and whatever else the project needs.</p>
      <p class="body">I'm drawn to work where technical decisions have design consequences, and design decisions have real stakes.</p>
    {:else}
      <p class="body">我是 李想，一名常驻芝加哥的创意技术与数字媒体实践者。</p>
      <p class="body">我的背景始于绘画与造型艺术，但过去几年里，我逐渐转向数据仪表盘、交互装置、SvelteKit 应用和 3D 环境的构建。贯穿这些实践的，是一种"转译"的过程——把数据、记忆或系统，转化为人能够真实感知和体验的东西。</p>
      <p class="body">我拥有芝加哥大学 Digital Media Studies 硕士学位，以及芝加哥艺术学院艺术学士学位。我喜欢那些真正需要在技术和设计之间来回判断的工作。对我来说，技术从来不只是实现功能，设计也不只是让东西看起来更好。一个技术选择会改变人的使用方式，一个设计选择也可能影响信息如何被理解、被信任，甚至被行动。</p>
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

  .header {
    margin-top: 56px;
    margin-bottom: 48px;
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

  .content {
    max-width: 620px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .body {
    font-size: 0.9rem;
    line-height: 2;
    color: rgba(255,255,255,0.55);
    margin: 0;
  }

  .divider {
    width: 64px;
    height: 0.5px;
    background: rgba(255,255,255,0.1);
    margin: 72px 0;
  }
</style>
