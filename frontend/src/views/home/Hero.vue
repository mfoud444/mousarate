<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { NButton, NDataTable } from 'naive-ui';
import { get } from '@/utils/request'; // Adjust this import based on your project structure

const data = ref();

async function firstPostRequest(): Promise<void> {
  try {
    const response = await get({ url: 'get-rate' });
    data.value = response[0][0]['text'];
    const parsedResponse = JSON.parse(data.value);
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
    console.log('response', formattedData);
  } catch (error: any) {
    console.error('Error: ', error.message);
    throw error;
  }
}

async function goStart() {
  await firstPostRequest();
}

onMounted(async () => {
  goStart();
});


const columns = [
  {
    title: 'مدينة',
    key: 'city',
  },
  {
    title: 'سعر الشراء (ريال سعودي)',
    key: 'sar_buy',
  },
  {
    title: 'سعر البيع (ريال سعودي)',
    key: 'sar_sell',
  },
  {
    title: 'سعر الشراء (دولار أمريكي)',
    key: 'usd_buy',
  },
  {
    title: 'سعر البيع (دولار أمريكي)',
    key: 'usd_sell',
  }
];
</script>
<template>
  <div>
    <NButton @click="goStart">   تحديث</NButton>
    <NDataTable dir="rtl" :columns="columns" :data="data" />
  </div>
</template>