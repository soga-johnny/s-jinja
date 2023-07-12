"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss";
import ContactBtn from "../../../components/ContactBtn";
import { getPosts } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import Sticky from "../../../components/Sticky";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default async function NewsComponent() {
  const posts = await getPosts();

  return (
    <ParallaxProvider>
      <AnimatePresence initial={true} mode={"wait"}>
        <div className={styles.container}>
          <Header />
          <Sticky />
          <TopVisual
            visual="/visuals/news.jpg"
            title="ご案内・お問い合わせ"
            description="　"
          />

          <section className={styles.contact}>
            <h3>
              〒 575-0021
              <br />
              大阪府四條畷市南野2丁目18-1
              <br />
              電話： (072) 876-0044
            </h3>
            <ContactBtn text="お問い合わせ" />
          </section>

          <section className={styles.news} id="news">
            <div className={styles.title}>
              <h2>お知らせ・新着情報</h2>
            </div>

            <div className={styles.newsPost}>
              {posts.map((post) => (
                <Link href={`/posts/${post.slug}`} key={post._id}>
                  <div className={styles.newsPostTitle}>
                    <h3>{post.title}</h3>
                  </div>
                  <p>{post.publishedAt}</p>
                  {/* <p>{post.body}</p> */}
                  <div className={styles.newsMoreBtn}>
                    <p>詳しく見る</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* <section className={styles.hire} id="hire">
            <div className={styles.title}>
                <h2>常駐のご案内</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section> */}

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>
                常駐小楠公を偲ぶ会
                <br />
                会員募集のご案内
              </h2>
            </div>
            <Image
              src={"/news/newsImage1.jpg"}
              width={500}
              height={335}
              alt="shonankoInstituition"
              className={styles.hireImage}
            />
            <p>
              楠正行公の遺徳を尊び忠孝の精神を日本人の心の柱として
              毎月１２日の月命日に９時半より墓前にて詩吟唱歌等を合唱して供養
              奉る会である。
              <br />
              <br />
              活動
              <br />
              毎月１２日 午前９時３０分～
              <br />
              毎週水曜・土曜 午前７時３０分～
              <br />
              小楠公御墓所清掃奉仕（雨天中止）
              <br />
              <br />
              詳細については、四條畷神社社務所までお問い合わせ下さい。
            </p>
          </section>

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>
                神社ボランティア
                <br />
                募集のご案内
              </h2>
            </div>
            <p>
              ボランティアの対価は無償とする。又、月会費は徴収しない。
              地元又は地域として文化財を守ることを念頭に活動を行う。
              活動を通じて健康増進を計る。 活動を通じて友和を計る。
              <br />
              反社会的行動や友和を乱す行動には退会を勧告する。
              <br />
              <br />
              活動
              <br />
              定期活動：第一土曜日・第一土曜日
              <br />
              午前９時３０分～１１時３０分
              <br />
              (第2・第4土曜は、それぞれ第1・第3土曜の予備日とする)
              <br />
              <br />
              また、その他の曜日、時間はそれぞれの自由活動とする。
              <br />
              詳細については、四條畷神社社務所までお問い合わせ下さい。
            </p>
          </section>

          <section className={styles.hire}>
            <div className={styles.title}>
              <h2>
                四條畷
                <br />
                楠正行の会
              </h2>
            </div>
            <p>
              郷土、四條畷ゆかりの歴史上の人物、四條畷神社に祀られる楠正行に
              ついて学び、そして顕彰し、次代を担う子ども達等を通じ、後世に長く広く
              語り継ぐことを目的に、活動をしています。
              <br />
              <br />
              活動
              <br />
              例会(毎月第２火曜日 午後１時３０分～午後３時)
              <br />
              <Link
                href="http://nawate-kyobun.jp/masatsura.html"
                className={styles.externalLink}>
                四條畷市立教育文化センター
              </Link>
              <br />
              <br />
              詳細については、四條畷神社社務所までお問い合わせ下さい。
            </p>
          </section>

          <Footer />
        </div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}
