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
  async getAllEvents() {
    let response = await apiClient.get(`/events/`)
    return response.data
  },

  async getAllAttendantLeaders(eventId) {
    let response = await apiClient.get(`/events/id/${eventId}/leaders`)
    return response.data
  },

  async getAllAttendants(eventId) {
    let response = await apiClient.get(`/events/id/${eventId}/attendants`)
    return response.data
  },

  async getEventAttendantRanks(eventId) {
    let response = await apiClient.get(`/events/id/${eventId}/attendants/ranks`)
    return response.data
  },

  async deleteAttendant(eventId, username) {
    let response = await apiClient.delete(
      `/events/id/${eventId}/delete-attendant?username=${username}`
    )
    return response.data
  },
  async updateAttendant(eventId, attendant) {
    let response = await apiClient.put(
      `/events/id/${eventId}/update-attendant?
      username=${attendant.username}
      &firstName=${attendant.firstName}
      &lastName=${attendant.lastName}
      &phone=${attendant.phone}
      &email=${attendant.email}
      &address=${attendant.address}
      &country=${attendant.country}
      &state=${attendant.state}
      &teamLeader=${attendant.teamLeader}
      &earlyBird=${attendant.earlyBird}
      &needsTranslation=${attendant.needsTranslation}
      &vegan=${attendant.vegan}
      &vegetarian=${attendant.vegetarian}
      &glutenFree=${attendant.glutenFree}
      &allergy=${attendant.allergy}
      &allergyDetails=${attendant.allergyDetails}
      &isChild=${attendant.isChild}
      &dateRegistered=${attendant.timestamp}`
    )
    return response.data
  },

  async addAttendant(eventId, attendant) {
    let response = await apiClient.post(`/events/id/${eventId}/update-attendant?
    username=${attendant.username}&firstName=${attendant.firstName}&lastName=${attendant.lastName}&phone=${attendant.phone}
    &email=${attendant.email}
    &address=${attendant.address}
    &country=${attendant.country}
    &state=${attendant.state}
    &teamLeader=${attendant.teamLeader}
    &earlyBird=${attendant.earlyBird}
    &needsTranslation=${attendant.needsTranslation}
    &vegan=${attendant.vegan}
    &vegetarian=${attendant.vegetarian}
    &glutenFree=${attendant.glutenFree}
    &allergy=${attendant.allergy}
    &allergyDetails=${attendant.allergyDetails}
    &isChild=${attendant.isChild}
    &dateRegistered=${attendant.timestamp}`)
    return response.data
  },
}
