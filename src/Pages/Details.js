import React, { useEffect, useState } from "react";
import { ShyftSdk, Network } from '@shyft-to/js';

const shyft = new ShyftSdk({ apiKey: "YOUR_API_KEY", network: Network.Testnet });

function Details({ balance }) {
  return (
    <div className="w-screen h-screen bg-stone-300">
      <div className="absolute top-16 left-12">
        <h1 className="text-[#193447] font-bold text-4xl">Total recaudado</h1>
        {/* <h1 className="text-[#427da8] font-bold text-7xl">{balance}</h1> */}
        <h1 className="text-[#427da8] font-bold text-7xl">19,500</h1>
        
      </div>
    </div>
  );
}

function App() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      const balance = await shyft.wallet.getBalance({ wallet: 'YOUR_WALLET_ADDRESS' });
      setBalance(balance);
    }

    fetchBalance();
  }, []);

  return <Details balance={balance} />;
}

export default App;
