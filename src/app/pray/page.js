"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
import ContactBtn from "../../../components/ContactBtn";
// import Link from "next/link";

export default function Pray (){

    return (

        <div className={styles.container}>
        <Header />
        <TopVisual 
        visual="/visuals/pray.jpg"
        title="ご祈祷のご案内"
        description="忠孝両全の武将としてその御神徳は
        「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。
        また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
         現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。
        さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
        安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。"
        // description="忠孝両全の武将としてその御神徳は必勝祈願・武運長久・家内安全をはじめ、
        // 「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。
        // また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
        // 現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。
        // さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
        // 安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。"
        />

        <section className={styles.prayTop}>
            <div className={styles.prayEfficacy}>
            <p> 安産祈願 </p>
            <p> 健康長寿 </p>
            <p> 安産祈願 </p>
            <p> 健康長寿 </p>
            <p> 安産祈願 </p>
            <p> 健康長寿 </p>
            </div>
            <div className={styles.prayTopCaption}>
            <p>ダミーテキストダミーテキスト<br/>ダミーテキストダミーテキスト<br/>ダミーテキストダミーテキスト<br/></p>
            </div>
            
            <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>祈祷受付</p>
                        <p> 祈祷時刻</p>
                        <p>受付場所</p>
                        <p>料 　 金</p>

                </div>
                <div className={styles.itemBodyRight}>
                        <p>午前９時 - 午後４時</p>
                        <p>午前９時 - 午後４時半</p>
                        <p>社務所（受付窓口）</p>
                        <p>000円</p>

                </div>
            </div>
            <ContactBtn text="お申し込み・お問い合わせ" />
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
                <h2>神葬祭（神式の葬儀）</h2>
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