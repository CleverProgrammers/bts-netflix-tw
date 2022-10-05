import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Login from '../components/home/Login'
import Main from '../components/home/Main'
import { useAppContext } from '../context/context'

import style from '../styles/home/Home.module.css'

const Home = () => {
  const router = useRouter()
  const { userHasNft, userAddress } = useAppContext()

  useEffect(() => {
    if (userAddress && !userHasNft) {
      router.push('/gate')
    }
  }, [userAddress])

  return (
    <div className={style.appWrapper}>
      <Head>
        <title>Netflix | Clever Programmer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      {userAddress ? <>{userHasNft && <Main />}</> : <Login />}
    </div>
  )
}

export default Home
