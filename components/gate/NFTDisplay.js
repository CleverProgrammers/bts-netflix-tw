import Image from 'next/image'
import style from '../../styles/gate/NFTDisplay.module.css'

const NFTDisplay = () => {
  const nftData = [
    {
      image: `https://avatars.dicebear.com/api/identicon/0.svg`,
    },
    {
      image: `https://avatars.dicebear.com/api/identicon/1.svg`,
    },
    {
      image: `https://avatars.dicebear.com/api/identicon/2.svg`,
    },
    {
      image: `https://avatars.dicebear.com/api/identicon/3.svg`,
    },
  ]

  return (
    <div className={style.wrapper}>
      {nftData.map((nft, index) => (
        <div key={index} className={style.imageContainer}>
          <Image className={style.nftImage} src={nft.image} layout='fill' />
        </div>
      ))}
    </div>
  )
}
export default NFTDisplay
