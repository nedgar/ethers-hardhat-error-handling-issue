require("@nomiclabs/hardhat-ethers");

const { INFURA_KEY, PRIVATE_KEY } = process.env;

if (!INFURA_KEY) {
  throw new Error("INFURA_KEY env var is not set");
}

if (!PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY env var is not set");
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.12"
  },
  networks: {
    mainnet: {
      chainId: 1,
      url: "https://mainnet.infura.io/v3/" + INFURA_KEY,
      accounts: [PRIVATE_KEY],
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + INFURA_KEY,
      accounts: [PRIVATE_KEY],
    },
  },
};
