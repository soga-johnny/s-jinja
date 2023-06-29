"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./page.module.scss"
import Image from "next/image";
import SubtitleVisual from "../../../components/SubtitleVisual";
import Map from "../../../components/Map";

export default async function About (){

    return (

    <div>
    <Header />
    <div className={styles.container}>
      <div className={styles.content}>
        <Map 
        className={styles.visual}
        />

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