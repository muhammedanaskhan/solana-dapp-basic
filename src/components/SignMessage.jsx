import React from 'react'
import { ed25519 } from '@noble/curves/ed25519';
import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';

const SignMessage = () => {

    const { publicKey, signMessage } = useWallet();

    const [enteredMessage, setEnteredMessage] = React.useState("")

    const handleSignMessage = async () => {

        if (!publicKey) throw new Error('Wallet not connected!');
        if (!signMessage) throw new Error('Wallet does not support message signing!');

        const encodedMessage = new TextEncoder().encode(enteredMessage);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
            alert('Invalid signature');
        }
        alert('Signature: ' + bs58.encode(signature));
        console.log('Signature: ' + bs58.encode(signature));
    }
    return (
        <div>
            <p className="">------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h1 className="">Sign a message</h1>

            <input placeholder='enter a message to sign...' value={enteredMessage} onChange={(e) => setEnteredMessage(e.target.value)} type="text" className="" />
            <button onClick={handleSignMessage}>Sign</button>
        </div>
    )
}

export default SignMessage