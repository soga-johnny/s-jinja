"use client";

// import Image from "next/image";
import styles from "./page.module.scss";
import Spline from "@splinetool/react-spline";
// import Link from "next/link";
import Header from "../../components/Header";

export default function Component() {
  return (
    <main className={styles.main}>
      <Header />

      <div className={styles.loadingAnimation}>
        <div className={styles.logoContainer}>
          {/* <Image 
                   src={"/logoBlack.png"} width={120} height={122}
        alt="logo"
        className={styles.symbol}
        /> */}

          <iframe
            width="180"
            height="120"
            src="https://rive.app/s/hXFbUXt7cUu1uzFVPps4Mw/embed"
            className={styles.symbol}></iframe>
          <h1>四條畷神社</h1>
        </div>
      </div>

      <div className={styles.splineContainer}>
        <Spline scene="https://prod.spline.design/MwFNcIAdb5Yexg6m/scene.splinecode"></Spline>
      </div>
    </main>
  );
}



