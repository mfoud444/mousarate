<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { NButton, NDataTable, NSpin, NResult } from 'naive-ui';
import { get } from '@/utils/request'; 

const data = ref([]);
const initialLoading = ref(true); 
const loadingUpdate = ref(false); 
const error = ref(false);
const errorMessage = ref("");

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
        usd_buy: parsedResponse[0].C,
        usd_sell: parsedResponse[0].D,
      },
      {
        city: 'صنعاء',
        sar_buy: parsedResponse[0].s1,
        sar_sell: parsedResponse[0].s2,
        usd_buy: parsedResponse[0].s3,
        usd_sell: parsedResponse[0].s4,
      },
      {
        city: 'تعز',
        sar_buy: parsedResponse[0].h1,
        sar_sell: parsedResponse[0].h2,
        usd_buy: parsedResponse[0].h3,
        usd_sell: parsedResponse[0].h4,
      },
      {
        city: 'حضرموت',
        sar_buy: parsedResponse[0].t1,
        sar_sell: parsedResponse[0].t2,
        usd_buy: parsedResponse[0].t3,
        usd_sell: parsedResponse[0].t4,
      }
    ];
    data.value = formattedData;
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
  loadingUpdate.value = true; // Set button loading state
  await fetchData();
}

onMounted(async () => {
  await fetchData();
});

const columns = [
  {
    title: 'مدينة',
    key: 'city',
  },
  {
    title: 'سعر الشراء',
    key: 'sar_buy',
  },
  {
    title: 'سعر البيع',
    key: 'sar_sell',
  },
  {
    title: 'سعر الشراء',
    key: 'usd_buy',
  },
  {
    title: 'سعر البيع',
    key: 'usd_sell',
  }
];
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-2 min-h-[330px]">
    <NSpin size="large" v-if="initialLoading" />
    <NButton :loading="loadingUpdate" v-if="!initialLoading  && !error && data.length !== 0" class="self-end" type="primary" @click="goStart">تحديث</NButton>
    <NDataTable v-if="!initialLoading && !error && data.length > 0" dir="rtl" :columns="columns" :data="data" />
    <NResult v-if="!initialLoading && (error || data.length === 0)" status="error" title="خطاء" :description="errorMessage">
      <template #footer>
        <NButton :loading="loadingUpdate" type="primary" @click="goStart">حاول مرة أخرى</NButton>
      </template>
    </NResult>
  </div>
</template>

