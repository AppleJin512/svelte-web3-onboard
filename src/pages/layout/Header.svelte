<script>
    
  import Onboard from '@web3-onboard/core'
  import injectedModule from '@web3-onboard/injected-wallets'
  import torusModule from '@web3-onboard/torus'
  import walletConnectModule from '@web3-onboard/walletconnect'
  import fortmaticModule from '@web3-onboard/fortmatic'

  const injected = injectedModule()
  const walletConnect = walletConnectModule({
    bridge: 'YOUR_CUSTOM_BRIDGE_SERVER',
    qrcodeModalOptions: {
      mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
    }
  })
  const torus = torusModule()
  const fortmatic = fortmaticModule({ apiKey: 'pk_live_A683898B93FDA4D0' })

  const INFURA_ID = '3edf9a87396a4ce6b5b44b54d24e9041'
  const onboard = Onboard({
    wallets: [injected, walletConnect, torus, fortmatic],
    chains: [
      {
        id: '0x1',
        token: 'ETH',
        label: 'Ethereum',
        rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`
      },
      {
        id: '0x89',
        token: 'MATIC',
        label: 'Polygon',
        rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
      }
    ],
    appMetadata: {
      name: 'Routify Test App',
      icon: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path fill="red" stroke="green"
                d="M 10,30
                A 20,20 0,0,1 50,30
                A 20,20 0,0,1 90,30
                Q 90,60 50,90
                Q 10,60 10,30 z" />
            </svg>`,
      description: 'Wallet Connection using Onboard',
      recommendedInjectedWallets: [
        { name: 'MetaMask', url: 'https://metamask.io' },
        { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
      ]
    }
  });

  async function connectWallet() {
    const wallets = await onboard.connectWallet()
  }
</script>

<div class="lg:flex justify-between h-20 border-b border-blue-100">
    <span class="lg:m-auto lg:ml-8 w-40">
        <h2 class="drop-shadow-lg font-sans tracking-wide text-4xl text-cyan-500 font-semibold">Routify</h2>
    </span>     
    <span class="m-auto order-last mr-8 w-40">
      <button on:click={connectWallet} type="button" data-modal-toggle="crypto-modal" class="rounded-lg text-base text-white font-medium bg-cyan-600 hover:bg-cyan-700 hover:text-gray-200 shadow-lg shadow-blue-300/50 bg-cyan-600 focus:ring-4 focus:outline-none px-3.5 py-2.5 inline-flex items-center">
        <svg class="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
          Connect wallet
      </button>
    </span>  
</div>
  
