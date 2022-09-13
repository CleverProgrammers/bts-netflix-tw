import Link from 'next/link'
import style from '../../styles/gate/Hero.module.css'
import { useAppContext } from '../../context/context'

const Hero = () => {
  const nftData = []
  const { mintNft } = useAppContext()

  return (
    <div className={style.heroWrapper}>
      <h1 className={style.heroTitle}>Netflix</h1>
      <p className={style.heroParagraph}>
        A collection of 10,000 utility-enabled PFPs that feature a richly
        diverse and unique pool of rarity-powered traits. What's more, each
        Moonbird unlocks private club membership and additional benefits the
        longer you hold them. We call it nesting – because, obviously.
      </p>
      <div className={style.heroCta}>
        <Link href='/?mint=1'>
          <button onClick={mintNft} className={style.mintButton}>
            Mint Your NFT 0.1 ETH
          </button>
        </Link>
        {!!nftData.length && <p>{nftData.length} minted already</p>}
      </div>
    </div>
  )
}
export default Hero
