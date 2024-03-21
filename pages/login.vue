<template>
  <div class="login">
    <v-container class="pa-1 pa-sm-2 pa-md-3">
      <v-row justify="center">
        <v-card
          :loading="loading"
          class="mt-2 mt-sm-6 mt-md-12"
          width="90%"
          max-width="400"
          light
          outlined
        >
          <v-container class="px-1 px-sm-2 px-md-4">
            <v-row justify="center">
              <nuxt-link to="/">
                <v-img
                  :src="require('@/assets/SolleLogo.svg')"
                  height="110"
                  contain
                ></v-img>
              </nuxt-link>
            </v-row>
            <v-card-title class="text-h5 text-md-h4 justify-center">
              {{ $t('login') }}
            </v-card-title>
            <v-card-text>
              <div class="mb-5 mb-sm-6">
                <v-alert
                  v-model="error"
                  close-text="Close Error"
                  type="error"
                  dense
                  text
                  dismissible
                >
                  {{ $t('loginUnsuccessful') }}
                </v-alert>
                <v-alert
                  v-show="securityMsg"
                  close-text="Close Message"
                  type="info"
                  dense
                  text
                >
                  {{ $t('securityMsg') }}
                </v-alert>
              </div>
              <v-form @submit="userLogin($event)">
                <v-text-field
                  v-model="username"
                  :label="$t('username')"
                  type="text"
                  outlined
                  required
                  :dense="$vuetify.breakpoint.smAndDown"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  :label="$t('password')"
                  :type="showPassword ? 'text' : 'password'"
                  outlined
                  required
                  :dense="$vuetify.breakpoint.smAndDown"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  name="password"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>

                <v-alert
                  v-model="rememberMe"
                  class="mb-1"
                  type="info"
                  dense
                  text
                >
                  {{ $t('rememberMeMsg') }}
                </v-alert>

                <div class="d-flex justify-center my-3">
                  <v-checkbox
                    v-model="rememberMe"
                    class="mt-0"
                    :label="$t('rememberMeText')"
                    hide-details
                  ></v-checkbox>
                </div>

                <v-btn
                  color="primary"
                  type="submit"
                  :x-large="$vuetify.breakpoint.mdAndUp"
                  depressed
                  block
                  >{{ $t('login') }}</v-btn
                >
                <br />
                <v-divider></v-divider>
                <br />
                <p class="text-center">
                  {{ $t('forgotPassword') }}
                  <nuxt-link class="solle-link-text" to="/forgot-password">{{
                    $t('resetItHere')
                  }}</nuxt-link>
                </p>
                <p class="mb-0 text-center">
                  {{ $t('newToSolle') }}
                  <nuxt-link
                    class="solle-link-text"
                    to="/become-a-brand-specialist#sign-up"
                    >{{ $t('createAccount') }}</nuxt-link
                  >
                </p>
              </v-form>
            </v-card-text>
          </v-container>
        </v-card>
      </v-row>
      <login-footer />
    </v-container>
  </div>
</template>

<script>
import StressQuizService from '@/services/StressQuizService'
import axios from 'axios'

export default {
  name: 'Login',
  components: {
    LoginFooter: () => import('~/components/Legacy/LoginFooter.vue'),
  },
  layout: 'blank',
  data: () => ({
    loading: false,
    error: false,
    rememberMe: false,
    username: '',
    password: '',
    showPassword: false,
    lang: 'en',
  }),
  head() {
    return {
      title: `Login`,
    }
  },

  // beforeCreate() {
  //   // let currentUser = this.$store.state.auth.user
  //   // if (currentUser) {
  //   //   this.$router.push('/dashboard')
  //   // }
  // },
  computed: {
    securityMsg() {
      if (this.$route.query.securityMsg !== undefined) {
        return this.$route.query.securityMsg === 'true'
      } else {
        return false
      }
    },
    route() {
      if (this.$route.query.route !== undefined) {
        return this.$route.query.route
      } else {
        return null
      }
    },
    href() {
      if (this.$route.query.href !== undefined) {
        return this.$route.query.href === 'true'
      } else {
        return false
      }
    },
    blank() {
      if (this.$route.query.blank !== undefined) {
        return this.$route.query.blank === 'true'
      } else {
        return true
      }
    },
    addQm() {
      if (this.$route.query.addQm !== undefined) {
        return this.$route.query.addQm === 'true'
      } else {
        return true
      }
    },
    addAnd() {
      if (this.$route.query.addAnd !== undefined) {
        return this.$route.query.addAnd === 'true'
      } else {
        return false
      }
    },
    params() {
      if (this.$route.query.params !== undefined) {
        return this.$route.query.params
      } else {
        return null
      }
    },
    isExpireValid() {
      if (this.$auth.$storage.getCookie('expire')) {
        var todaysDate = new Date()
        var expireDate = new Date(this.$auth.$storage.getCookie('expire'))

        if (expireDate > todaysDate) {
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    },
    quizResultId() {
      return this.$route?.query?.quizResults
    },
  },
  mounted() {
    if (this.securityMsg && this.isExpireValid) {
      this.rememberMe = true
    }

    if (this.$route.query.username) {
      this.username = this.$route.query.username
    }
  },

  methods: {
    async userLogin(evt) {
      this.loading = true

      evt.preventDefault()

      const credentials = {
        username: this.username,
        password: this.password,
      }

      try {
        let response = await this.$auth.loginWith('local', {
          data: credentials,
        })

        if (response.data.status === 'error') {
          this.error = true
        } else {
          this.$auth.setUser(response.data.user)

          axios.defaults.headers.common[
            'Authorization'
          ] = `Bearer ${response.data.jwt}`

          // Login with redirect from /quiz-results/:sessionId

          if (this.quizResultId) {
            const quizSession = await StressQuizService.updateQuizSession(
              this.quizResultId,
              {
                username: this.username,
              }
            )

            return this.$router.push(
              `/quiz-results/${quizSession.stressQuizSessionId}`
            )
          }

          // extends cookie expiration if "remember me" is selected
          if (this.rememberMe) {
            let authRefreshTokenLocal = this.$auth.$storage.getCookie(
              '_refresh_token.local'
            )
            let authTokenLocal = this.$auth.$storage.getCookie('_token.local')
            let authStrategy = this.$auth.$storage.getCookie('strategy')

            // Global cookie variable
            // let expireDays = process.env.AUTH_COOKIE_EXPIRE_DAYS || 0

            // Set date variables
            let expireDays = 14
            var expireDate = new Date()
            expireDate.setDate(expireDate.getDate() + expireDays)

            this.$auth.$storage.setCookie('expire', expireDate, {
              expires: expireDays,
            })
            this.$auth.$storage.setCookie(
              '_refresh_token.local',
              authRefreshTokenLocal,
              { expires: expireDays }
            )
            this.$auth.$storage.setCookie('_token.local', authTokenLocal, {
              expires: expireDays,
            })
            this.$auth.$storage.setCookie('strategy', authStrategy, {
              expires: expireDays,
            })
          }

          // adds redirection info if this was an sso key check
          this.$store.dispatch('app/setSsoCheckRedirectInfo', {
            route: this.route,
            href: this.href,
            blank: this.blank,
            addQm: this.addQm,
            addAnd: this.addAnd,
            params: this.params,
          })

          // Clear cart
          this.$store.dispatch('cart/clearCart')

          // Clear replicate site data
          this.$store.dispatch('replicateSite/setSiteData', {
            business_name: '',
            email: '',
            first_name: '',
            last_name: '',
            my_story: '',
            phone: '',
            profile_image: '',
            username: '',
            site_name: null,
          })

          //Set user region
          this.$store.dispatch(
            'geolocation/setUserRegionInfo',
            this.$auth.user.country.country_id.toString()
          )

          //Set select region
          this.$store.dispatch(
            'geolocation/setSelectedRegionInfo',
            this.$auth.user.country.country_id.toString()
          )

          //Update shop products
          let country = this.$auth.user.country.country_id.toString()
          var type = '8'

          if (this.$auth.user.groups['10']) {
            type = '1'
          }

          //User products
          try {
            this.$store.dispatch('shop/fetchUserRegionProducts', {
              countryId: country,
              orderTypeId: type,
            })
          } catch (e) {
            console.error('Error fetching products: ', e)
          }

          //Selected products
          try {
            this.$store.dispatch('shop/fetchSelectedRegionProducts', {
              countryId: country,
              orderTypeId: type,
            })
          } catch (e) {
            console.error('Error fetching products: ', e)
          }

          //Get user cart
          this.$store.dispatch('cart/fetchCartFromDB')

          this.$store.dispatch('app/setDashboardDrawer', true)
        }
      } catch (err) {
        console.error(err)
        this.error = true
      }

      this.loading = false
    },
  },
}
</script>

<i18n> 
{
  "en": {
    "loginUnsuccessful": "Login unsuccessful. Please try again",
    "forgotPassword": "Forgot your password?",
    "resetItHere": "Reset it here",
    "securityMsg": "For your security, please log in again",
    "rememberMeMsg": "Do not select if using a public or shared device",
    "rememberMeText": "Remember Me"
  },   
  "es": {
    "loginUnsuccessful": "Inicio de sesión sin éxito. Por favor vuelva a intentarlo",
    "forgotPassword": "¿Olvidó su contrasena?",
    "resetItHere": "Restaurar",
    "securityMsg": "Por su seguridad, inicie sesión nuevamente",
    "rememberMeMsg": "No elija esta opción si está usando un dispositivo público o compartido",
    "rememberMeText": "Recordar"
  }
} 
</i18n>

<style lang="scss" scoped>
.solle-link-text {
  color: #535d00;
  text-decoration: none;
  border-bottom: solid 1px #c0df16;
}
</style>
