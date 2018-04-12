import * as axios from 'axios'

export const fetch = axios.create({
  baseURL: 'http://localhost:9000/api/',
})
