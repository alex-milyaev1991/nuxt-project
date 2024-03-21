import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use(
  (config) => {
    if (process.client) {
      let token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('auth._token.local='))

      if (token) {
        token = decodeURIComponent(token.split('=')[1])
        config.headers['Authorization'] = token
      }
    }
    return config
  },
  function (error) {
    console.error(`${error}`)
    return Promise.reject(error)
  }
)

export default {
  isOwnData(currentUser, username) {
    if (
      currentUser.username == username ||
      currentUser.groups.hasOwnProperty('20') || // Allow Customer Support
      currentUser.groups.hasOwnProperty('90') || // Allow Admin
      currentUser.groups.hasOwnProperty('1001') // Allow Developers
    )
      return true
    else {
      return false
    }
  },

  requireSelf(store, route, router) {
    let currentUser = store.state.auth.user
    if (
      currentUser.username == route.params.username ||
      currentUser.groups.hasOwnProperty('20') || // Allow Customer Support
      currentUser.groups.hasOwnProperty('90') || // Allow Admin
      currentUser.groups.hasOwnProperty('1001') // Allow Developers
    ) {
      return
    } else {
      router.push('/unauthorized')
    }
  },

  async isMentorTo(username) {
    try {
      let response = await apiClient.get(
        `/auth/isMentorTo?username=${username}`
      )
      return response.data.isMentor
    } catch (error) {
      console.error(error)
      return false
    }
  },

  isMember(currentUser) {
    return !!currentUser?.groups?.hasOwnProperty('2')
  },

  isSpecialist(currentUser) {
    if (currentUser && currentUser.groups) {
      if (
        currentUser.groups.hasOwnProperty('10') || // Allow Specialists
        currentUser.groups.hasOwnProperty('20') || // Allow Customer Support
        currentUser.groups.hasOwnProperty('90') || // Allow Admin
        currentUser.groups.hasOwnProperty('1001') // Allow Developers
      ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },

  isCustomerSupport(currentUser) {
    if (currentUser && currentUser.groups) {
      if (
        currentUser.groups.hasOwnProperty('20') || // Allow Customer Support
        currentUser.groups.hasOwnProperty('90') || // Allow Admin
        currentUser.groups.hasOwnProperty('1001') // Allow Developers
      ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },

  isAdmin(currentUser) {
    if (currentUser && currentUser.groups) {
      if (
        currentUser.groups.hasOwnProperty('90') || // Allow Admin
        currentUser.groups.hasOwnProperty('1001') // Allow Developers
      ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },

  isDeveloper(currentUser) {
    if (currentUser && currentUser.groups) {
      if (
        currentUser.groups.hasOwnProperty('1001') // Allow Developers
      ) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  },

  getAuthorizationUrlParameters(store) {
    if (store.state.auth.loggedIn && store.state.auth.user) {
      return (
        '?uId=' +
        store.state.auth.user.username +
        '&uK=' +
        store.state.auth.user.ssoKey
      )
    } else {
      return ''
    }
  },

  async ssoKeyNeeded(
    store,
    router,
    route,
    blank = true,
    addQm = true,
    addAnd = false,
    params = ''
  ) {
    var authorized = await this.validateSSO(store)

    if (!authorized) {
      router.push({
        path: '/login',
        query: {
          securityMsg: true,
          route: route,
          href: true,
          blank: blank,
          addQm: addQm,
          addAnd: addAnd,
          params: '(' + params + ')',
        },
      })
    } else {
      var qm = '?'
      var and = '&'

      if (addQm != true) {
        qm = ''
      }

      if (addAnd != true) {
        and = ''
      }

      let finalRoute =
        route +
        qm +
        params +
        and +
        'username=' +
        store.state.auth.user.username +
        '&key=' +
        store.state.auth.user.ssoKey

      if (blank) {
        window.open(finalRoute, '_blank')
      } else {
        window.location.href = finalRoute
      }
    }
  },

  createSsoKeyRouteParam(params) {
    var str = ''

    for (var key in params) {
      if (str != '') {
        str += '&'
      }

      str += key + '=' + encodeURIComponent(params[key])
    }

    return str
  },

  async validateSSO(store) {
    if (store.state.auth.loggedIn && store.state.auth.user) {
      let call = axios.create({
        baseURL: process.env.backofficeUrl,
        withCredentials: false,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      let response = await call.get(
        '/validate_key.php?' +
          'username=' +
          store.state.auth.user.username +
          '&key=' +
          store.state.auth.user.ssoKey
      )

      return response.data.authenticated
    } else {
      return false
    }
  },

  async requestPasswordResetToken(username) {
    if (!username) throw 'No Username Provided'
    try {
      let response = await apiClient.post(`/auth/request-passord-reset`, {
        username,
      })
      return response.data
    } catch (error) {
      throw error.response.data.error || 'Error Sending Email'
    }
  },

  async verifyPasswordResetToken(resetToken) {
    try {
      if (!resetToken) return false
      let response = await apiClient.post(`/auth/verify-password-token`, {
        resetToken,
      })
      return response.data.tokenValid
    } catch (error) {
      throw error.response.data.error || 'Error Verifying Token'
    }
  },

  async resetPassword(resetToken, username, password, confirmPassword) {
    if (
      !resetToken ||
      !username ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword
    )
      return false

    try {
      let response = await apiClient.post(`/auth/reset-password`, {
        resetToken,
        username,
        password,
        confirmPassword,
      })
      return response.data.passwordUpdated
    } catch (error) {
      throw error.response.data.error || 'Error Reseting Password'
    }
  },
}
