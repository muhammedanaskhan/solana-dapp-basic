import { useState } from 'react'
import './App.css'
import { WalletConnectButton, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Airdrop from './components/Airdrop'

function App() {
  return (
    <>
      <WalletMultiButton />
      <WalletDisconnectButton />
      <Airdrop />
    </>
  )
}

export default App
