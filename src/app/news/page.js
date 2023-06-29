// "use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
import ContactBtn from "../../../components/ContactBtn";
import { getPosts } from "../../../sanity/sanity-utils";
import Link from "next/link";

export default async function News (){

    const posts = await getPosts();

    return (

        <div className={styles.container}>
        <Header />
        <TopVisual 
        visual="/visuals/news.jpg"
        title="ご案内・お問い合わせ"
        description=
        "　説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル"
        />

        <section className={styles.contact}>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
            <h3>
            〒 575-0021<br/>
            大阪府四條畷市南野2丁目18-1<br/>
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

        <section className={styles.hire} id="hire">
            <div className={styles.title}>
                <h2>常駐のご案内</h2>
            </div>
            <p>ダミーテキスト<br/>ダミーテキスト<br/>ダミーテキスト<br/></p>
        </section>

        <Footer />
        </div>
    )
}