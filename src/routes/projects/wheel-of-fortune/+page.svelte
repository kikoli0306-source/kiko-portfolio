<script lang="ts">
  import ProjectLanguageToggle from "$lib/components/ProjectLanguageToggle.svelte";
  let lang = $state<'en' | 'zh'>('en');
</script>

<svelte:head>
  <title>Wheel of Fortune — Kiko Li</title>
</svelte:head>


<div class="root">
  <div class="content" lang={lang === 'en' ? 'en' : 'zh-CN'}>
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; {lang === 'en' ? 'projects' : '项目'}</a>
      <ProjectLanguageToggle bind:lang />
    </div>

    <div class="header">
      <h1 class="title">{lang === 'en' ? "Wheel of Fortune" : "命运之轮"}</h1>
      <p class="subtitle">{lang === 'en' ? "Physical Computing · Interaction Design" : "物理计算 · 交互设计"}</p>
    </div>

    <p class="desc">
      {#if lang === 'en'}
      Wheel of Fortune is an actuated tarot interaction device that turns card selection into an
      embodied ritual. Inspired by the circular rhythm of a carousel and the symbolic idea of a
      wheel of fate, the project places seven tarot cards upright on a rotating platform instead
      of laying them flat on a table.
    {:else}
      命运之轮是一款带有驱动机构的塔罗牌交互装置，将选牌过程转化为具身的仪式。项目的灵感来自旋转木马的循环节奏与命运之轮的象征意象：七张塔罗牌竖立在旋转平台上，而非平铺于桌面。
      {/if}
    </p>

    <p class="desc">
      {#if lang === 'en'}
      Users control the movement through non-contact hand gestures: one side sensor rotates the
      wheel clockwise, the other rotates it counterclockwise, and bringing both hands close stops
      the platform with a short vibration feedback. Built with Arduino, ultrasonic sensors, a
      stepper motor, and a handmade card structure, the device transforms a simple act of choosing
      into a slower experience of watching, waiting, sensing, and deciding. Rather than treating
      interaction as a quick click or button press, Wheel of Fortune explores how motion, timing,
      gesture, and tactile feedback can make an everyday object feel magical, responsive, and
      emotionally charged.
    {:else}
      使用者通过非接触式手势控制运动：一侧传感器让转盘顺时针旋转，另一侧让它逆时针旋转；双手同时靠近时，平台停止，并给予短暂的振动反馈。装置由 Arduino、超声波传感器、步进电机和手工制作的卡牌结构构成，将简单的选择行为转化为一段观看、等待、感知与决定的缓慢体验。命运之轮探索运动、时机、手势与触觉反馈如何让日常物件带有魔法般的感受、响应性与情感张力，而不将交互仅仅视为快速点击或按键。
      {/if}
    </p>

    <div class="tags">
      {#each (lang === 'en' ? ['Arduino', 'Ultrasonic Sensors', 'Stepper Motor', 'Physical Computing', 'Interaction Design'] : ['Arduino', '超声波传感器', '步进电机', '物理计算', '交互设计']) as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <p class="section-label">{lang === 'en' ? "Demo" : "演示"}</p>

    <div class="video-wrap">
      <iframe
        src="https://www.youtube.com/embed/e4kgiUxp-FM"
        title={lang === 'en' ? "Wheel of Fortune demo" : "命运之轮演示"}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="video"
      ></iframe>
    </div>

    <div class="actions">
      <a class="action-btn" href="/wheel-of-fortune/writeup.pdf" target="_blank">{lang === 'en' ? "Read Write-up ↗" : "阅读项目说明 ↗"}</a>
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
  .subtitle { margin: 10px 0 0; font-size: 0.85rem; letter-spacing: 0.12em; color: rgba(255,255,255,0.35); text-transform: uppercase; }
  .desc { margin: 32px 0 0; font-size: 0.85rem; line-height: 2; color: rgba(255,255,255,0.5); max-width: 620px; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
  .tag { background: rgba(255,255,255,0.07); border-radius: 20px; padding: 3px 12px; font-size: 0.68rem; letter-spacing: 0.04em; color: rgba(255,255,255,0.45); }
  .section-label { margin: 56px 0 12px; font-size: 0.68rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.25); }
  .video-wrap { width: 100%; aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; border: 0.5px solid rgba(255,255,255,0.08); }
  .video { width: 100%; height: 100%; border: none; display: block; }
  .actions { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
  .action-btn { display: inline-flex; align-items: center; padding: 10px 24px; border: 0.5px solid rgba(255,255,255,0.2); border-radius: 6px; background: rgba(255,255,255,0.04); color: rgba(255,255,255,0.75); font-size: 0.8rem; letter-spacing: 0.08em; text-decoration: none; transition: background 0.2s, border-color 0.2s, color 0.2s; }
  .action-btn:hover { background: rgba(255,255,255,0.09); border-color: rgba(255,255,255,0.4); color: rgba(255,255,255,0.95); }
  .divider { width: 64px; height: 0.5px; background: rgba(255,255,255,0.1); margin: 72px 0; }
</style>
