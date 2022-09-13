import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { AppProvider } from '../context/context'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider
      chainRpc={{ [ChainId.Goerli]: 'https://mainnet.infura.io/v3' }}
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThirdwebProvider>
  )
}

export default MyApp
