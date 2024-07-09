<script lang="ts" setup>
import GooglePlay from '@/assets/googleplay.png'
import App_store_ARA from '@/assets/app_store_ARA.webp'
import { t } from '@/locales'
import { NButton } from 'naive-ui'

const downloadApk = () => {
  const apkUrl = 'src/views/home/mousa-rat.apk'
  const link = document.createElement('a')
  link.href = apkUrl
  link.download = 'mousa-rate.apk' 
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
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
        <NButton type="primary" @click="downloadApk">تنزيل التطبيق</NButton>
      </div>
    </div>
  </div>
</template>

<!-- 

 <script lang="ts" setup>
import GooglePlay from '@/assets/googleplay.png'
import App_store_ARA from '@/assets/app_store_ARA.webp'
import mobileApp from '@/assets/mobileApp.svg'
import { t } from '@/locales'
import { NButton} from 'naive-ui';
import { baseImageUrl } from '@/utils/request/axios'
</script>
<template>
  <div class=" bg-purple-200 dark:bg-rose-400 rounded-lg  gap-y-8  place-content-center justify-items-center place-items-center w-full">

  <div
    class="grid px-8 md:grid-cols-2  gap-y-8 py-3 place-content-center justify-items-center place-items-center w-full">

    <div class="flex flex-col  justify-around">
      <div class=" font-bold  text-base lg:text-3xl pb-2 gtext">
        أسعار الصرف في اليمن
      </div>

      <div class=" font-bold text-base  ">
        قم بتنزيل التطبيق للحصول على أحدث أسعار الصرف في اليمن. توفر لك هذه الخدمة الأسعار المحدثة من مختلف المدن.

      </div>
  
    </div>

    <div class=" flex gap-8 justify-center ">
      <NButton   type="primary" @click="goStart">تنزيل التطبيق</NButton>
      -->