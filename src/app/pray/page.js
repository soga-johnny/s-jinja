"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
import ContactBtn from "../../../components/ContactBtn";
// import Link from "next/link";
import Image from "next/image";
import Sticky from "../../../components/Sticky";

export default function Pray (){

    return (

        <div className={styles.container}>
        <Header />
        <Sticky />
        <TopVisual 
        visual="/visuals/pray.jpg"
        title="御祈祷のご案内"
        description="神職が祈願者をお祓いし、祈願者の願い事を神様に奏上致します。
        神職は神様と祈願者のなかとりもちとして誠心を持って奉仕を致します。"
        // description="忠孝両全の武将としてその御神徳は必勝祈願・武運長久・家内安全をはじめ、
        // 「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。
        // また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
        // 現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。
        // さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
        // 安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。"
        />

        <section className={styles.prayTop}>
            <div className={styles.prayEfficacyBox}>
            <div className={styles.prayEfficacy}>
            <p> 商売繁昌 </p>
            <p> 厄除祈願 </p>
            <p> 安産祈願 </p>
            <p> 家内安全 </p>
            <p> 初宮詣 </p>
            </div>
            <div className={styles.prayEfficacy}>
            <p> 他 </p>
            <p> 自動車清祓 </p>
            <p> 七五三詣 </p>
            <p> 心願成就 </p>
            </div>
            </div>
            <div className={styles.prayTopCaption}>
            <p>忠孝両全の武将としてその御神徳は
        「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。<br/><br/>
        また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
         現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。<br/><br/>
        さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
        安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。</p>
            </div>
            
            <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>受付時間</p>
                        {/* <p> 祈祷時刻</p> */}
                        <p>受付場所</p>
                        <p>料 　 金</p>

                </div>
                <div className={styles.itemBodyRight}>
                        <p>午前９時半 - 午後４時</p>
                        {/* <p>午前９時 - 午後４時半</p> */}
                        <p>社務所（受付窓口）</p>
                        <p>10,000円</p>

                </div>
            </div>
        </section>
        <ContactBtn text="お申し込み・お問い合わせ" />

        <section className={styles.hire} >
            <div className={styles.title}>
                <h2>厄払い</h2>
            </div>
            <Image src={"/pray/prayImage1.jpg"}  width={300} height={450}
                alt="shonankoInstituition"
                className={styles.hireImage} />
            <p>ダミーテキストダミーテキストダミーテキスト
            ダミーテキストダミーテキストダミーテキストダミーテキスト
            ダミーテキストダミーテキストダミーテキストダミーテキスト
            ダミーテキストダミーテキスト
            </p>
        </section>

        
        <section className={styles.hire}>
            <div className={styles.title}>
                <h2>結婚式</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section>

        <section className={styles.hire}>
            <div className={styles.title}>
                <h2>正式参拝・団体参拝</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section>

        <section className={styles.hire}>
            <div className={styles.title}>
                <h2>神職が出張する神事</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section>

        <section className={styles.hire}>
            <div className={styles.title}>
                <h2>神葬祭(神式の葬儀)</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section>

        <section className={styles.bottomHire}>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
            <ContactBtn text="お申し込み・お問い合わせ" />
        </section>

        <Footer />
        </div>
    )
}