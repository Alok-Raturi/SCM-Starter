require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/WWejNSlVRE1FNZY-btzqa3RkTDkT787s",
      accounts: [
        "dbbc20a226fc60e80c203331ef1a960cdb4aad60f6608df10535e79716a75abe",
      ],
    },
  },
};
