import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      chainRpc={{ [ChainId.Mainnet]: "https://mainnet.infura.io/v3" }}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp