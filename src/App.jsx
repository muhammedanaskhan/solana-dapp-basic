import { useState } from 'react'
import './App.css'
import { WalletConnectButton, WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Airdrop from './components/Airdrop'
import SignMessage from './components/SignMessage'

function App() {
  return (
    <>
      <WalletMultiButton />
      <WalletDisconnectButton />
      <Airdrop />
      <SignMessage />
    </>
  )
}

export default App
