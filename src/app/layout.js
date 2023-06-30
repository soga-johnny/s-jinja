"use client"

import './globals.css'
import { Shippori_Mincho } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'

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
      <body className={shippori.variable}>
        <AnimatePresence initial={false} mode="wait">
        {children}
        </AnimatePresence>
        </body>
    </html>
  )
}
