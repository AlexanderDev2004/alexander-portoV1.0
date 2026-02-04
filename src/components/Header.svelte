<script>
  const toggleDarkMode = () => {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  const initDarkMode = () => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  };
</script>

<svelte:window on:load={initDarkMode} />

<header class="sticky top-0 z-50 transition-colors duration-300">
  <div class="container mx-auto px-6 py-8">
    <div class="flex justify-between items-start mb-8">
      <div class="flex-1">
        <h1 class="text-4xl md:text-5xl font-bold mb-2" style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;">
          Alexander Agung Raya
        </h1>

        <div class="flex items-center gap-3 mb-4">
          <span class="px-3 py-1 border border-current rounded-full text-sm" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            he/him/él
          </span>
        </div>

        <div class="space-y-1">
          <p class="text-lg" style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 500;">
            Software Developer
          </p>
          <div class="flex items-center gap-2">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
            <span style="font-family: 'Plus Jakarta Sans', sans-serif;">Indonesia, East Java</span>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle dark mode"
          on:click={toggleDarkMode}
        >
          <svg class="w-6 h-6 dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.64 10.64c-.18-1.34-.76-2.59-1.67-3.6-.9-1.01-2.16-1.64-3.56-1.85-1.4-.21-2.84.06-4.04.78-1.2.72-2.11 1.93-2.53 3.29-.42 1.36-.37 2.82.15 4.14.52 1.32 1.53 2.38 2.82 2.99 1.29.61 2.76.69 4.11.23 1.35-.46 2.47-1.4 3.1-2.65.63-1.25.71-2.72.38-4.14zm-2.04 2.07c-.38.73-.96 1.32-1.68 1.65-.73.33-1.55.38-2.34.14-.79-.24-1.47-.75-1.89-1.42-.42-.67-.58-1.49-.44-2.28.14-.79.54-1.51 1.13-2.02.59-.51 1.35-.79 2.13-.76.78.03 1.51.35 2.08.9.57.55.92 1.31.99 2.11.07.8-.15 1.6-.59 2.28z"/>
          </svg>
          <svg class="w-6 h-6 hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </button>
      </div>
    </div>

    <div class="h-px bg-current opacity-20 mb-8"></div>
  </div>
</header>

<style>
  header {
    color-scheme: light dark;
    color: light-dark(black, white);
    background-color: light-dark(white, #0f0f0f);
  }
</style>
