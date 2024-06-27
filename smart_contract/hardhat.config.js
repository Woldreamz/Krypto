require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const ALCHEMY_API_KEY =
  "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv";
const ROPSTEN_PRIVATE_KEY =
  "2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3";

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv",
      accounts: [
        "2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3",
      ],
    },
  },
};
