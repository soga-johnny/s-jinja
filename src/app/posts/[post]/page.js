"use client";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./page.module.scss"
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../sanity/sanity-utils";

export default async function Post ( { params } ){

    const slug = params.post;
    const post = await getPost(slug);

    return (

        <div>
        <div className={styles.container}>
        <Header />
        <Link href="/news"
            className={styles.backBtn}>
                戻る
        </Link>

        <section className={styles.slug}>
            <div className={styles.title}>
            <h2>{post.title}</h2>
            </div>
            <p>{post.publishedAt}</p>
            <div className={styles.body}>
            <PortableText value={post.body} />
            </div>
        </section>

        <Link href="/news"
            className={styles.backBtn}>
                戻る
        </Link>

        </div>
        <Footer />
        </div>
    )
}