import Web3 from 'web3'

import { abi } from 'constants/contract'
import { FALLBACK_URL, CONTRACT_ADDRESS } from 'constants/ethereum'

class Web3Service {
  isInitialized = false

  constructor() {
    let provider = new Web3.providers.WebsocketProvider(FALLBACK_URL)

    this.web3 = new Web3(provider)
    this.contract = new this.web3.eth.Contract(abi, CONTRACT_ADDRESS)

    this.web3.currentProvider.connection.onopen = () => {
      this.isInitialized = true
    }

    if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
      provider = window.ethereum || window.web3.currentProvider
    } else if (window.trustProvider) {
      provider = window.trustProvider
    }

    this.mmWeb3 = new Web3(provider)
    this.mmContract = new this.mmWeb3.eth.Contract(abi, CONTRACT_ADDRESS)
  }

  initialized = () => {
    if (this.isInitialized) {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      let timeout = 0

      const interval = setInterval(() => {
        if (this.isInitialized) {
          clearInterval(interval)

          resolve()
        } else if (timeout > 2000) {
          clearInterval(interval)

          reject()
        }

        timeout += 10
      }, 10)
    })
  }

  isMetaMask = () => typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined'

  subscribeMetaMaskAccounts = callback => {
    if (window.ethereum && typeof window.ethereum.on === 'undefined') {
      return () => {}
    }

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', callback)
      return () => {}
    }

    if (window.web3) {
      const timer = setInterval(() => {
        this.mmWeb3.eth.getAccounts().then(callback)
      }, 1000)

      return () => clearInterval(timer)
    }

    return () => {}
  }

  checkAddressRegistered = async address => {
    const { id } = await this.getUserByAddress(address)

    return ~~id !== 0
  }

  getAccount = async () => {
    let accounts

    if (window.ethereum) {
      accounts = await window.ethereum.enable()
    } else {
      accounts = await this.mmWeb3.eth.getAccounts()
    }

    return accounts[0]
  }

  registerUser = async data => {
    const account = await this.getAccount()

    return this.mmWeb3.eth.sendTransaction({
      from: account,
      data,
      to: CONTRACT_ADDRESS,
      value: Web3.utils.toWei('0.5', 'ether'),
      gasPrice: Web3.utils.toWei('21', 'gwei'),
      gasLimit: Web3.utils.numberToHex(400000),
    })
  }

  getCurrentUserID = () => this.contract.methods.currentUserID().call()

  getUserByAddress = address => this.contract.methods.users(address).call()

  getUserAddressByID = id => this.contract.methods.userAddresses(id).call()

  getUserLevelExpiresAt = async (address, level) => {
    const duration = await this.contract.methods.getUserLevelExpiresAt(address, level).call()

    return Web3.utils.toBN(duration).toNumber()
  }

  getUserReferrals = address => this.contract.methods.getUserReferrals(address).call()

  getUserUpline = (address, height) => this.contract.methods.getUserUpline(address, height).call()

  getPastEvents = (name, filter, fromBlock = 0) => this.contract.getPastEvents(name, {
    filter,
    fromBlock,
  })

  findFreeReferrer = address => this.contract.methods.findReferrer(address).call()

  buyLevel = async (level, account, value) => this.mmContract.methods.buyLevel(level).send({
    from: account,
    value,
    gasPrice: Web3.utils.toWei('21', 'gwei'),
    gasLimit: Web3.utils.numberToHex(100000),
  })
}

export default Web3Service
