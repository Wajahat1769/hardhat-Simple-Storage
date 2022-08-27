const { network, task } = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
//require("./tasks/block-number");
require("hardhat-gas-reporter");
require('solidity-coverage')
task("blockNum", "Returns the block number of network").setAction(
  async (functionArgs, hre) => {
    const blockNum = await hre.ethers.provider.getBlockNumber();
    console.log("Block num is : ", blockNum);
  });



const url = process.env.RINKEBY_URL || "https://www.facebook.com"
const key = process.env.key || "0xfr"
const apiKey = process.env.API_KEY || "qwdsdw"
const cmcKey = process.env.CMC_API_KEY || "sascwd"
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: url,
      accounts: [key],
      chainId: 4,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    },
  },
  etherscan: {
    apiKey: apiKey
  },
  solidity: "0.8.9",
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: cmcKey,
    token: "MATIC",
    outputFile: "gasReport.txt",
    noColors: true
  },
  plugins: ["solidity-coverage"]

};
