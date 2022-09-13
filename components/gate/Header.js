import style from '../../styles/gate/Header.module.css'
import Logo from './Logo'

const Header = () => {
  return (
    <header className={style.wrapper}>
      <Logo />

      <div className={style.container}>
        <div className={style.navBar}>
          <div className={style.navItem}>Products</div>
          <div className={style.navItem}>Marketplace</div>
          <div className={style.navItem}>Gallery</div>
        </div>
      </div>
    </header>
  )
}
export default Header
