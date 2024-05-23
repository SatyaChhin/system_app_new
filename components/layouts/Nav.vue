<script setup lang="ts">
import { useI18n } from "vue-i18n";
import MenuGroup from "~/components/layouts/MenuGroup.vue";
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const { t } = useI18n()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

const settings = [
  [
    {
      label: 'menu.setting-move',
      icon: 'i-heroicons-arrow-right-circle-20-solid',
    }
  ]
];
const certifications = [
  [
    {
      label: 'menu.certification-adjustment',
      icon: 'i-solar-adhesive-plaster-outline',
    },
    {
      label: 'menu.certification-certification',
      icon: 'i-solar-chat-square-check-outline',
    },
    {
      label: 'menu.certification-payment',
      icon: 'i-solar-dollar-minimalistic-outline',

    }
  ],
];
const monitorings = [
  [
    {
      label: 'menu.monitoring-survey',
      icon: 'i-solar-question-circle-outline',
    },
    {
      label: 'menu.monitoring-review',
      icon: 'i-solar-checklist-minimalistic-outline'
    },
    {
      label: 'menu.monitoring-complaint',
      icon: 'i-solar-chat-round-call-outline',
    },
  ],
];
const reports = [
  [
    {
      label: 'menu.report-survey',
      icon: 'i-solar-document-text-outline'
    },
    {
      label: 'menu.report-complaint',
      icon: 'i-solar-document-text-outline'
    }
  ],
];
</script>

<template>
  <div
    class="absolute bg-primary-600 dark:bg-npca-blue-950 z-10 pt-6 text-white w-56 min-h-screen transition-transform transform ease-in-out duration-300"
    :class="{ '-translate-x-full': !isMobileMenuOpen }" id="sidebar">
    <!-- Your Sidebar Content -->
    <div class="py-4">
      <div class="md:ml-10 flex flex-col items-start md:space-x-4">
        <MenuGroup :items="certifications" label="menu.certification" icon="i-solar-check-circle-outline" />
        <MenuGroup :items="monitorings" label="menu.monitoring" icon="i-solar-clipboard-check-outline" />
        <MenuGroup :items="reports" label="menu.report" icon="i-solar-file-text-outline" />
        <MenuGroup :items="settings" label="menu.setting" icon="i-solar-settings-outline" />
      </div>
    </div>
  </div>
  <nav class="bg-primary dark:bg-npca-blue-950 shadow text-white">
    <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between">
        <div class="flex items-center justify-between w-full">
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button type="button"
              class="relative inline-flex items-center justify-center p-2 text-white hover:bg-primary-600 dark:bg-npca-blue-950 z-20"
              aria-controls="mobile-menu" aria-expanded="false">
              <UIcon name="i-solar-hamburger-menu-outline" class="h-5 w-5 dark:text-white"
                @click="toggleMobileMenu()" />
            </button>
          </div>
          <div class="hidden md:block justify-start">
            <div class="ml-10 flex items-center space-x-4">
              <MenuGroup :items="certifications" label="menu.certification" icon="i-solar-check-circle-outline" />
              <MenuGroup :items="monitorings" label="menu.monitoring" icon="i-solar-clipboard-check-outline" />
              <MenuGroup :items="reports" label="menu.report" icon="i-solar-file-text-outline" />
              <MenuGroup :items="settings" label="menu.setting" icon="i-solar-settings-outline" />
            </div>
          </div>
          <div class="hidden ml-4 md:flex items-center md:ml-6 justify-end space-x-4">
            <UButton href="#" v-for="locale in availableLocales" :key="locale.code"
              @click.prevent.stop="setLocale(locale.code)"
              :icon="locale.code === 'kh' ? 'i-twemoji-flag-cambodia' : 'i-twemoji-flag-england'" variant="ghost"
              color="white" class="text-white hover:bg-primary-600 dark:hover:bg-npca-blue-800">{{ locale.name }}
            </UButton>

            <mode />

            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button type="button"
                  class="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
