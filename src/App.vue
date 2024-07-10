<script setup lang="ts">
import { NConfigProvider } from 'naive-ui'
import { NaiveProvider } from '@/components/common'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'
const { theme, themeOverrides } = useTheme()
const { language } = useLanguage()
// import { SplashScreen } from '@capacitor/splash-screen';
// import { onMounted } from 'vue';
// onMounted(async () => {
//   await SplashScreen.hide();
//     });
// :dir="language.name === 'ar-DZ' ? 'rtl' : 'ltr'"
</script>

<template>
   
  <NConfigProvider

    :theme="theme"
    :theme-overrides="themeOverrides"
    :locale="language"
   
  >
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </NConfigProvider>

</template>
