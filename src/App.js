import './App.css';
import Footer from './components/Footer';
import Allroutes from './components/Allroutes';
// import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
// import { Web3Modal } from '@web3modal/react'
// import { configureChains, createConfig, WagmiConfig } from 'wagmi'
// import { arbitrum, mainnet, polygon } from 'wagmi/chains'

// const chains = [arbitrum, mainnet, polygon]
// const projectId = 'YOUR_PROJECT_ID'

// const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors: w3mConnectors({ projectId, chains }),
//   publicClient
// })
// const ethereumClient = new EthereumClient(wagmiConfig, chains)
function App() {
  return (
    <div className="App">
 
   {/* <WagmiConfig config={wagmiConfig}> */}
   <Allroutes/>
   <Footer />
      {/* </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} /> */}
    </div>
  );
}

export default App;
