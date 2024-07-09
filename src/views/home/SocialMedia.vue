<script lang="ts" setup>
import { SvgIcon } from '@/components/common'
function goToSocialMedia(platform: string) {
  window.open(getSocialMediaLink(platform), '_blank');
}
function getSocialMediaLink(platform: string): string {
  switch (platform) {
    case 'telegram':
      return 'https://t.me/alsarf_Yemen';
    case 'facebook':
      return 'https://www.facebook.com/share/VNJPmnaPSpx6R3tL/?mibextid=qi2Omg';
    case 'whatsapp':
      return 'https://chat.whatsapp.com/ErqNQm3Umy1HPAxBe5a6sI';
 
    default:
      return '#'; 
  }
}
</script>

<template>

  <div>
      <div class="gtext text-2xl font-bold">تابعنا</div>
      <div class="flex gap-4 py-4">
        <!-- <div @click="() => goToSocialMedia('youtube')" class="icon-wrapper">
          <SvgIcon icon="logos:youtube-icon" />
        </div>
     
        <div @click="() => goToSocialMedia('tiktok')" class="icon-wrapper">
          <SvgIcon icon="logos:tiktok-icon" />
        </div>
        <div @click="() => goToSocialMedia('instagram')" class="icon-wrapper">
          <SvgIcon icon="skill-icons:instagram" />
        </div> -->
        <div @click="() => goToSocialMedia('facebook')" class="icon-wrapper">
          <SvgIcon icon="logos:facebook" />
        </div>
        <!-- <div  class="icon-wrapper">
          <SvgIcon icon="logos:whatsapp-icon" />
        </div> -->
        <div @click="() => goToSocialMedia('telegram')" class="icon-wrapper">
          <SvgIcon icon="logos:telegram" />
        </div>
        <!-- <div @click="() => goToSocialMedia('twitter')" class="icon-wrapper">
          <SvgIcon icon="line-md:twitter-x" />
        </div> -->
      </div>
    </div>

</template>


<style scoped>
.icon-wrapper {
  cursor: pointer;
  font-size: 1.4rem;

}
</style>