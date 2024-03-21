<template>
  <div class="contact-me">
    <breadcrumb
      :items="items"
      breadcrumb-classes="cart-breadcrumbs contact-me ml-auto"
    />
    <div v-if="siteData" class="contact-me__data">
      <h1 class="contact-me__data__name solleBlack--text mb-2 mb-md-6">
        {{ username }}
      </h1>
      <h4 class="contact-me__data__specialist">{{ $t('specialist') }}</h4>
      <div
        class="contact-me__data__details d-flex justify-space-between align-center flex-column flex-sm-row mt-8"
      >
        <div
          class="contact-me__data__details__contact order-2 order-sm-1 mt-10 mt-sm-0"
        >
          <div class="contact-me__data__details__contact__phone d-flex">
            <span
              class="icon d-flex align-center justify-sm-center"
              v-html="phoneIcon"
            ></span>
            <div class="contact-me__data__details__contact__text ml-6 ml-8">
              <div class="header solleBlack--text mb-4 mb-sm-6">{{
                $t('phoneSupport')
              }}</div>
              <span class="solleBlack--text d-block mb-3"
                >{{ $t('textCall') }}
              </span>
              <span class="solleBlack--text d-block">{{ siteData.phone }}</span>
            </div>
          </div>
          <div class="contact-me__data__details__contact__email d-flex">
            <span
              class="icon d-flex align-center justify-sm-center"
              v-html="emailIcon"
            ></span>
            <div class="contact-me__data__details__contact__text ml-6 ml-sm-8">
              <div class="header solleBlack--text mb-4 mb-sm-6">{{
                $t('emailSupport')
              }}</div>
              <span class="solleBlack--text d-block">{{ siteData.email }}</span>
            </div>
          </div>
        </div>
        <div class="contact-me__data__details__photo order-1 order-sm-2">
          <img
            :src="
              siteData?.profile_image ||
              require(`../../assets/product/reviews/Jen.jpg`)
            "
            width="250"
            height="250"
            class="d-block mb-3 mb-sm-5"
          />
          <span class="d-block solleBlack--text text-center">{{
            $t('toHelp')
          }}</span>
        </div>
      </div>
    </div>

    <div v-if="siteData?.my_story" class="contact-me__story">
      <h2 class="solleBlack--text d-flex align-end">
        {{ $t('myStory') }}
        <hr class="ml-4 ml-md-md-10" />
      </h2>
      <p class="solleBlack--text" v-html="siteData.my_story"></p>
    </div>
  </div>
</template>

<script>
import ReplicateSiteService from '@/services/ReplicateSiteService.js'
import phoneIcon from '@/assets/svg/phone.svg?@raw'
import emailIcon from '@/assets/svg/email.svg?@raw'

export default {
  name: 'ContactMePage',
  components: {
    Breadcrumb: () => import('~/components/Breadcrumb'),
  },
  data: () => ({
    siteData: null,
    emailIcon,
    phoneIcon,
  }),
  computed: {
    items() {
      return [
        {
          text: this.$t('nav.home'),
          disabled: false,
          routePath: '/',
        },
        {
          text: this.$t('contactme'),
          disabled: true,
          routePath: '',
        },
      ]
    },
    username() {
      if (this.siteData) {
        if (this.siteData.business_name) return this.siteData.business_name

        return this.siteData.first_name + ' ' + this.siteData.last_name
      }

      return ''
    },
  },
  async mounted() {
    const response = await ReplicateSiteService.getSiteData({
      site_name: this.$route.params.replicateSite,
    })

    this.siteData = response.data
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/mixin.scss';
.contact-me {
  margin-top: 35px;
  margin-bottom: 60px;
  @include atMedium {
    margin-top: 30px;
    margin-bottom: 95px;
  }

  &__data {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 45px;
    margin-bottom: 85px;
    @include atMedium {
      max-width: 60%;
      margin-top: 105px;
      margin-bottom: 115px;
    }

    &__name {
      font-weight: 400;
      font-size: 16px;
      @include atMedium {
        font-size: 52px;
        line-height: 1.2;
      }
    }

    &__specialist {
      font-weight: 300;
      font-size: 12px;
      @include atMedium {
        font-size: 32px;
        line-height: 1.2;
      }
    }

    &__details {
      &__contact {
        @include atXSmall {
          width: 100%;
        }

        > div {
          &:first-child {
            margin-bottom: 45px;
            @include atMedium {
              margin-bottom: 75px;
            }
          }
        }

        .icon {
          width: 77px;
        }

        &__text {
          .header {
            font-weight: 300;
            line-height: 26px;
            font-size: 20px;
            @include atMedium {
              font-size: 28px;
            }
          }
          span {
            font-weight: 400;
            line-height: 26px;
            font-size: 14px;
            @include atMedium {
              font-size: 20px;
            }
          }
        }
      }

      &__photo {
        img {
          border-radius: 50%;
          width: 185px;
          height: 185px;
          @include atMedium {
            width: 250px;
            height: 250px;
          }
        }

        span {
          font-weight: 300;
          font-size: 8px;
          @include atMedium {
            font-size: 20px;
            line-height: 26px;
          }
        }
      }
    }
  }

  &__story {
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 85px;
    @include atMedium {
      max-width: 75%;
      margin-top: 110px;
    }

    h2 {
      font-weight: 300;
      font-size: 20px;
      @include atMedium {
        font-size: 32px;
      }

      hr {
        flex: 1;
        border: 1px solid #c0df16;
        border-radius: 2px;
        position: relative;
        top: -8px;
      }
    }

    p {
      font-weight: 400;
      margin-top: 50px;
      line-height: 24px;
      font-size: 14px;
      @include atMedium {
        margin-top: 65px;
        line-height: 28px;
        font-size: 20px;
      }
    }
  }
}
</style>

<i18n>
  {
    "en": {
      "contactme": "Contact Me",
      "myStory": "My Story",
      "phoneSupport": "Phone support",
      "textCall": "Text or call me at:",
      "emailSupport": "Email support",
      "specialist": "Brand Specialist",
      "toHelp": "I’m here to help!"
    },
    "es": {
      "contactme": "Contáctame",
      "myStory": "Mi historia",
      "phoneSupport": "Soporte telefónico",
      "textCall": "Escríbeme o llámame al:",
      "emailSupport": "Soporte de correo electrónico",
      "specialist": "Especialista De Marca",
      "toHelp": "¡Estoy aqui para ayudar!"
    }
  }
</i18n>
