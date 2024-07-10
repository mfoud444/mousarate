<script lang="ts" setup>
import GooglePlay from '@/assets/googleplay.png'
import App_store_ARA from '@/assets/app_store_ARA.webp'
import { t } from '@/locales'
import { NButton } from 'naive-ui'
import { ref } from 'vue';
const loading = ref(false);
const apkUrl = "https://raw.githubusercontent.com/mfoud444/mousarate/main/src/views/home/mousa-rate.apk"

function downloadApk() {
  loading.value = true
  try {
    window.location.href = apkUrl
  } catch (error) {
    console.error('Download failed:', error)
  } finally {
    loading.value = false
  }
}
// const downloadApk = async () => {
//   try {
//     loading.value = true
//     const apkFileName = 'assets/mousa-rate.apk'; 
//     const response = await fetch(apkFileName);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const blob = await response.blob();
//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = apkFileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     window.URL.revokeObjectURL(url);
//     loading.value = false
//   } catch (error) {
//     console.error('Download failed:', error);
//     loading.value = false
//   }
// }
</script>

<template>
  <div class="bg-purple-200 dark:bg-rose-400 rounded-lg gap-y-8 place-content-center justify-items-center place-items-center w-full">
    <div class="grid px-8 md:grid-cols-2 gap-y-8 py-3 place-content-center justify-items-center place-items-center w-full">
      <div class="flex flex-col justify-around">
        <div class="font-bold text-base lg:text-3xl pb-2 gtext">
          أسعار الصرف في اليمن
        </div>
        <div class="font-bold text-base">
          قم بتنزيل التطبيق للحصول على أحدث أسعار الصرف في اليمن. توفر لك هذه الخدمة الأسعار المحدثة من مختلف المدن.
        </div>
      </div>
      <div class="flex gap-8 justify-center">
        <NButton :loading="loading" type="primary" @click="downloadApk">تنزيل التطبيق</NButton>
      </div>
    </div>
  </div>
</template>