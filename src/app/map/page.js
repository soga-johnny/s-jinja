"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./page.module.scss"
import Image from "next/image";
import { motion } from 'framer-motion'


export default function Map (){

    return (

    <div>
        <Header />

    <div className={styles.content}>
    <motion.div className={styles.container}
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition = {{ delay: 0.7, duration: 1, ease: 'easeInOut' }} 
    >
        <Image 
        src="/maps/map.png"
        alt="map"
        width={409}
        height={650}
        className={styles.visual}
        />
        <div className={styles.description}>
            <div className={styles.descriptionItem}>
            <p>❸ 楠天神社</p>
            <p>❷ 御妣神社</p>
            <p>❶ 御本殿</p>
            </div>
            <div className={styles.descriptionItem}>
            <p>❻ 小楠公御墓所</p>
            <p>❺ 和田賢秀御墓所</p>
            <p>❹ 有源招魂社</p>
            </div>
        </div>
        <div className={styles.rightContent}>
        <h2>境内のご案内</h2>
    </div>
    </motion.div>
    {/* </div> */}

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
        
        <section className={styles.contents}>
            {/* ---------------------------------------1 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map1.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御本殿</h3>
                    </div>
                        <p>
                        現在の本殿は、明治23年創建当初のまま残っている。拝殿は鎮座90年を記念し、昭和56年に改築された。
                        本殿正面の鳥居は平成2年の御鎮座100年に際し、伊勢神宮から下賜されたもの。
                        </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map2.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御妣神社</h3>
                    </div>
                        <p>
                        楠正行公御母堂を祀る。大正14年10月5日御鎮座。
                        足利高氏より送られてきた、父・正成公の首級を前に、悲しみのあまり後を追って
                        自害しようとした正行公を奮起させ、正しく導き育て上げられた。これゆえ当社では、
                        安産祈願・初宮詣など、賢母の教えを慕い、子育てに関わる祈願が多い。
                        </p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------2 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map3.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>楠天神社</h3>
                    </div>
                        <p>
                        鎮座は昭和38年9月25日。学問の神と崇められる、菅原道真公を祀る。
                        </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map4.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>有源招魂社</h3>
                    </div>
                        <p>
                        飯盛山の東峰に有源山があり、かつて成人教学研修所があった。
                        内外古今の先哲先人の御霊が合祀され研修諸生の崇敬の的であった。
                        平成19年4月7日、新たに神殿を奉建し有源招魂社と称し当社境内に御鎮座。
                        </p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------3 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map5.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>小楠公(楠正行公)御墓所</h3>
                    </div>
                        <p>
                        参道より真っすぐ西へ約1㎞ほど進んだ突き当りにある。
                        正行公の御遺体は殉節後すぐにこの地に移された。当初、「南無権現」と書かれた
                        小碑の両脇に若楠を植えて墓所としたが、年を経て2本の楠が小碑を抱くように1株の大木へと
                        成長した。樹齢は600年程で、現在は大阪府の天然記念物に指定されている。
                        また、大久保利通公の筆になる、高さ6.5ｍになる大碑石も建立された。
                        </p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/maps/map6.jpg"
                width={350}
                height={350}
                alt="shijonawateJinjaMap"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>和田賢秀御墓所</h3>
                    </div>
                        <p>
                        第一鳥居の北約200ｍのところにある。
                        賢秀公は正行公の従兄弟であり勇将であった。
                        四條畷の戦いにて正行公自刃後敵陣に潜入していたが、背後より切りかかられ討たれた。
                        敵将の首に嚙みつき睨んで放さなかったことから、現代では、丈夫な歯が育つ歯神様として、
                        歯科医師会をはじめ多くの崇敬を集める。
                        </p>
                </div>
            </div>
            </div>

        </section>

        <Footer />
        </div>
    )
}