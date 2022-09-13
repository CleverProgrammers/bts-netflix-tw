import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import style from '../styles/Header.module.css'
import logo from '../assets/logo.png'
import avatar from '../assets/avatar.png'

const Header = () => {
  const [showHeaderBg, setHeaderBg] = useState(false)

  const connectWithMetamask = useMetamask()
  const address = useAddress()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
      } else {
        setHeaderBg(false)
      }
    })
    return () => {
      window.removeEventListener('scroll', null)
    }
  }, [])

  return (
    <div
      className={showHeaderBg ? `${style.header} ${style.black}` : style.header}
    >
      <Image
        className={style.nav__logo}
        src={logo}
        width={100}
        height={30}
        alt='Netflix Logo'
      />
      {address ? (
        <Image
          className={style.nav__avatar}
          width={50}
          height={50}
          src={avatar}
          alt={address}
        />
      ) : (
        <button className={style.loginButton} onClick={connectWithMetamask}>
          Connect MetaMask
        </button>
      )}
    </div>
  )
}

export default Header
