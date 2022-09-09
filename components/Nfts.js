import React, { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

export default function Nfts() {
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    setLoading(true);

    const rpcEndpoint = "https://example.solana-mainnet.quiknode.pro/000000/";
    const solanaConnection = new Connection(rpcEndpoint);
    const walletToQuery = 'YOUR_PUBLIC_KEY'; 

    const accounts = await solanaConnection.getParsedProgramAccounts(
        TOKEN_PROGRAM_ID,   //SPL Token Program, new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
        {filters: filters}
    );

    // const settings = {
    //     apiKey: 'reQtsFausbKHWD1Ftepwblht7PEhdbAA', // Replace with your Alchemy API Key.
    //     network: Network.SOL_MAINNET, // Replace with your network.
    //   };
    // // Using default settings - pass in a settings object to specify your API key and network
    // const alchemy = new Alchemy(settings);

    // // Access the Alchemy NFT API
    // alchemy.nft
    //   .getNftsForOwner("0xDy2ovywTXzprzZUpxvurmJfHEyxzqRPVVFEjs2PAE7x5")
    //   .then((nft) => {
    //     setLoading(false);
    //     setNfts(nft?.ownedNfts);
    //     console.log(nft);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <p>
          {nfts.length === 0 ? (
            <p>No nft</p>
          ) : (
            nfts.map((nft) => {
              return <p>{nft.title}</p>;
            })
          )}
        </p>
      )}
    </div>
  );
}
