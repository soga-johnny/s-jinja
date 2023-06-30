"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
// import Image from "next/image";
// import SubtitleVisual from "../../../components/SubtitleVisual";

export default function Events (){

    return (

        <div className={styles.container}>
        <Header />
        <TopVisual 
        visual="/visuals/events.jpg"
        title="年中行事"
        description=
        "神社では年間を通し様々なお祭りが行われております。毎月行われるものや、その軽重によって大祭、中祭、小祭、諸祭に分けられます。大祭には例祭や神社のご鎮座に関わるお祭りが、中祭は歳旦祭、紀元祭、天長祭、昭和祭、神嘗奉祝祭など皇室と関わりの深いお祭りがあげられます。当社の年中行事をご紹介申し上げます。"
        />
        {/* <SubtitleVisual
        title="月次祭"
        description="サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
        visual="/subtitles/subtitle2.jpg"
        /> */}
        
        <section className={styles.main}>

        <div className={styles.itemConteiner}>
            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>一月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>３日</p>
                        <p>５日</p>
                        <p>７日</p>
                        <p>第二月曜</p>
                        <p>１５日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>歳旦祭</p>
                        <p>元始祭</p>
                        <p>御妣会新年参拝</p>
                        <p>昭和天皇遥拝式</p>
                        <p>成人祭</p>
                        <p>月次祭 とんど神事</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>二月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>３日</p>
                        <p>１１日</p>
                        <p>　</p>
                        <p>１２日</p>
                        <p>１５日</p>
                        <p>１７日</p>
                        <p>２３日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>厄除大祭</p>
                        <p>紀元節ならびに</p>
                        <p>例大祭前日祭</p>
                        <p>例大祭</p>
                        <p>月次祭</p>
                        <p>祈年祭</p>
                        <p>天長節</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>
        </div>
        {/* -----------------------------------------------34 */}
        <div className={styles.itemConteiner}>
        <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>三月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>１５日</p>
                        <p>２１日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>歳旦祭</p>
                        <p>月次祭</p>
                        <p>春分祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>四月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>４日</p>
                        <p>５日</p>
                        <p>１５日</p>
                        <p>１７日</p>
                        <p>２５日</p>
                        <p>２９日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>春季大祭前日祭</p>
                        <p>春季大祭</p>
                        <p>月次祭</p>
                        <p>祈年祭</p>
                        <p>楠天神社月例祭</p>
                        <p>昭和祭</p>

                    </div>
                </div>
            </div>
        </div>
        {/* -----------------------------------------------56 */}
        <div className={styles.itemConteiner}>
        <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>五月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>３日</p>
                        <p>５日</p>
                        <p>１５日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>憲法記念祭</p>
                        <p>子供の日祭</p>
                        <p>月次祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>六月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>１５日</p>
                        <p>２５日</p>
                        <p>３０日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>月次祭</p>
                        <p>祈年祭</p>
                        <p>楠天神社月例祭</p>
                        <p>夏越大祓式</p>

                    </div>
                </div>
            </div>
        </div>
        {/* -----------------------------------------------78 */}
        <div className={styles.itemConteiner}>
        <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>七月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>１５日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>月次祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>八月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>１５日</p>
                        <p>　</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>月次祭ならびに</p>
                        <p>終戦記念祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>
        </div>
        {/* -----------------------------------------------910 */}
        <div className={styles.itemConteiner}>
        <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>九月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>１５日</p>
                        <p>第三月曜</p>
                        <p>　</p>
                        <p>２３日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>月次祭</p>
                        <p>敬老祭</p>
                        <p>先哲祭</p>
                        <p>秋分祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>十月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>４日</p>
                        <p>５日</p>
                        <p>１５日</p>
                        <p>１７日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>秋季大祭前日祭</p>
                        <p>秋季大祭</p>
                        <p>月次祭</p>
                        <p>神嘗祭奉祝祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>
        </div>
        {/* -----------------------------------------------1112 */}
        <div className={styles.itemConteiner}>
        <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>十一月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>３日</p>
                        <p>１５日</p>
                        <p>２３日</p>
                        <p>２５日</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>明治節</p>
                        <p>月次祭</p>
                        <p>新嘗祭</p>
                        <p>楠天神社月例祭</p>

                    </div>
                </div>
            </div>

            <div className={styles.item}>
                    <div className={styles.title}>
                        <h3>十二月</h3>
                    </div>
                <div className={styles.itemBody}>
                <div className={styles.itemBodyLeft}>
                        <p>１日</p>
                        <p>９日</p>
                        <p>１５日</p>
                        <p>２５日</p>
                        <p>３１日</p>
                        <p>　</p>

                    </div>
                    <div className={styles.itemBodyRight}>
                        <p>月例祭</p>
                        <p>地久祭</p>
                        <p>月次祭</p>
                        <p>楠天神社月例祭</p>
                        <p>師走大祓式</p>
                        <p>除夜祭</p>

                    </div>
                </div>
            </div>
        </div>

        </section>

        <Footer />
        </div>
    )
}