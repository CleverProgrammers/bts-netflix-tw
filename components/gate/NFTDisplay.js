import Image from 'next/image'
import style from '../../styles/gate/NFTDisplay.module.css'

const NFTDisplay = () => {
  return (
    <div className={style.imageContainer}>
      <Image
        className={style.nftImage}
        src={require('../../assets/nft.gif')}
        layout='fill'
      />
    </div>
  )
}
export default NFTDisplay
