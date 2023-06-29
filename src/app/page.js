"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.fixed}>
        <Link href="/about">
        <div className={styles.logoContainer}>
        <Image 
        src={"/logoWhite.png"} width={80} height={70}
        alt="logo"
        className={styles.logo}
        />
        <h1>四條畷神社</h1>
        </div>
        </Link>
        <p className={styles.scroll}>Scroll</p>
      </div>

      <section className={styles.content}>
        <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
        <div className={styles.body}>
        <Link href="/about">
          <div className={styles.title}>
            <h2>四條畷神社について</h2>
          </div>
        </Link>
          <div className={styles.subtitle}>
        <Link href="/events">
          <h3>年中行事</h3>
        </Link>
        <Link href="/map">
          <h3>境内案内</h3>
        </Link>
        <Link href="/about">
          <h3>御由緒</h3>
        </Link>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
        <div className={styles.body}>
        <Link href="/about">
          <div className={styles.title}>
            <h2>ご祈祷・授与品</h2>
          </div>
        </Link>
          <div className={styles.subtitle}>
        <Link href="/nango">
          <h3>南郷七社</h3>
        </Link>
        <Link href="/amulets">
          <h3>授与品</h3>
        </Link>
        <Link href="/pray">
          <h3>ご祈祷</h3>
        </Link>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
        <div className={styles.body}>
        <Link href="/about">
          <div className={styles.title}>
            <h2>アクセス・お問い合わせ</h2>
          </div>
        </Link>
          <div className={styles.subtitle}>
        <Link href="/news">
          <h3>各種お申し込み・お問い合わせ</h3>
        </Link>
        <Link href="/map">
          <h3>お車でお越しの方</h3>
        </Link>
        <Link href="/map">
          <h3>電車でお越しの方</h3>
        </Link>
          </div>
        </div>
      </section>
      
    </main>
  )
}
