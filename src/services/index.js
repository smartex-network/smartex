import Store from './Store'

import Web3 from './Web3'
import Socket from './Socket'

const StoreService = new Store()

const Web3Service = new Web3(StoreService)
const SocketService = new Socket()

export {
  StoreService,

  Web3Service,
  SocketService,
}
