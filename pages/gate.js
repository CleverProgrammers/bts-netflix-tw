import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/gate/Header'
import Hero from '../components/gate/Hero'
import NFTDisplay from '../components/gate/NFTDisplay'
import style from '../styles/gate/Gate.module.css'

const Gate = () => {
  const hasNft = false
  const router = useRouter()

  useEffect(() => {
    if (hasNft) {
      router.push('/')
    }
  }, [hasNft])

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <section className={style.infoSection}>
          <Header />

          <div className={style.mobileDisplaySection}>
            <NFTDisplay />
          </div>
          <Hero />
        </section>

        <section className={style.desktopDisplaySection}>
          <NFTDisplay />
        </section>
      </div>
    </div>
  )
}

export default Gate
