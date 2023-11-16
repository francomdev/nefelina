import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nefelina | Cerámica',
  description: 'Objetos cerámicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
      <Navbar/>
      <main className='bg-gradient-to-r from-base-300 to-base-100 w-[100vw] h-[100vh]'>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
