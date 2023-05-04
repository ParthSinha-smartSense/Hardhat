import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

task('accounts',"List the accounts with balance", async(taskArgs, hre)=>{
  const accounts = await hre.ethers.getSigners()
  for(const account of accounts){
    const address = await account.getAddress()
    const balance = await account.getBalance()
    console.log(`${address} has a balance of ${balance}`)
  }
})
const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
