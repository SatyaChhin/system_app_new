<template>
  <UCard :ui="{ header: { background: 'bg-gray-50 font-bold text-xl' } }">
    <template #header>
      {{ $t('welcome') }}
    </template>
  </UCard>
</template>
<script setup lang="ts">
import Color from "~/components/mode.vue";
</script>