import Image from 'next/image'
import style from '../../styles/gate/Header.module.css'

const Logo = () => {
  return (
    <div className={style.logoWrapper}>
      <Image src='/logo.png' layout='fill' alt='Netflix' />
    </div>
  )
}

export default Logo
