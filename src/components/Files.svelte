<script lang="ts">
  import type { FileItem } from '../data/files';

  let items: FileItem[] = [];

  export { items as items };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
  {#each items as file, index (file.id)}
    <div
      class="border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900 w-full reveal pressable"
      style={`--reveal-delay: ${index}`}
    >
      <div class="bg-gray-100 dark:bg-gray-800 h-28 sm:h-32 md:h-32 overflow-hidden flex items-start justify-center">
        <iframe
          title={`${file.title} preview`}
          src={`${file.fileUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          class="w-full h-28 sm:h-32 md:h-32 scale-100"
          style="border: 0;"
        ></iframe>
      </div>

      <div class="p-3 sm:p-4 space-y-3">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
            {file.title}
          </h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
            {file.description}
          </p>
        </div>

        <div class="flex justify-start sm:justify-end">
          <a
            href={file.fileUrl}
            download
            class="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            {file.buttonLabel}
            <iconify-icon icon="mdi:file-pdf-box" width="18" height="18"></iconify-icon>
          </a>
        </div>
      </div>
    </div>
  {/each}
</div>
