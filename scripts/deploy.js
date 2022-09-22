
const hre = require("hardhat");

async function main() {

  const B3llionxNFT = await hre.ethers.getContractFactory("B3llionxNFT");
  const b3llionxNFT = await B3llionxNFT.deploy();

  await b3llionxNFT.deployed();

  console.log(
    "B3llionxNFT deployed to:", b3llionxNFT.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
