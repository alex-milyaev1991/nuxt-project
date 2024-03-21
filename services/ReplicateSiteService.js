import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  async getSiteData(data) {
    let response = await apiClient.get(
      `/replicate-sites/sitename/${data.site_name}`
    )
    return response
  },

  // STUB FUNCTION FOR NEW SITE DATA ACOUNT
  async postSiteData(siteData) {
    // let response = await apiClient.get(`/replicate-sites/sitename/${data.site_name}`)
    return siteData
  },
}
