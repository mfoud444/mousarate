<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { NButton, NDataTable, NSpin, NResult, NTime, NBadge, useMessage } from 'naive-ui';
import { get } from '@/utils/request';
import { SvgIcon } from '@/components/common'

const message = useMessage();
const data = ref();
const initialLoading = ref(true);
const loadingUpdate = ref(false);
const error = ref(false);
const errorMessage = ref("");
const time = ref(new Date());

async function fetchData(): Promise<void> {
  error.value = false;
  errorMessage.value = "";
  try {
    const response = await get({ url: 'get-rate' });
    if (!response || response.length === 0) {
      throw new Error("No data received");
    }

    const parsedResponse = JSON.parse(response[0][0]['text']);
    if (!parsedResponse || parsedResponse.length === 0) {
      throw new Error("No data in response");
    }

    const formattedData = [
      {
        city: 'عدن',
        sar_buy: parsedResponse[0].A,
        sar_sell: parsedResponse[0].B,
        usd_buy: '$' + parsedResponse[0].C,
        usd_sell: '$' + parsedResponse[0].D,
      },
      {
        city: 'صنعاء',
        sar_buy: parsedResponse[0].s1,
        sar_sell: parsedResponse[0].s2,
        usd_buy: '$' + parsedResponse[0].s3,
        usd_sell: '$' + parsedResponse[0].s4,
      },
      {
        city: 'تعز',
        sar_buy: parsedResponse[0].h1,
        sar_sell: parsedResponse[0].h2,
        usd_buy: '$' + parsedResponse[0].h3,
        usd_sell: '$' + parsedResponse[0].h4,
      },
      {
        city: 'حضرموت',
        sar_buy: parsedResponse[0].t1,
        sar_sell: parsedResponse[0].t2,
        usd_buy: '$' + parsedResponse[0].t3,
        usd_sell: '$' + parsedResponse[0].t4,
      }
    ];
    data.value = formattedData;
    time.value = new Date();
    if (!initialLoading.value) {
      message.info('تم التحديث بنجاح');
    }
    initialLoading.value = false;
    loadingUpdate.value = false;

  } catch (error: any) {
    console.error('Error: ', error.message);
    errorMessage.value = error.message || "An error occurred while fetching data.";
    error.value = true;
    initialLoading.value = false;
    loadingUpdate.value = false;
  }
}

async function goStart() {
  loadingUpdate.value = true; 
  await fetchData();
}

function shareToWhatsApp() {
  if (!data.value) return;

  let message = "أسعار الصرف:\n\n";
  data.value.forEach((city) => {
    message += `${city.city}:\n`;
    message += `SAR شراء: ${city.sar_buy} | بيع: ${city.sar_sell}\n`;
    message += `USD شراء: ${city.usd_buy} | بيع: ${city.usd_sell}\n\n`;
  });

  message += `آخر تحديث: ${time.value.toLocaleString()}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/+966533646094?text=${encodedMessage}`, '_blank');
}

onMounted(() => {
  fetchData();
  const intervalId = setInterval(fetchData, 2 * 60 * 1000); 

  onUnmounted(() => {
    clearInterval(intervalId); 
  });
});

const columns = [
  {
    title: 'المدينة',
    key: 'city',
    align: 'center',
    width:88,
  },
  {
    title: 'سعر الشراء',
    key: 'sar_buy',
    align: 'center',
    width:70,
 
  },
  {
    title: 'سعر البيع',
    key: 'sar_sell',
    align: 'center',
    width:70,
  },
  {
    title: 'سعر الشراء',
    key: 'usd_buy',
    align: 'center',
    width:70,
  },
  {
    title: 'سعر البيع',
    key: 'usd_sell',
    align: 'center',
    width:70,
  }
];
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-2 min-h-[330px]">
    <NSpin size="large" v-if="initialLoading" />
    <div v-if="!initialLoading && !error && data.length !== 0" class="flex items-center justify-between w-full">
      <div>
        <div class="flex items-center gap-2 bg-blue-100 p-2 rounded-full px-6">
          <NTime :time="time" />
          <NBadge dot type="error" processing></NBadge>
          <div v-if="!initialLoading && !error && data.length > 0" @click="shareToWhatsApp" class="icon-wrapper cursor-pointer">
      <SvgIcon icon="logos:whatsapp" />
    </div>
        </div>
        
      </div>
      <NButton :loading="loadingUpdate" type="primary" @click="goStart">تحديث</NButton>
    </div>

 

    <NDataTable class="rounded-lg" :single-line="false" striped v-if="!initialLoading && !error && data.length > 0"
      dir="rtl" :columns="columns" :data="data" />
    <NResult v-if="!initialLoading && (error || data.length === 0)" status="error" title="خطاء"
      :description="errorMessage">
      <template #footer>
        <NButton :loading="loadingUpdate" type="primary" @click="goStart">حاول مرة أخرى</NButton>
      </template>
    </NResult>
  </div>
</template>

<style scoped>
.icon-wrapper {
  cursor: pointer;
  font-size: 1.4rem;

}
</style>