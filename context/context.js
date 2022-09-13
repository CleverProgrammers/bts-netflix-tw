import { createContext, useContext, useState, useEffect } from 'react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { createSdk } from '../utils/createSdk'
import { useAccount, useEditionDrop } from '@thirdweb-dev/react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState('')
  const [sdk, setSdk] = useState(null)
  const [contract, setContract] = useState(null)
  const { account } = useAccount()
  useEffect(() => {
    if (account) {
      setUserAddress(account)
    }
    const { ethereum } = window
    if (ethereum) {
      const sdk = createSdk()
      setSdk(sdk)
      const contract = sdk.getEditionDrop(
        '0x489117F13Cf8ebaddA9625ceFAc1caD105c01D31',
      )
      setContract(contract)
    }
  }, [account])

  const mintNft = async () => {
    const claimConditions = [
      {
        startTime: Date.now(),
        price: 0.1,
      },
    ]
    await contract.claim(2, 1)
  }

  return (
    <AppContext.Provider value={{ mintNft }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
