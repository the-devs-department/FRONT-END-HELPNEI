import React from "react";
// import styles from './styles.module.css'
import TextMd from "../TextMd/TextMd";

interface CardMdProps{
  cardImage : string,
  cardNumberInfo: number,
  cardTextInfo: string
}


const CardMd: React.FC <CardMdProps> = ({cardImage, cardNumberInfo, cardTextInfo}) => {
  return(
    <div className='bg-gray-300 shadow-lg p-6 rounded-lg font-[koulen] max-h-[15rem] max-w-[23rem]'>
      <div className='flex items-center w-full border-t-4 border-b-4 border-t-blue-950 border-b-blue-950 p-2 gap-x-8'>
        <img src={cardImage} alt='' className='h-[6rem]'/>
        <TextMd numero={cardNumberInfo} texto={cardTextInfo}></TextMd>
      </div>
    </div>
  )
}


export default CardMd

// 
// {styles.Card}
// {styles.imageCd}
// 
// 
// 
// 
