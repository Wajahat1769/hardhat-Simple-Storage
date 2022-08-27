const { task } = require("hardhat / config");
//const { hre } = require("hardhat");
task("blockNum", "Returns the block number of network").setAction(
    async (functionArgs, hre) => {
        const blockNum = await hre.ethers.provider.getBlockNumber();
        console.log("Block num is : ", blockNum);
    });
module.exports = {}   