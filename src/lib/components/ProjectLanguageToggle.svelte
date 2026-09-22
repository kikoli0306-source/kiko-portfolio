<script lang="ts">
  let { lang = $bindable<'en' | 'zh'>('en') } = $props();
</script>

<button class="lang-toggle" type="button"
  aria-label={lang === 'en' ? '切换到中文' : 'Switch to English'}
  onclick={() => lang = lang === 'en' ? 'zh' : 'en'}>
  {lang === 'en' ? '中文' : 'English'}
</button>

<style>
  .lang-toggle { font-size: 0.72rem; letter-spacing: 0.2em; text-transform: lowercase; color: rgba(255,255,255,0.3); background: none; border: 0.5px solid rgba(255,255,255,0.15); border-radius: 4px; padding: 4px 12px; cursor: pointer; transition: color 0.2s, border-color 0.2s; }
  .lang-toggle:hover { color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.35); }
  .lang-toggle:focus-visible { outline: 2px solid rgba(255,255,255,0.75); outline-offset: 4px; }
</style>
