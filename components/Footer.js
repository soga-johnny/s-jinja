import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss"



const Footer = () => (
<footer className={styles.footer}>
    <div className={styles.container}>
        <div className={styles.navi}>
            <ul>
                <h2>四條畷神社<br/>について</h2>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>御由緒</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>境内のご案内</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>年中行事</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>飯盛山<br/>願かけ登山</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <h2>ご祈祷<br/>授与品</h2>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>ご祈祷</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>授与品</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <h2 className={styles.titleAlign}>アクセス</h2>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>電車で<br/>お越しの方</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>お車で<br/>お越しの方</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <h2 className={styles.titleAlign}>南郷七社</h2>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>南郷七社の<br/>ご紹介</h3>
                    </Link>
                </li>
            </ul>
            <ul>
                <h2>ご案内<br/>お問い合わせ</h2>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>お知らせ</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3>常駐のご案内</h3>
                    </Link>
                </li>
                <li>
                    <Link href="/"
                    className={styles.item}>
                        <h3> お問い合わせ</h3>
                    </Link>
                </li>
            </ul>
        </div>
        <div className={styles.underBox}>
        <Link href="/"
        className={styles.logo}>
        <Image 
        src={"/logo.svg"} width={60} height={53}
        alt="logo"
        />
        <h2>四條畷神社</h2>
        </Link>
        <p>
        〒 575-0021<br/>
        大阪府四條畷市南野2丁目18-1<br/>
        電話： (072) 876-0044
        </p>
        </div>
    </div>
</footer>
)

export default Footer;