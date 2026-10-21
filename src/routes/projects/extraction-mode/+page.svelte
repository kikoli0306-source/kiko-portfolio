<script lang="ts">
  import ProjectLanguageToggle from "$lib/components/ProjectLanguageToggle.svelte";
  let lang = $state<'en' | 'zh'>('zh');
  let lightbox: string | null = $state(null);

  type Screen = { src: string; title: string; note: string };
  type Section = { zh: string; en: string; screens: Screen[]; extra: string[] };
  const sections: Section[] = [
 {
  "zh": "S1 地图选择",
  "en": "S1 Map selection",
  "screens": [
   {
    "src": "/extraction-mode/s01.jpg",
    "title": "S1 地图选择 · A 已解锁",
    "note": "S1-A 已解锁地图\n\n五个异常区域按解锁顺序排成一摞调查档案；右侧显示选中区域的难度、探索度、行动时限、撤离点、威胁和可能的收益。\n\n点卡片切换区域，切换普通 / 高危，点「下一步」进入战前准备。选中的卡片置顶，加红框和「当前选中」标签；按钮上方复述「区域｜难度」，防止误选。\n\n我把地图做成可以翻看的档案卡，而不是一排关卡按钮。探索度和手写批注（「三楼走廊有异响」）在提示玩家：这片区域还没查完。"
   },
   {
    "src": "/extraction-mode/s02.jpg",
    "title": "S1 地图选择 · B 未解锁",
    "note": "S1-B 未解锁地图\n\n未解锁的卡片也可以选中查看。右侧列出两项解锁条件和各自进度，每项都有「前往」入口；主按钮置灰并写明原因，不会出现点了没反应。\n\n选中规则三张一致：选中的卡片放大、置顶，加红框和「当前选中」标签；其余卡片恢复常规大小。所以这里旧城公寓群缩回常规尺寸，废弃地铁环线放大。"
   },
   {
    "src": "/extraction-mode/s03.jpg",
    "title": "S1 地图选择 · C 高危未解锁",
    "note": "S1-C 高危未解锁\n\n点锁住的「高危」标签，弹出条件卡片（移动端不依赖悬停），点「知道了」或卡片外关闭。难度仍停在「普通」，不会被误切换。"
   }
  ],
  "extra": [
   "25:00、撤离点数量、Lv.4、70%、80% 都是示意数值。原题的「局外养成等级」我理解为设施等级。底部「异常区域监测系统」只是世界观装饰。"
  ]
 },
 {
  "zh": "S2 战前准备",
  "en": "S2 Pre-raid prep",
  "screens": [
   {
    "src": "/extraction-mode/s04.jpg",
    "title": "S2-A｜战前准备 · 可出战状态",
    "note": "S2-A 可出战\n\n上方是三名调查员：立绘、职责、疲劳和专属武器。下方是可编入的角色。右侧是 3 个全队共享的消耗品槽、背包带入和出战检查。背包带入旁有「全部放回」，一键把带入物品退回仓库，不用逐件拖回。右上角显示货币余额和恢复剂数量。\n\n先点上方位置、再点下方候选角色完成替换；点武器槽换武器；点消耗品槽配置补给；「开始调查」进入传送。\n\n疲劳用格子加数字：1/2 橙色，2/2 红色且不能出战。试用角色用文字标签标出，不只靠颜色区分。"
   },
   {
    "src": "/extraction-mode/s05.jpg",
    "title": "S2-B｜角色疲劳已满 · 恢复确认",
    "note": "S2-B 疲劳已满\n\n另一种状态：绯野疲劳到 2/2，「开始调查」禁用，出战检查写明原因。\n\n点角色卡上的「使用恢复剂」（虚线框 ①）打开确认弹窗：主操作是恢复，备选是更换角色。确认后，疲劳、恢复剂数量、出战检查和开始按钮同时更新。\n\n恢复剂为 0 时，弹窗主按钮变成「前往购买」，跳到商店的恢复剂页；右上角恢复剂旁的「+」也直达这一页。买完返回弹窗，不用重新操作。"
   }
  ],
  "extra": [
   "规则：消耗品槽全队共享、不占背包格；撤离失败只保留武器，其余带入物品清空；1 个恢复剂降 1 点疲劳。角色、武器、道具名称都是占位。"
  ]
 },
 {
  "zh": "S3 传送加载",
  "en": "S3 Loading",
  "screens": [
   {
    "src": "/extraction-mode/s06.jpg",
    "title": "S3｜传送加载 · 异常区域接入",
    "note": "S3 传送加载\n\n加载时展示本局地图、全部撤离点和条件撤离的开启位置、小队、时限与探索目标进度。系统随机定好出生位置后，才在地图上标出「本次出生位置」。\n\n加载期间不计时：角色进入地图、拿到控制权后，才开始计算时限和迷雾浓度，避免设备加载速度影响公平。\n\n这段等待时间正好用来看撤离布局，进图后不用马上打开地图。"
   }
  ],
  "extra": [
   "加载时揭示出生点，参考了《三角洲行动》加载界面显示降落点的做法。\n\n紫红纹样只是区域的异常氛围，不代表迷雾范围——迷雾是全图浓度随时间上升，不是缩圈。\n\n「探索目标 2/4」是这张地图的长期进度，不是本局任务。供电闸门、撤离点名称和地图布局都是示例。"
  ]
 },
 {
  "zh": "S4 局内 HUD",
  "en": "S4 In-raid HUD",
  "screens": [
   {
    "src": "/extraction-mode/s07.jpg",
    "title": "S4-A｜局内 HUD · 预警期探索",
    "note": "S4-A 预警期探索\n\n这是一款单人操作三名角色的动作 RPG：同一时间一人在场，近战、远程、支援可以随时切换。所以 HUD 不用射击准星，而是自动锁定最近的敌人，用金色角标标出。\n\n常驻的只有战斗必需的东西：摇杆、攻击、闪避、战技、武器技、已配置的消耗品（空槽不显示）、角色切换和血量。背包、地图、设置收在右上角；设置里可以调音量、画面和操作布局，也可以中途退出探索。\n\n时间只有一条轴、一个倒计时：平稳、预警、侵蚀三段，侵蚀阈值是轴上的节点。\n\n靠近物资箱出现「可搜寻」，读条时不能行动，受击会中断并清零。"
   },
   {
    "src": "/extraction-mode/s08.jpg",
    "title": "S4-B｜局内 HUD · 侵蚀期撤离中",
    "note": "S4-B 侵蚀期撤离中\n\n另一种状态：剩 04:12，玩家正在南门撤离，白川已阵亡。\n\n倒计时进入侵蚀段后放大变红。白川头像灰化，下方显示复活点距离。\n\n撤离环显示「剩余 06 秒 · 共 15 秒」。撤离期间可以移动、战斗、切换角色，但离开范围会重新计时。我没有画完整的圆圈，只在角色接近边界时，在地面显示一小段金色弧线和「距撤离边界 3m」——用绿色大圈容易被误认成安全区，而撤离点并不免疫迷雾伤害。\n\n两种伤害分开表现：敌人攻击是短暂的方向性红闪；迷雾侵蚀是屏幕边缘持续的紫红纹样，血条旁标「迷雾侵蚀持续伤害」。"
   }
  ],
  "extra": [
   "设计取舍\n\n为什么用复活点，而不是倒地救援：一个人操作三名角色，没有队友能来扶。我把复活放在地图的固定位置——读条复活一名阵亡角色、恢复一半血量，受击中断，每局一次。玩家要花时间绕路，换回一名角色，这和「继续还是撤离」是同一种取舍。三人全部阵亡仍直接失败。\n\n为什么只有一个倒计时：手机屏幕小，同时读两个倒计时容易看错。\n\n迷雾是全图浓度上升，不是缩圈，所以只用屏幕边缘表现：平稳期干净，预警期边缘泛紫，侵蚀期纹样侵入画面边缘，中间的战斗区始终清晰。\n\n12:40、15 秒、血量和估值都是示例。"
  ]
 },
 {
  "zh": "S5 局内地图",
  "en": "S5 In-raid map",
  "screens": [
   {
    "src": "/extraction-mode/s09.jpg",
    "title": "S5-A｜局内地图 · 查看条件撤离点",
    "note": "S5-A 查看条件撤离点\n\n地图上只放撤离点、探索目标、复活点和玩家位置。完成的目标打勾，未完成的是金色菱形。\n\n我没有画导航路线和条件连线。怎么走留给玩家判断：熟悉地图的老玩家走得更快，新老玩家的差距也由此体现。\n\n点撤离点后，右侧只显示开启条件、撤离倒计时和「设为撤离目标」。\n\n地图打开时游戏不暂停，角色原地停下；受击时顶部弹出提示，点一下就回到战斗。"
   },
   {
    "src": "/extraction-mode/s10.jpg",
    "title": "S5-B｜局内地图 · 撤离风险提示",
    "note": "S5-B 撤离风险提示\n\n侵蚀期只剩 42 秒，玩家仍把屋顶设为目标。系统估算需要 55–70 秒，提示「可能来不及撤离」，并给出最近的南门（约 25 秒）。\n\n只提示，不替玩家改目标：「继续前往屋顶」和「改走南门」并列。\n\n这条提示主要照顾休闲玩家：他们对地图不熟，容易在最后几十秒选错撤离点。老玩家可以直接忽略。"
   }
  ],
  "extra": []
 },
 {
  "zh": "S6 背包 / 搜刮",
  "en": "S6 Backpack & looting",
  "screens": [
   {
    "src": "/extraction-mode/s11.jpg",
    "title": "S6-A｜背包 · 正常搜刮",
    "note": "S6-A 正常搜刮\n\n物资箱和背包（5 列 × 6 行，三人共享）并排，物品按真实占格绘制，边框颜色表示品质，「带入」角标标出战前带入的物品。\n\n拖拽放入背包，拖拽中点 ↻ 旋转，背包里用绿色虚线预览落位。「一键拾取」按价值从高到低放入，放不下的留在箱子里；「一键整理」可以撤销。\n\n格子核对：已占 21 格（相机 4、唱片机 6、工具箱 4、1×1 物品 7），剩 9 格，无重叠。"
   },
   {
    "src": "/extraction-mode/s12.jpg",
    "title": "S6-B｜背包 · 空间不足推荐丢弃",
    "note": "S6-B 空间不足\n\n和 S6-A 是同一局、同一个箱子：A 之后玩家捡了八音盒和旧硬币，又整理过一次背包，现在 26/30。\n\n要捡的异常标本罐占 2×3（可以转成 3×2），剩下 4 格不够。系统先试堆叠、旋转和重排，还是放不下，才列出「丢弃以下物品即可放入」：碎布、金属零件、显影液，共 164。丢掉后正好空出 3×2，净得 9,636。我穷举验证过，这是价值最低的唯一可行组合。\n\n推荐只从本局捡到的东西里挑；取消任何一项会实时重算，放不下时按钮置灰。系统不会自己丢东西。\n\n这个功能面向休闲玩家，他们不想在战斗间隙逐件比较价值；硬核玩家可以点「手动调整」自己整理。"
   },
   {
    "src": "/extraction-mode/s13.jpg",
    "title": "S6-C｜搜寻受击中断",
    "note": "S6-C 搜寻被打断\n\n受击后读条立刻停止、进度清零，战斗操作马上恢复。提示缩成一小块，不挡战斗区；仍在箱子旁边时显示「重新搜寻」，需要完整计时。"
   }
  ],
  "extra": [
   "品质颜色参考了《三角洲行动》按价值分级的做法，最高级「异常」用朱红加虚线边框，和世界观呼应。\n\n推荐丢弃来自我玩三角洲时的体会：背包满了，逐件丢东西很麻烦。价值显示是因为《逃离鸭科夫》原版不显示物品价值，玩家要靠模组补。\n\n物品名称和数值都是示例。"
  ]
 },
 {
  "zh": "S7 结算",
  "en": "S7 Results",
  "screens": [
   {
    "src": "/extraction-mode/s14.jpg",
    "title": "S7-A｜探索结算 · 撤离成功",
    "note": "S7-A 撤离成功\n\n左边是带出物资：总估值、价值最高的三件和「全部 19 件」入口。下面可以按品级勾选，一键卖出低价值物品，默认勾普通和精良——省掉回仓库再整理的步骤。\n\n中间是探索进度：进度条直接标出下一区域（70%）和高危（80%）两个门槛，下面列出下一区域还差哪项条件，未达标的可以直接「前往」。\n\n右边是小队疲劳，三人各 +1；到 2/2 的角色只提示「需恢复后出战」，恢复放在战前准备里做。\n\n白川本局阵亡过，照常结算。"
   },
   {
    "src": "/extraction-mode/s15.jpg",
    "title": "S7-B｜探索结算 · 撤离失败（超时）",
    "note": "S7-B 撤离失败（超时）\n\n和 S7-A 是两个独立的结算分支，这里模拟屋顶撤离超时。\n\n我没有列出丢掉的物品和价值，只写一句「本局物资未带出」，然后把保留下来的东西放在前面：三把武器，以及本局 +7% 的探索度。失败页的任务是让玩家尽快开下一局，而不是反复提醒损失。\n\n失败只保留武器（原题的「基础装备」），其余带入物品和本局所获一起清空。"
   }
  ],
  "extra": [
   "解锁门槛标在进度条上，参考了《三角洲行动》结算后的赛季通行证进度页：进度条下方直接列出后续奖励，输了也能看到离下一档还差多少。\n\n数值核对：本局 19 件，总估值 24,180；一键卖出 11 件，1,320；探索度 65% → 72%，和 S1、S3 一致；疲劳 0/1/0 → 1/2/1，和 S2-A 一致。都是示例数值。"
  ]
 },
 {
  "zh": "多端适配",
  "en": "Cross-platform",
  "screens": [
   {
    "src": "/extraction-mode/s16.jpg",
    "title": "Q5-A｜多端适配策略",
    "note": "七张界面都以 iPhone 16 横屏 852×393 pt（2556×1179 @3x）为基准。\n\nPC 以 1920×1080 为基准；2K 屏 UI 放大 1.33 倍，4K 放大 2 倍，另提供 80%–120% 的缩放。元素锚定在四角或中轴，屏幕比例变化时只调整中间留白。21:9 / 32:9 超宽屏把关键 HUD 收在中央 16:9 区域。\n\n移动端和 PC 端的信息位置保持一致，只替换操作方式，玩家换设备不用重新找。"
   },
   {
    "src": "/extraction-mode/s17.jpg",
    "title": "Q5-B｜三端输入映射",
    "note": "三种输入的差异\n\n按键提示跟着最近一次使用的设备切换：键鼠显示键帽，手柄显示按键图标，触屏不显示按键。\n\n拖拽、旋转、快速转移、丢弃在三端都有对应操作，规则一致，只是输入方式不同。\n\n丢弃这类不可逆操作：触屏和键鼠用二次确认，手柄改为长按 A 0.6 秒。\n\n受击时：触屏高亮关闭按钮，键鼠提示 Tab / Esc，手柄震动并高亮 B。\n\n键位：角色切换 1/2/3、交互 F，沿用同类动作 RPG 的习惯；消耗品用 Z/X/C，避开角色数字键。"
   },
   {
    "src": "/extraction-mode/s18.jpg",
    "title": "Q5-C｜PC 局内 HUD · 键鼠",
    "note": "Q5-C PC 局内 HUD（键鼠）\n\n去掉摇杆和触屏按钮，右下改为技能栏：Shift 闪避、E 战技、Q 武器技、左键攻击。常驻按键提示只留在技能栏上；WASD、角色切换 1/2/3 等提示默认隐藏，首次进局时显示一次，也可以在设置里打开。\n\n锁定标记、信息位置都和移动端一致；字号按 1080p 放大（正文 16 px 以上）。"
   },
   {
    "src": "/extraction-mode/s19.jpg",
    "title": "Q5-D｜PC 背包 · 键鼠拖拽与旋转",
    "note": "Q5-D PC 背包（键鼠）\n\n玩家正从物资箱拖拽八音盒到背包：背包里显示绿色落位预览，光标旁提示「可放入」「R 旋转」「右键取消」。\n\n右键直接在箱子和背包之间快速转移；详情常驻右侧，悬停物品显示简要浮窗；F 一键拾取，T 一键整理。\n\n旋转固定为拖拽中按 R，是因为我玩三角洲 PC 端时觉得拖拽和旋转不够顺手。"
   },
   {
    "src": "/extraction-mode/s20.jpg",
    "title": "Q5-E｜手柄 · 背包焦点导航",
    "note": "Q5-E 手柄背包\n\n焦点即选中：当前面板金色描边，焦点所在物品的详情直接显示在右侧。\n\nLB / RB 切换箱子、背包、详情三个面板，面板内用摇杆或十字键逐格移动。A 拿起，逐格移动，A 放下；拿起后 Y 旋转，B 放回原处。X 快速转移，RT 一键拾取，LT 一键整理。\n\n丢弃要长按 A 0.6 秒。底部提示栏只列当前能用的操作。"
   }
  ],
  "extra": []
 }
];

  const flows = [
    { src: '/extraction-mode/flow-overview.png', zh: '总览', en: 'Overview', wide: true, tall: false },
    { src: '/extraction-mode/flow-prep.png', zh: '分图 1：战前阶段', en: 'Part 1: before the raid', wide: false, tall: true },
    { src: '/extraction-mode/flow-raid.png', zh: '分图 2：局内阶段', en: 'Part 2: in the raid', wide: false, tall: false },
    { src: '/extraction-mode/flow-settle.png', zh: '分图 3：结算与局外', en: 'Part 3: results and base', wide: false, tall: true },
  ];

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') lightbox = null;
  }
</script>

<svelte:head>
  <title>Extraction Mode — Kiko Li</title>
</svelte:head>

<svelte:window onkeydown={handleKeydown} />

<div class="root">
  <div class="content" lang={lang === 'en' ? 'en' : 'zh-CN'}>
    <div class="top-bar">
      <a href="/projects" class="back">&#8592; {lang === 'en' ? 'projects' : '项目'}</a>
      <ProjectLanguageToggle bind:lang />
    </div>

    <div class="header">
      {#if lang === 'en'}
        <h1 class="title">Extraction Mode</h1>
        <p class="subtitle">Interaction design for a loot-and-extract mode · Personal project</p>
      {:else}
        <h1 class="title">搜打撤玩法交互设计</h1>
        <p class="subtitle">个人项目</p>
      {/if}
    </div>

    {#if lang === 'en'}
      <p class="desc">
        A loot-and-extract mode inside an action RPG where one player controls a squad of three characters.
        I listed the rule questions that had to be settled first, drew the full flow, designed seven core
        screens, and adapted them for PC keyboard &amp; mouse and gamepad.
      </p>
      <p class="desc note-lang">Screen annotations below are in Chinese.</p>
    {:else}
      <p class="desc">
        在一款单人操作三名角色的动作 RPG 里加入搜打撤玩法。我从规则里找出需要确认的问题，画出完整流程，做了 7 类核心界面，并补上 PC 键鼠和手柄的适配。
      </p>
    {/if}

    <div class="tags">
      {#each (lang === 'en' ? ['Rule Design', 'Game UI', 'Interaction Flow', 'Cross-platform'] : ['规则拆解', '复杂状态设计', '交互流程', '多端适配']) as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>

    <section class="section">
      <h2 class="section-label">{lang === 'en' ? 'Interaction flow' : '交互流程'}</h2>
      {#each flows as f}
        <div class="flow">
          <p class="flow-title">{lang === 'en' ? f.en : f.zh}</p>
          <button class="flow-btn" class:wide={f.wide} class:tall={f.tall} onclick={() => lightbox = f.src} aria-label={lang === 'en' ? f.en : f.zh}>
            <img src={f.src} alt={lang === 'en' ? f.en : f.zh} />
          </button>
        </div>
      {/each}
    </section>

    {#each sections as sec}
      <section class="section">
        <h2 class="section-label">{lang === 'en' ? sec.en : sec.zh}</h2>
        {#each sec.screens as s}
          <figure class="screen">
            <button class="thumb" onclick={() => lightbox = s.src} aria-label={s.title}>
              <img src={s.src} alt={s.title} loading="lazy" />
            </button>
            <figcaption>
              <p class="screen-title">{s.title}</p>
              <p class="screen-note" lang="zh-CN">{s.note}</p>
            </figcaption>
          </figure>
        {/each}
        {#each sec.extra as x}
          <p class="extra" lang="zh-CN">{x}</p>
        {/each}
      </section>
    {/each}

    <div class="divider"></div>
    <a href="/projects" class="back">&#8592; {lang === 'en' ? 'back to projects' : '返回项目列表'}</a>
  </div>
</div>

{#if lightbox}
  <div class="overlay" role="button" tabindex="0" aria-label={lang === 'en' ? 'Close image' : '关闭图片'}
    onclick={() => lightbox = null} onkeydown={(e) => e.key === 'Enter' && (lightbox = null)}>
    <img class="lightbox-img" src={lightbox} alt="" />
  </div>
{/if}

<style>
  .root { width: 100vw; min-height: 100dvh; background: #08081a; display: flex; justify-content: center; padding: 80px 40px 120px; box-sizing: border-box; }
  .content { width: 100%; max-width: 980px; display: flex; flex-direction: column; }
  .top-bar { display: flex; justify-content: space-between; align-items: center; }
  .back { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: lowercase; color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.2s; align-self: flex-start; }
  .back:hover { color: rgba(255,255,255,0.75); }
  .header { margin-top: 56px; }
  .title { font-family: "Fraunces", serif; font-size: clamp(2.2rem, 6vw, 4.2rem); font-weight: 600; letter-spacing: 0.04em; color: rgba(255,255,255,0.88); margin: 0; line-height: 1.15; }
  .subtitle { margin: 10px 0 0; font-size: 0.85rem; letter-spacing: 0.05em; color: rgba(255,255,255,0.35); text-transform: uppercase; }
  .desc { margin: 40px 0 0; font-size: 0.9rem; line-height: 2; color: rgba(255,255,255,0.55); max-width: 700px; }
  .note-lang { margin-top: 8px; font-size: 0.75rem; color: rgba(255,255,255,0.3); }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 24px; }
  .tag { background: rgba(255,255,255,0.07); border-radius: 20px; padding: 3px 12px; font-size: 0.68rem; letter-spacing: 0.04em; color: rgba(255,255,255,0.45); }
  .section { margin-top: 72px; display: flex; flex-direction: column; gap: 28px; }
  .section-label { margin: 0; font-size: 0.78rem; font-weight: 500; letter-spacing: 0.18em; color: rgba(255,255,255,0.4); text-transform: uppercase; }
  .flow-title { margin: 0 0 10px; font-size: 0.8rem; color: rgba(255,255,255,0.5); }
  .flow-btn { background: none; border: 0.5px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 12px; cursor: zoom-in; display: block; width: 100%; }
  .flow-btn img { display: block; max-width: 100%; margin: 0 auto; }
  .flow-btn.tall img { max-width: 560px; width: 100%; }
  .flow-btn.wide { max-height: none; overflow-x: auto; }
  .screen { margin: 0; display: flex; flex-direction: column; gap: 14px; }
  .thumb { background: none; border: 0.5px solid rgba(255,255,255,0.08); border-radius: 6px; overflow: hidden; padding: 0; cursor: zoom-in; transition: border-color 0.2s; }
  .thumb:hover { border-color: rgba(255,255,255,0.25); }
  .thumb img { width: 100%; display: block; }
  .screen-title { margin: 0; font-size: 0.82rem; color: rgba(255,255,255,0.75); }
  .screen-note { margin: 0; font-size: 0.82rem; line-height: 1.9; color: rgba(255,255,255,0.5); white-space: pre-line; max-width: 760px; }
  .extra { margin: 0; font-size: 0.8rem; line-height: 1.9; color: rgba(255,200,140,0.6); white-space: pre-line; border-left: 1px solid rgba(255,200,140,0.3); padding-left: 14px; max-width: 760px; }
  .divider { width: 64px; height: 0.5px; background: rgba(255,255,255,0.1); margin: 72px 0; }
  .overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.92); display: flex; align-items: center; justify-content: center; z-index: 100; cursor: zoom-out; padding: 32px; box-sizing: border-box; overflow: auto; }
  .lightbox-img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; }
  @media (max-width: 640px) { .root { padding: 56px 16px 96px; } }
</style>
