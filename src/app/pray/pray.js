"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss";
// import ContactBtn from "../../../components/ContactBtn";
// import Link from "next/link";
import Image from "next/image";
import Sticky from "../../../components/Sticky";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default function PrayComponent() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Header />
        <Sticky />
        <AnimatePresence initial={true} mode={"wait"}>
          <TopVisual
            key="child"
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
        </AnimatePresence>

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
              <p> 交通安全 </p>
              <p> 七五三詣 </p>
              <p> 心願成就 </p>
            </div>
          </div>
          <div className={styles.prayTopCaption}>
            <p>
              忠孝両全の武将として
              「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。
              <br />
              <br />
              また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
              現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。
              <br />
              <br />
              {/* さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
        安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。 */}
            </p>
          </div>

          <div className={styles.itemBody}>
            <div className={styles.itemBodyLeft}>
              <p>受付時間</p>
              {/* <p> 祈祷時刻</p> */}
              <p>受付場所</p>
              <p>初 穂 料</p>
            </div>
            <div className={styles.itemBodyRight}>
              <p>午前9時から午後4時30分</p>
              {/* <p>午前９時 - 午後４時半</p> */}
              <p>社務所</p>
              <p>
                ・初　宮　詣 : 10,000円〜 <br />
                　(予約不要)
              </p>
              <p>
                ・個人諸祈祷 :　5,000円〜 <br />
                {/* 　(予約不要・但し、11月以外の七五三のみ要確認) */}
                　(予約不要)
              </p>
              <p>
                ・団体・企業 : 10,000円〜 <br />
                　(要予約)
              </p>
              <p>
                神前結婚式、神職が出張する神事、
                <br />
                神葬祭（神式の葬儀）についてはお問い合わせ下さい。
              </p>
            </div>
          </div>
          <Image
            src={"/pray/prayImage2024-2.png"}
            width={600}
            height={1030}
            alt="shonankoInstituition"
            className={styles.hireImage}
          />
        </section>
        {/* <ContactBtn text="お申し込み・お問い合わせ" /> */}

        {/* <section className={styles.hire} >
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
        </section> */}

        {/*         
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
        </section> */}

        <Footer />
      </div>
    </ParallaxProvider>
  );
}
