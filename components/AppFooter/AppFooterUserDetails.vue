<template>
  <div
    class="d-flex flex-column flex-md-row footer-user-details"
    style="max-width: 100vw; overflow-x: auto"
  >
    <img
      class="person-image"
      :src="user.profile_image || require('@/assets/img/TestImage.jpg')"
    />
    <div class="d-flex flex-column justify-start align-center align-md-start">
      <span class="person-name">{{ referallAccountName }}</span>
      <span class="person-role">{{ $t('personRole') }}</span>

      <div
        class="contact-info d-flex flex-column justify-space-between align-center align-md-start"
      >
        <span>{{ $t('phone') }}: {{ user.phone }}</span>
        <span>{{ $t('email') }}: {{ user.email }} </span>
        <nuxt-link :to="contactMeLink" class="text-capitalize solleBlue--text">
          {{ $t('contactMe') }}
        </nuxt-link>
      </div>

      <social-media-links v-if="false" class="mt-3" />
    </div>
  </div>
</template>

<script>
import SocialMediaLinks from '@/components/SocialMediaLinks'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'AppFooterUserDetails',
  components: {
    SocialMediaLinks,
  },
  computed: {
    ...mapGetters({
      referallAccountName: 'replicateSite/referallAccountName',
    }),
    ...mapState({
      user: (state) => state.replicateSite.replicate_site_data,
    }),
    contactMeLink() {
      return `/${
        this.$route.query.specialistSite || this.$route.params.replicateSite
      }/contact-me`
    },
  },
}
</script>

<i18n> 
  {
    "en": {
      "personRole": "Brand Specialist",
      "phone": "Phone",
      "email": "Email",
      "contactMe": "Contact me"
    },
    "es":{
      "personRole": "Especialista de Marca",
      "phone": "Teléfono",
      "email": "Email",
      "contactMe": "Contáctame"
    }
  }
  </i18n>

<style lang="scss" scoped>
@import '~/assets/scss/mixin.scss';

.person-image {
  width: 230px;
  height: 230px;
  border: none;
  margin-right: 50px;
  flex: none;
  border-radius: 12px;

  @include atSmallAndDown {
    margin-right: 0;
    margin-bottom: 28px;
  }
}

.person-name {
  font-size: 32px;
  line-height: 36px;

  @include atSmallAndDown {
    margin-bottom: 10px;
  }
}

.person-role {
  font-weight: 300;
  font-size: 20px;
}

.contact-info {
  margin-top: 26px;
  font-size: 16px;
  line-height: 34px;
}

.footer-user-details {
  @include atSmallAndDown {
    align-items: center;
    margin-bottom: 30px;
  }
}
</style>
