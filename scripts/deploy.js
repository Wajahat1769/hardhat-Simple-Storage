//imports at the top

const { ethers, run, network } = require("hardhat"); // using const ethers = require ("hardhat") giving error
require('dotenv').config();
//const run = require("hardhat");
//functions
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    console.log("Deploying--------")
    const storageContract = await SimpleStorageFactory.deploy();
    await storageContract.deployed();
    console.log("storage contract address: ", storageContract.address);
    storageContract.deployTransaction.wait(3);
    if (network.config.chainId === 4 && process.env.API_KEY) {
        const fun = await verify(storageContract.address, []);
    }
    console.log(await storageContract.retrieve());
    await storageContract.store(9);
    console.log(await storageContract.retrieve());



}
// contractaddress: 0xB9b6a23A22329062A2ca9A6b6b61D13926E25510
async function verify(contractAddress, args) { //args will be the constructor of a smart contract
    console.log("Verifying Contract---------");
    try {
        await run("verify:verify", {
            address: contractAddress,
            constryctorArguments: args,
        })

    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Contract Already Verified")
        }
        else {
            console.log(e);
        }

    }
}

//main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    });