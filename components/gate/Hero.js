import Link from 'next/link'
import style from '../../styles/gate/Hero.module.css'
import { useAppContext } from '../../context/context'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Hero = () => {
  const nftData = [{}]
  const { mintNft, userOwned } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (userOwned) {
      router.push('/')
    }
  }, [userOwned])

  return (
    <main className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}>Netflix</h1>
        <p className={style.description}>
          Netflix is a subscription-based streaming service that allows our
          members to watch TV shows and movies without commercials on an
          internet-connected device. You can also download TV shows and movies
          to your iOS, Android, or Windows 10 device and watch without an
          internet connection.
        </p>
        <div className={style.ctaContainer}>
          <Link href='/?mint=1'>
            <button onClick={mintNft} className={style.cta}>
              Mint Your NFT 0.1 ETH
            </button>
          </Link>
          {!!nftData.length && <p>{nftData.length} minted already</p>}
        </div>
      </div>
    </main>
  )
}
export default Hero
