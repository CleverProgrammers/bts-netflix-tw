import { createContext, useContext, useState, useEffect } from 'react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { createSdk } from '../utils/createSdk'
import { useAddress, useEditionDrop } from '@thirdweb-dev/react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState('')
  const [sdk, setSdk] = useState(null)
  const [contract, setContract] = useState(null)
  const address = useAddress()
  useEffect(() => {
    setUserAddress(address)

    const { ethereum } = window
    if (ethereum) {
      const sdk = createSdk()
      setSdk(sdk)
      const contract = sdk.getEditionDrop(
        '0x489117F13Cf8ebaddA9625ceFAc1caD105c01D31',
      )
      setContract(contract)
    }
    console.log(userAddress)
  }, [address])

  useEffect(() => {
    checkBalance()
  }, [contract])

  const mintNft = async () => {
    await contract.claim(2, 1)
  }

  const checkBalance = async () => {
    if (contract) {
      const balance = await contract.balanceOf(userAddress, 2)
      console.log(balance.toString())

      // if(balance.toString() === '1') redirect to home page
    }
  }

  return (
    <AppContext.Provider value={{ mintNft }}>{children}</AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
