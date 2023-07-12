"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss";
import Image from "next/image";
import Sticky from "../../../components/Sticky";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default function NangoComponent() {
  return (
    <ParallaxProvider>
      <AnimatePresence initial={true} mode={"wait"}>
        <div className={styles.container}>
          <Header />
          <Sticky />
          <TopVisual
            visual="/visuals/nango.jpg"
            title="南郷七社"
            description="当社と御縁の深い、大東市に鎮座する七社をご紹介申し上げます。"
          />

          <section className={styles.contents}>
            {/* ---------------------------------------1 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango1.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>北野神社（氷野）</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市大東583</p>
                    <p>菅原道真公</p>
                    <p>
                      古墳時代の遺跡としても有名であるが、由緒については不詳。
                      明治5年村社に列せられた。社殿は昭和46年に新築されたが、
                      それ以前は安土桃山時代の建築様式を残しており、現在もその一部が
                      保存されている。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------2 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango2.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>菅原神社（御領）</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市御領3-489</p>
                    <p>菅原道真公</p>
                    <p>
                      由緒は不詳であるが、御領地域の開拓時氏神として祀ったものと思われる。
                      明治5年に村社に列せられる。明治12年本殿を改築、鳥居は安永７（1778）年の
                      銘が記されている。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------3 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango3.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>大神社（新田山王宮）</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市新田東本町884</p>
                    <p>大山咋神</p>
                    <p>
                      大東市には享保７（1722）年に江州（滋賀県）日吉神社より
                      山王権現を勧請し、山王宮としたと新田村明細帳に記載がある。
                      明治5年に村社に列せられる。天保5（1834）年社殿を改築。昭和5年、
                      本殿覆屋・拝殿を新築。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------4 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango4.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>大神社（太子田）</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市太子田2-130</p>
                    <p>天照皇大神</p>
                    <p>
                      由緒は不詳であるが、文久3（1863）年に奉納された灯籠一対があり、
                      それ以前と考えられる。明治5年村社に列せられる。
                      200余坪に本殿・拝殿があり、西隣には聖徳太子堂がある。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------5 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango5.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>諸福天満宮</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市諸福1-7-13</p>
                    <p>菅原道真公</p>
                    <p>
                      御由緒　寛永20（1643）年、当地に勧請され社殿が建立されたとの記録が木札に記されている。
                      明治5年に村社に列せられる。元は産土神社と称せられたが、同年3月菅原神社と改称。
                      以降100余年の間、同社名で呼ばれていたが、平成の修復の折、菅原神社と記された額の板を取ると、
                      「天満宮」の文字が現れる。また宝暦2年調製の菅原道真公画像の掛け軸箱書きにも「天満宮」の銘があることから、
                      平成11年1月1日をもって、「諸福天満宮」と改称した。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------6 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango6.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>龗神社</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市御領1-253</p>
                    <p>龗神（おかみのかみ）</p>
                    <p>
                      龗とは、「雨」と「口」と「龍」が合わさり一字となる難しい文字であるが、
                      いづれも農耕に係わることが分る。
                      明治5年に村社に列せられる。現在の社殿は昭和46年に新築された。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------------------------------------7 */}
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/nango/nango7.jpg"
                  width={350}
                  height={350}
                  alt="nangoImage"
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>
                  <h3>北野神社（赤井）</h3>
                </div>
                <div className={styles.descriptionContainer}>
                  <div className={styles.descriptionTitle}>
                    <p>鎮座地</p>
                    <p>御神祭</p>
                    <p>御由緒</p>
                  </div>
                  <div className={styles.description}>
                    <p>大東市赤井2-13</p>
                    <p>菅原道真公</p>
                    <p>
                      不詳ながら明治以降、北野神社（氷野）から
                      分祀したと言い伝えが残る。平成10年11月26日新社殿に遷座。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------- */}
          </section>

          <Footer />
        </div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}
