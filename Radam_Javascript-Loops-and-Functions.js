let nftCollection = [];

function mintNFT(name, rarity, owner) {

    if (!name || !rarity || !owner) {
        console.log("Invalid input: All fields (name, rarity, owner) are required.");
        return;
    }

    const nft = {
        name: name,
        rarity: rarity,
        owner: owner
    };
    nftCollection.push(nft);
    console.log(`Minted NFT: ${name}`);
}

function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Rarity: ${nft.rarity}`);
        console.log(`  Owner: ${nft.owner}`);
        console.log('------------------------');
    });
}

function getTotalSupply() {
    console.log(`Total NFTs Minted: ${nftCollection.length}`);
    return nftCollection.length;
}

mintNFT("Moi", "Gabe", "Lu");
mintNFT("Harm", "Monie", "Lin");
mintNFT("Mango", "Lyssie", "Cobra");

listNFTs();

getTotalSupply();
