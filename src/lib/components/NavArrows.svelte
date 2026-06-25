<script lang="ts">
  import { page } from '$app/stores';

  const allPages = [
    { label: 'home',         href: '/' },
    { label: 'projects',     href: '/projects' },
    { label: 'about',        href: '/about' },
    { label: 'cv',           href: '/cv' },
    { label: 'visual work',  href: '/work' },
  ];
</script>

<!-- 左箭头 -->
<div class="nav-group nav-left">
  <ul class="menu">
    {#each allPages as item}
      <li>
        {#if $page.url.pathname === item.href}
          <span class="nav-item is-current">{item.label}</span>
        {:else}
          <a class="nav-item" href={item.href}>{item.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
  <span class="arrow">&#8592;</span>
</div>

<!-- 右箭头 -->
<div class="nav-group nav-right">
  <ul class="menu menu-right">
    {#each allPages as item}
      <li>
        {#if $page.url.pathname === item.href}
          <span class="nav-item is-current">{item.label}</span>
        {:else}
          <a class="nav-item" href={item.href}>{item.label}</a>
        {/if}
      </li>
    {/each}
  </ul>
  <span class="arrow">&#8594;</span>
</div>

<style>
  .nav-group {
    position: fixed;
    bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    z-index: 20;
  }

  .nav-left {
    left: 2.5rem;
    align-items: flex-start;
  }

  .nav-right {
    right: 2.5rem;
    align-items: flex-end;
  }

  .menu {
    list-style: none;
    margin: 0 0 10px 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(8px);
    transition: opacity 150ms ease, transform 150ms ease;
  }

  .nav-group:hover .menu {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .menu-right {
    align-items: flex-end;
  }

  .nav-item {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    color: rgba(255, 255, 255, 0.65);
    text-decoration: none;
    transition: color 200ms;
    white-space: nowrap;
  }

  a.nav-item:hover {
    color: rgba(255, 255, 255, 1);
  }

  .is-current {
    opacity: 0.4;
    cursor: default;
  }

  .arrow {
    font-size: 1.125rem;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.8);
    transition: color 300ms;
    cursor: default;
    line-height: 1;
    user-select: none;
  }

  .nav-group:hover .arrow {
    color: rgba(255, 255, 255, 1);
  }
</style>
