import Image from 'next/image'
import style from '../../styles/gate/Logo.module.css'

const Logo = () => {
  return (
    <div className={style.wrapper}>
      <Image
        className={style.logoImage}
        src='/logo.png'
        layout='fill'
        alt='Netflix'
      />
    </div>
  )
}

export default Logo
