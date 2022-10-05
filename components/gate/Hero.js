import Head from 'next/head'
import Link from 'next/link'
import style from '../../styles/gate/Hero.module.css'
import { useAppContext } from '../../context/context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()
  const { claimNft, userHasNft } = useAppContext()

  useEffect(() => {
    if (userHasNft) {
      router.push('/')
    }
  }, [userHasNft])

  return (
    <>
      <Head>
        <title>
          You Don&apos;t Have Access to Netflix! | Clever Programmer
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <main className={style.wrapper}>
        <div className={style.container}>
          <h1 className={style.title}>Netflix</h1>
          <p className={style.description}>
            Netflix is a subscription-based streaming service that allows our
            members to watch TV shows and movies without commercials on an
            internet-connected device. You can also download TV shows and movies
            to your iOS or Mac device and watch without an internet connection.
          </p>

          <div className={style.ctaContainer}>
            <Link href='/?mint=1'>
              <button onClick={claimNft} className={style.cta}>
                Claim Your NFT for ONLY 0.1 ETH
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
export default Hero
