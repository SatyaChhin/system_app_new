<template>
  <div>
    <header class="bg-white shadow">
      <div class="mx-auto max-w-full px-4 py-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <slot name="header" />
        </h1>
      </div>
    </header>
    <main class="z-1">
      <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
</script>