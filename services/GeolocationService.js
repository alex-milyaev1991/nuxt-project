import axios from 'axios'

const apiGeolocation = axios.create({
  baseURL: `https://ipwhois.pro`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  async getGeolocation() {
    let response
    try {
      response = await apiGeolocation.get('/json/?key=Sc1xkzhjFBV8hpjU')
    } catch (error) {
      response = {
        country: 'United States',
        country_code: 'US',
      }
      console.error("Couldn't load IP data: ", error)
      return response
    }

    return response.data
  },
}
