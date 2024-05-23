<template>
  <div class="bg-primary background-image flex flex-row">
    <div class="flex min-h-screen w-3/12 bg-white flex-col justify-center px-6 py-12 lg:px-8 shadow-xl">
      <slot/>
    </div>
    <div class="w-9/12 min-h-full overflow-hidden">
        <img src="/bg.svg" alt="health" class="w-9/12 mx-auto h-screen">
    </div>
  </div>

</template>

<style scoped>
  .background-image {
  }
</style>

<script setup lang="ts">
</script>