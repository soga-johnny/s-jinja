"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Sticky from "../../../components/Sticky";
import styles from "./page.module.scss";
import Image from "next/image";
import Map from "../../../components/Map";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default async function AccessComponent() {
  return (
    <ParallaxProvider>
      <AnimatePresence initial={true} mode={"wait"}>
        <div>
          <Header />
          <Sticky />

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}>
              <div className={styles.container}>
                <div className={styles.content}>
                  <div className={styles.visualCover}>
                    <Map className={styles.visual} />
                  </div>
                  <div className={styles.address}>
                    <p>
                      〒 575-0021
                      <br />
                      大阪府四條畷市南野2丁目18-1
                    </p>
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

                {/* <div className={styles.nameLogo}>
        <div className={styles.scroll}>
            <p>Scroll</p>
        </div>
        <h1>四條畷神社</h1>

    </div> */}
              </div>
            </motion.div>

            <Image
              src={"/backAccentPC.png"}
              width={1370}
              height={190}
              alt="backAccent"
              className={styles.backAccentPC}
            />
            {/* <Image 
        src={ "/backAccentMobile.png" } width={1370} height={190}
        alt="backAccent"
        className={styles.backAccentMobile}
        /> */}
          </div>

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>お車でお越しの方</h2>
            </div>
            {/* <Image src={"/news/newsImage1.jpg"}  width={500} height={700}
                alt="shonankoInstituition"
                className={styles.hireImage} /> */}
            <p>
              無料駐車場がございますが、台数に限りがございますことご容赦下さい。
              神社前の坂道では、対向車・歩行者などにご注意いただきますようお願いいたします。
              <br />
              <br />
              （各方面より）
              <br />
              第二京阪道路　寝屋川北IC 出口より約20分（6.0㎞）
              <br />
              第二京阪道路　寝屋川南IC出口より約15分（4.2㎞）
              <br />
              阪神高速13号東大阪線　水走 出口より約25分（7.5㎞）
            </p>

            <h2 className={styles.title2}>駐車場へのご案内</h2>

            <div className={styles.contents2}>
              <Image
                src={"/access/accessImage1.jpg"}
                width={500}
                height={335}
                alt="shijonawateAccess"
                className={styles.hireImage}
              />
              <p>右側の坂道をお上りください。</p>
            </div>
            <div className={styles.contents2}>
              <Image
                src={"/access/accessImage2.jpg"}
                width={500}
                height={335}
                alt="shijonawateAccess"
                className={styles.hireImage}
              />
              <p>突き当たりを右へ</p>
            </div>
            <div className={styles.contents2}>
              <Image
                src={"/access/accessImage3.jpg"}
                width={500}
                height={335}
                alt="shijonawateAccess"
                className={styles.hireImage}
              />
              <p>
                看板を左折し、石垣まで上がって頂きます。
                この坂道の勾配がきつくなっております。
                対向車には十分にお気をつけ頂きカーブを大きく回って頂きますと比較的スムーズにお上り頂けます。
              </p>
            </div>
            <div className={styles.contents2}>
              <Image
                src={"/access/accessImage4.jpg"}
                width={500}
                height={335}
                alt="shijonawateAccess"
                className={styles.hireImage}
              />
              <p>石垣手前を左折頂くとその先が駐車場です。</p>
            </div>
            <div className={styles.contents2}>
              <Image
                src={"/access/accessImage5.jpg"}
                width={500}
                height={335}
                alt="shijonawateAccess"
                className={styles.hireImage}
              />
              <p>二輪車等は鳥居脇にも駐輪頂けます。</p>
            </div>
          </section>

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>電車でお越しの方</h2>
            </div>
            {/* <Image src={"/news/newsImage1.jpg"}  width={500} height={700}
                alt="shonankoInstituition"
                className={styles.hireImage} /> */}
            <p>
              JR学研都市線「四条畷」駅下車
              <br />
              東へ徒歩　約20分（1.0㎞）
              <br />
            </p>
          </section>

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>バスでお越しの方</h2>
            </div>
            {/* <Image src={"/news/newsImage1.jpg"}  width={500} height={700}
                alt="shonankoInstituition"
                className={styles.hireImage} /> */}
            <p>
              近鉄バス「四條畷神社前」下車　東へ徒歩約13分（650ｍ）
              <br />
              京阪バス「四條畷神社」下車　東へ徒歩約13分（650ｍ）
            </p>
          </section>

          <Footer />
        </div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}
