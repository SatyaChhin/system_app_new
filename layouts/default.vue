<template>
  <div class="relative min-h-screen bg-gray-100 dark:bg-gray-900">
    <header class="px-4 sm:px-6 lg:px-8 bg-white shadow-inner">
      <div class="mx-auto max-w-full sm:px-6 lg:px-8">
        <div class="p-4 text-xl font-bold text-npca-blue-950">
          <div class="text-primary-500">{{ $t('system.hc') }}</div>{{ $t('system.mrs') }}
        </div>
      </div>
    </header>
    <LayoutNav/>
    <main class="z-1">
      <div class="mx-auto max-w-full py-6 sm:px-6 lg:px-8">
        <!-- Add the style attribute to customize the color -->
        <NuxtLoadingIndicator style="color: red !important;"></NuxtLoadingIndicator>
        <slot/>
      </div>
    </main>

    <UNotifications />
  </div>
</template>