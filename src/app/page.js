"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.header}>
        <Link href="/about">
        <div className={styles.logoContainer}>
        <Image 
        src={"/logoBlack.png"} width={90} height={91}
        alt="logo"
        className={styles.headerLogo}
        />
        {/* <h1 className={styles.logoName}>四條畷神社</h1> */}
        </div>

        </Link>
      </div>
      
  <div className={styles.loadingAnimation}>
  <div className={styles.logoContainer}>
  {/* <Image 
        src={"/logoBlack.png"} width={120} height={122}
        alt="logo"
        className={styles.symbol}
        /> */}
        <iframe  width="180" height="120" 
        src="https://rive.app/s/hXFbUXt7cUu1uzFVPps4Mw/embed" 
        // allowfullscreen
        className={styles.symbol} 
        >
        </iframe>
        <h1>四條畷神社</h1>
        </div>
  </div>

<div className={styles.splineContainer}>
  <Spline  scene="https://prod.spline.design/ga92tzKOHqSaXc1Q/scene.splinecode">
  </Spline>
</div>

    </main>
  )
}
