const { assert, expect } = require("chai");
const { ethers } = require("hardhat");
const { boolean } = require("hardhat/internal/core/params/argumentTypes");
const { DEFAULT_FLAGS } = require("typechain");
/* 
  In this module we are going to write test cases for our contracts
*/
//tests
describe("SimpleStorage", function () {
    let SimpleStorageFactory, SimpleStorage;
    beforeEach(async function () {
        SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        SimpleStorage = await SimpleStorageFactory.deploy();
    })
    it("Retrieve function should return 0", async function () {
        const returnvalue = await SimpleStorage.retrieve();
        const testValue = "0";
        assert.equal(returnvalue.toString(), testValue)
    })
    it("Value should be updated", async function () { //it .only means only this test case will return
        const updateValue = "55";
        await SimpleStorage.store(updateValue);
        const returnvalue = await SimpleStorage.retrieve();
        expect(returnvalue.toString() === updateValue);
    })
    it("should save value in array", async function () {
        const checkName = "wajahat", checkNum = 16;
        const person = await SimpleStorage.addPerson(checkName, checkNum);
        const name = await SimpleStorage.getName();
        const num = await SimpleStorage.getNum().toString();
        //(checkName === name) && (checkNum === num)
        assert.equal(checkName, name) && assert.equal(checkNum, num)
    })

    //yarn hardhat test --grep updated (this command will used to run a test with specific keyword)
    //yarn hardhat test (for all tests)

})