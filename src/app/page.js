"use client"

import Image from 'next/image'
import styles from './page.module.scss'
import Spline from '@splinetool/react-spline'
import Link from 'next/link'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.fixed}>
        <Link href="/about">
        <div className={styles.logoContainer}>
        <Image 
        src={"/logoWhite.png"} width={60} height={62}
        alt="logo"
        className={styles.logo}
        />
        <h1>四條畷神社</h1>
        </div>
        {/* <button className="splide__toggle" typeName="button">
      <span className="splide__toggle__play">Play</span>
      <span className="splide__toggle__pause">Pause</span>
    </button> */}

        </Link>
        {/* <p className={styles.scroll}>Scroll</p> */}
      </div>


<div className={styles.splineContainer}>
  <Spline  scene="https://prod.spline.design/qxsW1Ygu2AYS-Kgd/scene.splinecode">
  </Spline>
</div>


{/* 
      <Splide
      options={{
        rewind: true,
        // perPage: 3,
        // perMove: 1,
        autoplay: true,
        interval: 10,
        gap: 20,
        lazyLoad: "nearby",
        // padding: {
        //   right: 10,
        //   left: 10,
        // }
      }}
      aria-label="お気に入りの写真"
      className={styles.carousel}
    >
      <SplideSlide>

      <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
        <div className={styles.contents}>a</div>
        
      </SplideSlide>
      <SplideSlide>
      <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/YWkazDwHEvFiokqx/scene.splinecode"
          />
        </div>
                <div className={styles.contents}>b</div>

      </SplideSlide>
      <SplideSlide>
      <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/TftOjPLMWOnYM4wd/scene.splinecode"
          />
        </div>
                <div className={styles.contents}>c</div>

      </SplideSlide>
    </Splide>

 */}




      
{/* 
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
        <Link href="/access">
          <h3>お車でお越しの方</h3>
        </Link>
        <Link href="/access">
          <h3>電車でお越しの方</h3>
        </Link>
          </div>
        </div>
      </section>  */}
      
    </main>
  )
}
