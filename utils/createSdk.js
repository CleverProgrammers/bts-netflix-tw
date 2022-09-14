import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { ethers } from 'ethers'
export const createSdk = () => {
  // Get provider and signer
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const sdk = ThirdwebSDK.fromSigner(signer, 'goerli')
  return sdk
}
