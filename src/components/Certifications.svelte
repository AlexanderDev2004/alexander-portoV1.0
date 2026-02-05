<script>
  export let items = [];
  
  let expandedIndex = -1;
  
  function toggleExpand(index) {
    if (expandedIndex === index) {
      expandedIndex = -1;
    } else {
      expandedIndex = index;
    }
  }
</script>

<div class="space-y-4">
  {#each items.slice(0, 2) as cert, index (index)}
    <div class="border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors overflow-hidden">
      <!-- Header yang bisa di-click -->
      <button
        type="button"
        onclick={(e) => { e.preventDefault(); toggleExpand(index); }}
        class="w-full text-left p-5 flex justify-between items-start gap-4 hover:bg-opacity-50 cursor-pointer"
      >
        <div class="flex-1 min-w-0">
          <!-- Certification Title -->
          <div class="flex items-baseline gap-3 mb-2 flex-wrap">
            <h3 
              class="text-lg font-bold text-gray-900 dark:text-gray-100"
              style="font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 700;"
            >
              {cert.title}
            </h3>
            <span class="text-xs font-semibold px-3 py-1 border border-gray-400 dark:border-gray-600 rounded">
              {cert.year}
            </span>
          </div>
          
          <!-- Description Preview -->
          <p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            {cert.description}
          </p>
        </div>

        <!-- Chevron Icon -->
        <div class="flex items-center flex-shrink-0">
          <svg
            class="w-5 h-5 transition-transform duration-300 {expandedIndex === index ? 'rotate-180' : ''}"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>

      <!-- Content yang expandable -->
      {#if expandedIndex === index}
        <div class="px-5 pb-5 border-t border-gray-300 dark:border-gray-700 space-y-4">
          <!-- Full Description -->
          <div>
            <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {cert.description}
            </p>
          </div>

          <!-- Certificate Link -->
          {#if cert.certificateLink}
            <div>
              <a 
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm font-medium"
                onclick={(e) => e.stopPropagation()}
              >
                <span>View Certificate</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          {/if}

          <!-- Tags -->
          {#if cert.tags && cert.tags.length > 0}
            <div class="flex flex-wrap gap-2">
              {#each cert.tags as tag}
                <span 
                  class="px-3 py-1 border border-gray-400 dark:border-gray-600 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              {/each}
            </div>
          {/if}
        </div>
      {/if}
    </div>
  {/each}

  <!-- See More Button -->
  {#if items.length > 2}
    <div class="flex justify-center pt-4">
      <a 
        href="/all-certifications"
        class="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium"
        style="font-family: 'Plus Jakarta Sans', sans-serif;"
      >
        <span>– SEE MORE</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  {/if}
</div>
