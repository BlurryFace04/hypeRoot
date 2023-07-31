/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");

module.exports = {
    solidity: "0.8.18",
    networks: {
      hardhat: {
        chainId: 1337
      }
    }
};
