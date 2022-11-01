const hre = require('hardhat')

const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {

  // Deploy the contract
  const theRainbowTribe = await hre.ethers.getContractFactory('TheRainbowTribe')
  const TheRainbowTribe = await theRainbowTribe.deploy(
    _initBaseURI)
  await TheRainbowTribe.deployed()

  console.log('TheRainbowTribe deployed to:', TheRainbowTribe.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
