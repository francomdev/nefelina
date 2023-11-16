'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
const Carrousel = () => {
  const imgNames = ["/images/IMG_8400.png", "/images/IMG_8502.png", "/images/IMG_8527.png"]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
      const intervalId = setInterval(() => {
          if(currentIndex === imgNames.length - 1) {
              setCurrentIndex(0);
          } 
          else {
               setCurrentIndex(currentIndex + 1);
          }
      }, 5000)
      
      return () => clearInterval(intervalId);
  })

  return (
    <div className='w-1/3 shadow-2xl hidden lg:block'>
      <Image src={imgNames[currentIndex]} alt="objetos cerámicos" width={400} height={300} className='rounded-lg'/>
    </div>
  )
}






export default Carrousel