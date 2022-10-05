import { createContext, useContext, useState, useEffect } from 'react'
import { useAddress, useEditionDrop } from '@thirdweb-dev/react'

let ethereum
if (typeof window !== 'undefined') {
  ethereum = window.ethereum
}

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState('')
  const [contractInstance, setContractInstance] = useState(null)
  const [userHasNft, setUserHasNft] = useState(false)

  const address = useAddress()
  const contract = useEditionDrop(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)

  useEffect(() => {
    setUserAddress(address)

    if (!ethereum || !contract) return

    setContractInstance(contract)
  }, [address, contract])

  useEffect(() => {
    checkBalance()
  }, [contractInstance])

  const claimNft = async () => {
    if (!(contractInstance && userAddress)) return

    await contractInstance.claimTo(userAddress, 0, 1)
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
