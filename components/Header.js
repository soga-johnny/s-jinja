import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss"



const Header = () => (
<header className={styles.header}>
    <div className={styles.container}>
        <Link href="/">
        <Image 
        src={"/logo.svg"} width={60} height={53}
        alt="logo"
        className={styles.logo}
        />
        </Link>
        <div className={styles.navi}>
            <details>
                <summary>
                    <h2>四條畷神社<br/>について</h2>
                </summary>
                    <Link href="/about"
                    className={styles.item}>
                        <h3>御由緒</h3>
                    </Link>
                    <Link href="/map"
                    className={styles.item}>
                        <h3>境内のご案内</h3>
                    </Link>
                    <Link href="/events"
                    className={styles.item}>
                        <h3>年中行事</h3>
                    </Link>
                    <Link href="/"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>飯盛山<br/>願かけ登山</h3>
                    </Link>
            </details>
            <details>
                <summary>
                    <h2>ご祈祷<br/>授与品</h2>
                </summary>
                    <Link href="/pray"
                    className={styles.item}>
                        <h3>ご祈祷</h3>
                    </Link>
                    <Link href="/amulets"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                            授与品</h3>
                    </Link>
            </details>
            <details>
                <summary>
                    <h2 className={styles.titleAlign}>アクセス</h2>
                </summary>
                    <Link href="/access"
                    className={styles.item}>
                        <h3>電車で<br/>お越しの方</h3>
                    </Link>
                    <Link href="/access"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                           お車で<br/>お越しの方</h3>
                    </Link>
            </details>
            <details>
                <summary>
                    <h2 className={styles.titleAlign}>南郷七社</h2>
                </summary>
                    <Link href="/nango"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                           南郷七社の<br/>ご紹介</h3>
                    </Link>
            </details>
            <details>
                <summary>
                    <h2>ご案内<br/>お問い合わせ</h2>
                </summary>
                    <Link href="/news"
                    className={styles.item}>
                        <h3>お知らせ</h3>
                    </Link>
                    <Link href="/news/#hire"
                    className={styles.item}>
                        <h3>常駐のご案内</h3>
                    </Link>
                    <Link href="/contact"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                            お問い合わせ</h3>
                    </Link>
            </details>
        </div>
    </div>
</header>
)

export default Header;