# Web3 Mint With React

This project is Web3 mint (testnet) , it's the first one i start with web3 by react and js 

Tools & modules :
- React.js
- Hardhat
- Charkra-ui
- Metamask with testnet (Rinkeby)

Before start :
- create .env file and put some code in it
```shell
REACT_APP_RINKEBY_RPC_URL = "get this form rinkeby.infura.io"
REACT_APP_ETHERSCAN_KEY = "get this form rinkeby.infura.io"
REACT_APP_PRIVATE_KEY = "get this form metamask"
```
deploy scripts:
```shell
npx hardhat run scripts/deploy.js
```
run project:
```shell
npm run start
```
