const metamask_private_key = "0xbfbd9319aa69ffbf4b566ca24a3d195a000f7c9b037c06fe0ae25a6fb7b0acef"
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    Sepolia:{
      url:"https://sepolia.infura.io/v3/ad441041c9f04145b02f9d3b0e06f9d9",
      accounts: ['0xbfbd9319aa69ffbf4b566ca24a3d195a000f7c9b037c06fe0ae25a6fb7b0acef'],
    }
  }
};
  