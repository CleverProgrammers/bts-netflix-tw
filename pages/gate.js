import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../components/gate/Header'
import NFTDisplay from '../components/gate/NFTDisplay'
import style from '../styles/NFTGate.module.css'

const Gate = () => {
git  const hasNft = false
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
          <div className={style.logoContainer}>
            <Header />
          </div>
          <div className={style.mobileDisplaySection}>
            <NFTDisplay />
          </div>

          {/* <Hero /> */}
        </section>

        <section className={style.desktopDisplaySection}>
          {/* <NFTDisplay /> */}
        </section>
      </div>
    </div>
  )
}

export default Gate

const styles = {
  wrapper: 'flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200',
  container:
    'flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0',
  infoSection: 'lg:w-2/3 px-10',
  mobileDisplaySection: 'h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4',
  desktopDisplaySection: 'hidden lg:flex flex-1 lg:w-1/3',
}
