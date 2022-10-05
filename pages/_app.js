import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { AppProvider } from '../context/context'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ThirdwebProvider>
  )

  // return (
  //   <AppProvider>
  //     <Component {...pageProps} />
  //   </AppProvider>
  // )
}

export default MyApp
