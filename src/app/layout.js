"use client"

import './globals.css'
import { Shippori_Mincho } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { ParallaxProvider } from 'react-scroll-parallax';


const shippori = Shippori_Mincho({
   subsets: ['latin'],
  //  weight: ['400','500','600'],
   weight: ['600'],
   variable: "--font-shippori",
  })

// export const metadata = {
//   title: '四條畷神社',
//   description: '四條畷にある小楠公を主祭神にした神社',
// }



export default function RootLayout({ children }) {
  return (

    <html lang="ja">
        <ParallaxProvider>
    <AnimatePresence initial={false} mode={"wait"}>
      <body className={shippori.variable}>
        {children}
        </body>
        </AnimatePresence>
        </ParallaxProvider>
    </html>
  )
}
