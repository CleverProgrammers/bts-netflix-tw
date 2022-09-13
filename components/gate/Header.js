import style from '../../styles/gate/Header.module.css'
import Logo from './Logo'

const Header = () => {
  return (
    <header className={style.wrapper}>
      <Logo />

      <div className={style.container}>
        <ul className={style.navBar}>
          <li className={style.navItem}>Products</li>
          <li className={style.navItem}>Marketplace</li>
          <li className={style.navItem}>Gallery</li>
        </ul>
      </div>
    </header>
  )
}
export default Header
