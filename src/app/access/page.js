"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./page.module.scss"
import Image from "next/image";
import SubtitleVisual from "../../../components/SubtitleVisual";
import Map from "../../../components/Map";
import { motion } from 'framer-motion'
import Link from "next/link";


export default async function About (){

    return (

    <div>
    <Header />
    <div>
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition = {{ duration: 1.5, ease: 'easeInOut' }} 
    >
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.visualCover}>
        <Map 
        className={styles.visual}/>
        </div>
        <div className={styles.address}>
            <p>〒 575-0021<br/>
            大阪府四條畷市南野2丁目18-1</p>
            <button>
            <Link href="https://goo.gl/maps/zF5gbcBW7D4K9PgM8">
                Google map で開く
            </Link>
            </button>
        </div>

        <div className={styles.rightContent}>
        <h2>交通アクセス</h2>
      </div>
      </div>

      <div className={styles.nameLogo}>
        <div className={styles.scroll}>
            <p>Scroll</p>
        </div>
        <h1>四條畷神社</h1>

    </div>
    </div>
    </motion.div>


    <Image 
        src={ "/backAccentPC.png" } width={1370} height={190}
        alt="backAccent"
        className={styles.backAccentPC}
        />
    <Image 
        src={ "/backAccentMobile.png" } width={1370} height={190}
        alt="backAccent"
        className={styles.backAccentMobile}
        />
    </div>

        <SubtitleVisual
        title="電車でお越しの方"
        description="サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストテキストサンプルテキストサンプルテキストサンプルテキスト"
        visual="/subtitles/subtitle1.jpg"
        />
        <SubtitleVisual
        title="お車でお越しの方"
        description="サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
        visual="/subtitles/subtitle1.jpg"
        />

    <Footer />
    </div>
    )
}