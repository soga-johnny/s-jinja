"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.logos}>
        <Link href="/about">
        <Image 
        src={"/logo.svg"} width={60} height={53}
        alt="logo"
        className={styles.logo}
        />
        <h1>四條畷神社</h1>
        </Link>
      </div>

      <section className={styles.content1}>
        <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
      </section>
    </main>
  )
}
