const hre = require('hardhat')
const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')
const whitelist = require('./whitelist.js')

const _initBaseURI='ipfs://QmY8j6RaBekRn7T536urybkACQwcqbqnQyPTNCp6JdQgZ9/'

async function main() {
  const nftFactory = await hre.ethers.getContractFactory('TheRainbowTribe')
  const nftContract = await nftFactory.attach(
    '0x3a8Cf4D09A3E05026949d6f73b606C8107beb3D7'
  )

    // Calculate merkle root from the whitelist array
    const leafNodes = whitelist.map((addr) => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })
    const root = merkleTree.getRoot().toString('hex')
    console.log(' Merkleroot is: 0x' + root)


    
}
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
