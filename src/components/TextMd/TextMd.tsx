import React from "react";
// import styles from './styles.module.css'

interface TextMdProps{
  numero: number
  texto: string
}

const TextMd: React.FC<TextMdProps> = ({numero, texto}) =>{
  return (
    <div className='text-blue-950 inline-block'>
      <p className='text-3xl font-extrabold'>{numero}</p>
      <p className='text-2xl'>{texto}</p>
    </div>
  )
}


export default TextMd


// {styles.cardText}
// 
// 
// 
// 
// 
