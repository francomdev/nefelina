import React from 'react'
import Carrousel from './Carrousel'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'

const inter = Dancing_Script({ subsets: ['latin'] })

const Hero = () => {
  const headerClasses = `text-5xl font-bold ${inter.className}`
  return (
    <div className="hero bg-gradient-to-r from-base-300 to-base-100 h-[90vh]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Carrousel />
    <div className='-mt-40 mb-2'>
      <h1 className={headerClasses}>Hola!</h1>
      <p className="py-6">Encontrá todos nuestros objetos cerámicos en la tienda. Si te interesa aprender
      algo sobre el proceso de hacer cerámica podes reservar tu asesoría.</p>
      <Link href='/asesorias'><button className="btn btn-success mx-2 bg-[#A7BFA2] border-0 hover:bg-[#6c9664] text-base-100">Reservá tu Asesoría</button></Link>
      <Link href='https://nefelina.empretienda.com.ar/'><button className="btn btn-success mx-2 bg-[#A7BFA2] border-0 hover:bg-[#6c9664] text-base-100">Visitá la Tienda</button></Link>
    </div>
  </div>
</div>
  )
}

export default Hero