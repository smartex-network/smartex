import axios from 'axios'

import { SOCKET_URL } from 'constants/ethereum'

class Socket {
  constructor() {
    this.instance = axios.create({
      baseURL: SOCKET_URL,
      withCredentials: false,
    })
  }

  getUser = address => this.instance.get(`/user/${address}`).then(response => response.data)

  getStatistics = () => this.instance.get('/statistics').then(response => response.data)

  getReferrals = address => this.instance.get(`/referrals/${address}`).then(response => response.data)
}

export default Socket
