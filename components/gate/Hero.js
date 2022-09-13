import Link from 'next/link'
import style from '../../styles/gate/Hero.module.css'

const Hero = () => {
  const nftData = []

  return (
    <main className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}>Netflix</h1>
        <p className={style.description}>
          A collection of 10,000 utility-enabled PFPs that feature a richly
          diverse and unique pool of rarity-powered traits. What's more, each
          Moonbird unlocks private club membership and additional benefits the
          longer you hold them. We call it nesting – because, obviously.
        </p>
        <div className={style.ctaContainer}>
          <Link href='/?mint=1'>
            <button className={style.cta}>Mint Your NFT 0.1 ETH</button>
          </Link>
          {!!nftData.length && <p>{nftData.length} minted already</p>}
        </div>
      </div>
    </main>
  )
}
export default Hero
