const {ethers} = require("hardhat");

// const { ethers } = require("ethers");
const {
  CONTRACT_ADDRESS = "0x198478f870d97d62d640368d111b979d7ca3c38f", // https://opensea.io/collection/8sian-main-collection (on Ethereum)
  INFURA_KEY,
  PRIVATE_KEY
} = process.env;

const ABI = [
  "function ownerOf(uint256 id) view returns (address)",
];

async function main() {
  // use HardHat config
  const [signer] = await ethers.getSigners();
  const { provider } = signer;

  // use plain Ethers.js
  // const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/" + INFURA_KEY);
  // const signer = new ethers.Wallet(PRIVATE_KEY, provider);

  // console.log("provider:", provider);

   // works with plain Ethers.js, but fails with "cannot estimate gas"... with HardHat
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider /* or signer */);

  // expectation:
  // id 0 should throw an error with code CALL_EXCEPTION and reason "ERC721: owner query for nonexistent token",
  // ids 1 to 8888 should return its owner's address
  const id = 0;
  const owner = await contract.ownerOf(id, { gasLimit: 100000 }); // giving gasLimit makes no difference
  console.log("Owner is:", owner);
}

main()
  .then(() => {
    console.log("Completed normally.");
    process.exit();
  })
  .catch((err) => {
    console.log("Error exit!");
    console.log(err);
    console.log("-----\nnested error:", {...err.error });
    process.exit(1);
  });
