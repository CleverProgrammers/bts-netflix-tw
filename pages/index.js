import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAddress } from '@thirdweb-dev/react'
import style from '../styles/home/Home.module.css'
import Login from '../components/home/Login'
import Main from '../components/home/Main'

const Home = () => {
  const hasNft = false
  const router = useRouter()
  const userWalletAddress = useAddress()

  useEffect(() => {
    if (!userWalletAddress) return

    if (!hasNft) {
      router.push('/gate')
    }
  }, [userWalletAddress])

  return (
    <div className={style.appWrapper}>
      <Head>
        <title>Netflix | Clever Programmer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {userWalletAddress ? <>{hasNft && <Main />}</> : <Login />}
    </div>
  )
}

export default Home
