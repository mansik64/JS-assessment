//Program to mint nfts.
//JavaScript code that will create an object that represents your NFT and that will hold its metadata. 
// create a variable to hold your NFT's
const nft = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolor,hairstyle,facialexp) {
    const NFT={
        "NAME":name,
        "EYECOLOR":eyecolor,
        "HAIRSTYLE":hairstyle,
        "FACIALEXPRESSION":facialexp
    }
nft.push(NFT);
console.log("Minted: "+ name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for(let i=0; i<nft.length; i++){
    console.log("\nID:\t\t\t" +(i+1));
    console.log("Name:\t\t"+ nft[i].NAME);
    console.log("EyeColor:\t" + nft[i].EYECOLOR);
    console.log("HairStyle:\t" + nft[i].HAIRSTYLE);
    console.log("FacialExp:\t" + nft[i].FACIALEXPRESSION);}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total No. of NFTS: "+ nft.length);
}

// call your functions below this line
mintNFT("Nakul","black","short hair","smile");
mintNFT("Roshni","blue","bun","sad");
mintNFT("Anmol","brown","short hair","smile");
mintNFT("Surbhi","black","braid","neutral");
listNFTs();
getTotalSupply();
