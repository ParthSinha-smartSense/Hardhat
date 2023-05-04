import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
dotenvConfig({ path: resolve(__dirname, './.env') })

task('accounts',"List the accounts with balance", async(taskArgs, hre)=>{
  const accounts = await hre.ethers.getSigners()
  for(const account of accounts){
    const address = await account.getAddress()
    const balance = hre.ethers.utils.formatEther( await account.getBalance())
    console.log(`${address} has a balance of ${balance} ethers`)
  }
})
const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{},
    goerli:{
      url:`https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts:[process.env.METAMASK_PRIVATE_KEY as string]
    }
  }
};

export default config;
