<template>
  <USelectMenu v-model="model" :options="options" :placeholder="placeholder" searchable>
    <template #label>
      <span v-if="model" class="truncate w-full flex justify-between">
        <span class="justify-start">
          {{ model.name }}
        </span>
        <span class="justify-end">
          <UIcon name="i-solar-trash-bin-2-outline"
            class="w-5 h-5 transition-transform text-gray-400 dark:text-gray-500 mr-2 justify-end"
            @click="clearSelect()" />
        </span>
      </span>
      <div v-else>{{ placeholder }}</div>
    </template>

    <template #option="{ option: model }">
      <span class="truncate">{{ model.name }}</span>
    </template>
  </USelectMenu>
</template>
<script setup>
defineProps({
  placeholder: String,
  options: Array
})

const model = defineModel()
function clearSelect() {
  model.value = null;
}
</script>
