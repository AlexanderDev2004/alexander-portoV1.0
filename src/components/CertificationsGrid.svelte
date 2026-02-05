<script>
  export let items = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {#each items as cert (cert.id)}
    <div class="group border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
      <!-- Certificate Image -->
      {#if cert.certificateImage}
        <div class="relative overflow-hidden bg-gray-200 dark:bg-gray-800 h-48">
          <img 
            src={cert.certificateImage} 
            alt={cert.title}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      {:else}
        <div class="bg-gradient-to-br from-green-400 to-green-600 h-48 flex items-center justify-center">
          <iconify-icon icon="mdi:certificate-outline" width="80" height="80" class="text-white"></iconify-icon>
        </div>
      {/if}

      <!-- Certificate Info -->
      <div class="p-5">
        <div class="flex items-baseline gap-2 mb-2 flex-wrap">
          <h3 
            class="text-base font-bold text-gray-900 dark:text-gray-100"
            style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;"
          >
            {cert.title}
          </h3>
          <span class="text-xs font-semibold px-2 py-0.5 border border-gray-400 dark:border-gray-600 rounded text-gray-600 dark:text-gray-400">
            {cert.year}
          </span>
        </div>

        <!-- Description -->
        <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
          {cert.description}
        </p>

        <!-- View Certificate Link -->
        {#if cert.certificateLink}
          <a 
            href={cert.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium mb-3"
          >
            <span>View Certificate</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        {/if}

        <!-- Tags -->
        {#if cert.tags && cert.tags.length > 0}
          <div class="flex flex-wrap gap-1.5">
            {#each cert.tags.slice(0, 3) as tag}
              <span 
                class="px-2 py-1 text-xs border border-gray-400 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            {/each}
            {#if cert.tags.length > 3}
              <span 
                class="px-2 py-1 text-xs border border-gray-400 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300"
              >
                +{cert.tags.length - 3}
              </span>
            {/if}
          </div>
        {/if}
      </div>
    </div>
  {/each}
</div>
