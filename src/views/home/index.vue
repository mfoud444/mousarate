<script lang="ts" setup>
import { ref } from 'vue';
import Hero from './Hero.vue';
import ApkLink from './ApkLink.vue';
import { Capacitor } from '@capacitor/core';
import SocialMedia from './SocialMedia.vue'
// Create a reactive state for the platform
const isNative = ref(Capacitor.isNativePlatform());

</script>

<template>
  <div class="container pb-1 pt-8 dark:bg-violet-950">
    <main class="relative flex min-h-[70vh] flex-col gap-4">
      <Hero />
      <!-- Conditionally render ApkLink based on the platform -->
      <ApkLink v-if="!isNative" />
      <div class="flex items-center justify-center">
        <SocialMedia/>
      </div>
   
    </main>
  </div>
</template>
