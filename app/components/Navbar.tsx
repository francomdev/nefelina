import React from 'react'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'

const inter = Dancing_Script({ subsets: ['latin'] })


const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-base-300 to-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href='/asesorias'>Asesorias</Link></li>
        <li><Link href='https://nefelina.empretienda.com.ar/'>Tienda</Link></li>
        <li><Link href='acerca-de'>Acerca de</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Link href='/' className="btn btn-ghost normal-case text-4xl">
    <img className='w-6' src='/images/nefelina_logo.png'/>
    <h1 className={inter.className}>Nefelina</h1>
    </Link>
  </div>
  <div className="navbar-end">
    
    
  </div>
</div>
  )
}

export default Navbar