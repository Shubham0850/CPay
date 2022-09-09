import React, { useEffect } from "react";
import { Alchemy } from "alchemy-sdk";

function Test() {
  useEffect(() => {
    // Using default settings - pass in a settings object to specify your API key and network
    const alchemy = new Alchemy();

    // Access the Alchemy NFT API
    alchemy.nft.getNftsForOwner("vitalik.eth").then(nft => console.log(nft));

  }, []);
  return <div>Test</div>;
}

export default Test;
