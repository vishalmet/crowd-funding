/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork:"goerli",
    networks:{
      Hardhat:{},
      goerli:{
        url:"https://rpc.com/eth_goerli",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
