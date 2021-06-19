// scripts/index.js
async function main() {
    // Our code will go here
    // Set up an ethers contract, representing our deployed Box instance
    const address = "0xa5883d6348310b8c5511ee285bd9ffe209b6268a"
    const Box = await ethers.getContractFactory("Metalarm");
    const box = await Box.attach(address);

    // Call the mint() function of the deployed Metalarm contract
    await box.mint(0x7847dcD0eBd2Ab02163C625F4Ad44eCFb280E166, (55 * 10^18));

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });

