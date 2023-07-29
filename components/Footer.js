import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";
import ContactBtn from "./ContactBtn";

const Footer = () => (
  <footer className={styles.footer}>
    <ContactBtn
      text="各種お申し込み・お問い合わせはこちら"
      className={styles.btn}
    />
    <div className={styles.container}>
      <div className={styles.navi}>
        <ul>
          <Link href="/about">
            <h2>
              四條畷神社
              <br />
              について
            </h2>
          </Link>
          <li>
            <Link href="/about" className={styles.item}>
              <h3>御由緒</h3>
            </Link>
          </li>
          <li>
            <Link href="/map" className={styles.item}>
              <h3>境内のご案内</h3>
            </Link>
          </li>
          <li>
            <Link href="/events" className={styles.item}>
              <h3>年中行事</h3>
            </Link>
          </li>
          <li>
            <Link href="/hiking" className={styles.item}>
              <h3>
                飯盛山
                <br />
                願かけ登山
              </h3>
            </Link>
          </li>
        </ul>
        <ul>
          <Link href="/pray">
            <h2>
              ご祈祷
              <br />
              授与品
            </h2>
          </Link>
          <li>
            <Link href="/pray" className={styles.item}>
              <h3>御祈祷</h3>
            </Link>
          </li>
          <li>
            <Link href="/amulets" className={styles.item}>
              <h3>授与品</h3>
            </Link>
          </li>
        </ul>
        <ul>
          <Link href="/access">
            <h2 className={styles.titleAlign}>アクセス</h2>
          </Link>
          <li>
            <Link href="/access" className={styles.item}>
              <h3>
                電車で
                <br />
                お越しの方
              </h3>
            </Link>
          </li>
          <li>
            <Link href="/access" className={styles.item}>
              <h3>
                お車で
                <br />
                お越しの方
              </h3>
            </Link>
          </li>
        </ul>
        <ul>
          <Link href="/nango">
            <h2 className={styles.titleAlign}>南郷七社</h2>
          </Link>
          <li>
            <Link href="/nango" className={styles.item}>
              <h3>
                南郷七社の
                <br />
                ご紹介
              </h3>
            </Link>
          </li>
        </ul>
        <ul>
          <Link href="/news">
            <h2>
              ご案内
              <br />
              お問い合わせ
            </h2>
          </Link>
          <li>
            <Link href="/news" className={styles.item}>
              <h3>お知らせ</h3>
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.item}>
              <h3> お問い合わせ</h3>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.underBox}>
        <Link href="/" className={styles.logo}>
          <Image src={"/logo.svg"} width={60} height={53} alt="logo" />
          <h2>四條畷神社</h2>
        </Link>
        <p>
          〒 575-0021
          <br />
          大阪府四條畷市南野2丁目18-1
          <br />
          <br />
          (072) 876-0044
          <br />
          info@shijonawatejinja.or.jp
          <br />
          社務所・授与所 : 午前9時〜午後5時
          <br />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
