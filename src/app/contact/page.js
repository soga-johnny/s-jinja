"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./page.module.scss"
import Image from "next/image";
import { motion } from 'framer-motion'


export default function Contact (){

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        // const config = process.env.NEXT_PUBLIC_WEB3_FORM_ACCESS_KEY

        formData.append("access_key", "899fb137-f184-4902-b707-79d453ab5510");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
        }
    }


    return (

    <div>
    <div className={styles.box}>
    <Header />     
    <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition = {{ duration: 1, ease: 'easeInOut' }} 
    >
    <div className={styles.container}>
        
    <section className={styles.main}>
    <form onSubmit={handleSubmit}>
      <h1>お問い合わせ</h1>
      <div className={styles.nameBlock}>
        <div>
          <label htmlFor="frm-first">お名前</label>
          <input
            id="frm-first"
            type="text"
            name="name"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">ふりがな</label>
          <input
            id="frm-last"
            type="text"
            name="kana"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className={styles.emailBlock}>
        <label htmlFor="frm-email">メールアドレス</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className={styles.blockPhone}>
        <label htmlFor="frm-phone">電話番号</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className={styles.messageBlock}>
        <label htmlFor="frm-message">お問い合わせ内容</label>
        <textarea id="frm-message" rows="9" name="message"></textarea>
      </div>
      <div className={styles.btnBlock}>
        <button type="submit">送信</button>
      </div>
    </form>

    </section>
    </div>
    </motion.div>
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
    <Footer />
    </div>
    )
}