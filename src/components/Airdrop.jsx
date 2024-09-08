import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useEffect } from 'react'

const Airdrop = () => {

    const [amount, setAmount] = React.useState("")
    const [myBalance, setMyBalance] = React.useState(0)

    const wallet = useWallet()
    const { connection } = useConnection()

    const sendAirDropToUser = async () => {
        connection.requestAirdrop(wallet.publicKey, Number(amount) * 1000000000)
    }

    const fetchBalance = async () => {
        const balance = await connection.getBalance(wallet.publicKey) / 1000000000
        setMyBalance(balance)
    }

    useEffect(() => {
        if (wallet.connected) {
            fetchBalance()
        }
    }, [wallet.connected])

    return (
        <div>
            {wallet.connected ? <h1>Your public key : {wallet.publicKey.toString()}</h1> : <h1> Wallet Not Connected</h1>}
            {wallet.connected && <h1>Your Balance : {myBalance}</h1>}
            <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" className="" placeholder='Enter amount...' />
            <button onClick={sendAirDropToUser} className="">Send Airdrop</button>
        </div>
    )
}

export default Airdrop