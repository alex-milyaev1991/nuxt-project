<template>
  <div class="d-flex align-center">
    <a
      v-for="(item, i) in links"
      :key="i"
      :href="item.link"
      target="_blank"
      class="d-flex justify-end mr-5 social-media-link"
      v-html="item.icon"
    >
    </a>
  </div>
</template>

<script>
import FacebookLogo from '@/assets/FbLogo.svg?raw'
import InstagramLogo from '@/assets/svg/InstagramLogo.svg?raw'
import YoutubeLogo from '@/assets/svg/YoutubeLogo.svg?raw'

export default {
  name: 'SocialMediaLinks',
  data() {
    return {
      links: [
        {
          link: 'https://www.facebook.com/SolleNaturals',
          icon: FacebookLogo,
        },
        {
          link: 'https://www.instagram.com/sollenaturals/',
          icon: InstagramLogo,
        },
        {
          link: 'https://www.youtube.com/channel/UCtIL0YOEjTuYNYTDO8SpVrg',
          icon: YoutubeLogo,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
svg {
  width: 20px;
  height: 20px;
}
.social-media-link {
  width: 20px;
  height: 20px;
  svg {
    width: 20px;
    height: 20px;
  }
}
</style>
