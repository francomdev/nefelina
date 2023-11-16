import React from 'react'
import Image from 'next/image'
import instagramImg from '@/public/images/instagram.png'
const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-gradient-to-r from-base-300 to-base-100 text-neutral-content" style={{position:'fixed', bottom: "0px"}}>
  
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
   
    <a href="https://www.instagram.com/nefelinaceramica/">
    <Image
      src={instagramImg}
      width={40}
      height={40}
      alt="instagram logo"
    />
    </a>
  </nav>
</footer>
  )
}

export default Footer