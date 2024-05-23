<template>
  <div v-if="items.length > 0" class="menu-item w-full md:w-auto hover:bg-white dark:hover:bg-gray-800 dark:hover:text-npca-blue-950 hover:text-primary hover:dark:text-white pl-6 md:px-2 py-4 flex item-start md:items-center transition hover:ease-in duration-400">
    <UDropdown :ui="{ ring: '', item: { active: 'bg-gray-100 dark:bg-gray-900' } }" :items="items" :popper="{ placement: 'bottom-start' }">
      <ULink class="flex items-center">
        <UIcon :name="icon" class="mr-2 h-6 w-6" />
        {{ $t(label) }}
      </ULink>
      <template #item="{ item }">
        <div class="flex items-center space-x-2">
          <UIcon :name="item.icon" class="h-5 w-5" />
          {{ console.log(item.url) }}
          <ULink :to="item.url" :icon="item.icon"> {{ $t(item.label) }}</ULink>
        </div>
      </template>
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: String,
  icon: String,
  items: Array
});
</script>
