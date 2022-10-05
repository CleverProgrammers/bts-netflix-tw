import { createContext, useContext, useState, useEffect } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import { createSdk } from '../utils/createSdk'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState('')
  const [contractInstance, setContractInstance] = useState(null)
  const [userHasNft, setUserHasNft] = useState(false)

  const address = useAddress()

  useEffect(() => {
    setUserAddress(address)
    const { ethereum } = window

    if (!ethereum) return
    ;(async () => {
      const sdk = createSdk()
      const contract = await sdk.getEditionDrop(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      )

      setContractInstance(contract)
    })()
  }, [address])

  useEffect(() => {
    checkBalance()
  }, [contractInstance])

  const claimNft = async () => {
    if (!(contractInstance && userAddress)) return

    await contractInstance.claim(0, 1)
  }

  const checkBalance = async () => {
    if (!(contractInstance && userAddress)) return

    setUserHasNft(
      Boolean((await contractInstance.balanceOf(userAddress, 0)) > 0),
    )
  }

  const cancelMembership = async () => {
    await contractInstance.burnTokens(0, 1)
  }

  return (
    <AppContext.Provider
      value={{ claimNft, userHasNft, userAddress, cancelMembership }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
