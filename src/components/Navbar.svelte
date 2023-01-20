<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Moon from './icons/Moon.svelte';
  import Sun from './icons/Sun.svelte';
  const navs = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Services', href: '/services' },
    { title: 'Contact Us', href: '/contact' },
  ];

  let currentTheme = '';
  onMount(() => {
    // currentTheme = document.documentElement.dataset.theme;

    const userPrefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    const hasUserSetDarkModeManually =
      document.documentElement.dataset.theme == 'dark';
      
    if (!hasUserSetDarkModeManually) {
      setTheme(userPrefersDarkMode ? 'dark' : 'light');
    }
    
  });
  const setTheme = (theme) => {
    //document.documentElement points to html tag in app.html file
    //dataset.theme equals data-theme attribute
    document.documentElement.dataset.theme = theme;
    //31536000s is equal to one year
    document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
    currentTheme = theme;
  };

  $: url = $page.url.href;
  $: routeId = $page.route.id;
</script>

<nav>
  <div class="container">
    <h1>Start Bootstrap</h1>
    <ul>
      {#each navs as { title, href }}
        <li>
          <a
            {href}
            class:active={href === '/' ? routeId === '/' : url.includes(href)}
            {title}>{title}</a
          >
        </li>
      {/each}

      <li class="relative">
        {#if currentTheme == 'light'}
          <a class="moon" href={'#'} on:click={() => setTheme('dark')}>
            <Moon />
          </a>
        {:else}
          <a class="sun" href={'#'} on:click={() => setTheme('light')}>
            <Sun />
          </a>
        {/if}
      </li>
    </ul>
  </div>
</nav>

<style>
  .container {
    display: flex;
    align-items: center;
  }
  nav {
    padding: 0.5em;
    background: #343e40;
    color: white;
  }
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    margin-left: auto;
    font-size: 1em;
  }
  li {
    margin-right: 20px;
  }
  h1 {
    margin: 0;
    font-size: 1.3em;
    font-weight: normal;
  }
  a {
    text-decoration: none;
    color: #aaa;
  }
  .active {
    color: white;
  }
</style>
