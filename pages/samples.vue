<template>
  <UCard>
    <Panel class="flex-col md:flex-row">
      <div class="m-2 w-full md:w-1/4">
        <SearchSelect v-model="selected" :options="options" placeholder="Select something"/>
      </div>
      <div class="m-2 w-full md:w-1/4">
        <UButton icon="i-heroicons-eye-20-solid">All Button</UButton>
        <UButton class="ml-4 bg-npca-blue-950" icon="i-heroicons-eye-20-solid">All Button</UButton>
      </div>
    </Panel>
  </UCard>
</template>
<script setup lang="ts">
import SearchSelect from "~/components/forms/SearchSelect.vue";
import Panel from "~/components/layouts/Panel.vue";
const selected = ref()
const options = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb'},
  { id: 4, name: 'Tom Cook'},
  { id: 5, name: 'Tanya Fox'},
  { id: 5, name: 'Hellen Schmidt'}
]

</script>
