### Smartex

Smartex network frontend part

### Installation

1. Create `.env.local` file in the root folder with the content:

```
REACT_APP_SOCKET_URL=<api_url>
REACT_APP_ETH_FALLBACK_URL=<infura_or_similar_service_url>
REACT_APP_ETH_CONTRACT_ADDRESS=0x4abE410ae11835263203D4cA8eE222a38725396b
REACT_APP_ROOT_WALLET=0xcd465Bc251f1f5896d9be60281BFbb9a263592f7
REACT_APP_NETWORK_ID=1
```

**Note:** `REACT_APP_NETWORK_ID` set to 1 means Ethereum Mainnet. Set the appropriate network id, if you are going to use `Ropsten` or `Kovan` network.

2. Install project dependencies:

```
$ npm install
or
$ yarn install
```

### Development

Simply start the project with:

```
$ npm run start
or
$ yarn start
```

### Production

Build the project:

```
$ npm run build
or
$ yarn build
```

Upload the `build` directory to the server or CDN.
