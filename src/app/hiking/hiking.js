"use client";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import Sticky from "../../../components/Sticky";
import styles from "./page.module.scss";
import Image from "next/image";
// import SubtitleVisual from "../../../components/SubtitleVisual";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default function HikingComponent() {
  return (
    <ParallaxProvider>
      <AnimatePresence initial={true} mode={"wait"}>
        <div className={styles.container}>
          <Header />
          <Sticky />
          <TopVisual
            visual="/visuals/hiking.jpg"
            title="飯盛山願かけ登山"
            description="　"
          />

          <section className={styles.contact}>
            {/* <h3>
              令和５年
              <br />
              ８月１１日(金) 山の日より開始
            </h3> */}
            <p>
              8月11日は午前9時より、本殿にて願かけ登山始奉告祭斎行<br/>
              願かけ登山に参加される方はご参列頂けます。
            </p>
          </section>

          <section className={styles.main}>
            <div className={styles.item}>
              <div className={styles.caption}>
                <p>
                  飯盛山は、生駒山地の北端に位置し、四條畷市・大東市にまたがる高さ314メートルの山です。
                  当社は、その飯盛山の山麓に鎮座しております。
                  <br />
                  <br />
                  急峻な場面が少しありますが、初心者向けの山として幅広い方々より親しまれております。
                  国史跡に指定・続日本100名城に選定された飯盛城跡があり、山頂からは遠く明石海峡大橋や六甲山地、
                  淡路島なども見渡すことができます。
                  <br />
                  <br />
                  四條畷の戦いの戦場でもあった、この飯盛山の山頂には、当社主祭神 楠正行公の銅像があり、
                  大正13年に神社境内に建てられた昭和天皇御成婚記念碑には、四条畷中学校長 牧田宗太郎氏が
                  「飯盛山は楠氏の忠誠を千古に物語る天然の記念塔なり・・・」と記されるなど、四條畷神社と御縁深い山であります。
                </p>
              </div>
              <div className={styles.imageCover}>
                <Image
                  src="/hiking/hiking1.jpg"
                  width={400}
                  height={400}
                  alt="shijonawateJinja"
                />
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.imageCover}>
                <Image
                  src="/hiking/hiking2.jpg"
                  width={250}
                  height={500}
                  alt="shonanko"
                />
              </div>
              <div className={styles.caption}>
                <p>
                  願かけ登山では、授与所にて「願い札」(初穂料500円)をお受けいただき、御神前にて「願い札」に
                  願事を書き記した後、御参拝頂き、願いを込めて登山を行い、山頂におられる楠正行公銅像前に
                  しつらえた願い札奉掲所に「願い札」を奉掲して頂くというものです。
                  <br />
                  <br />
                  心願成就のご利益と称えられる大神様の御神徳を受けられまして、
                  皆様の願事が成就致しますこと御祈念申し上げます。
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </AnimatePresence>
    </ParallaxProvider>
  );
}
