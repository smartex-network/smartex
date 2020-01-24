import React from 'react'
import ReactDOM from 'react-dom'

import AppUtils from 'utils/app'
import { Web3Service } from 'services'

import App from './App'

AppUtils.waitFor([
  Web3Service.initialized(),
]).then(() => {
  ReactDOM.render(<App />, document.getElementById('app'))
})
