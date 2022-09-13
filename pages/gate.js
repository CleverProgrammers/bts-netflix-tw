import { useRouter } from 'next/router'
import { useEffect } from 'react'
import style from '../styles/NFTGate.module.css'

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
      <div className={style.mintCard}>bruh</div>
    </div>
  )
}

export default Gate
