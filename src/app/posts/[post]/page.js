"use client";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./page.module.scss"
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../sanity/sanity-utils";
import { motion } from "framer-motion";

export default async function Post ( { params } ){

    const slug = params.post;
    const post = await getPost(slug);

    return (

        <div>
        <Header />
        <motion.div className={styles.container}
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
        transition = {{ delay: 0.7, duration: 1, ease: 'easeInOut' }} 
        >
        <div className={styles.container}>
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
        </motion.div>
        <Footer />
        </div>
    )
}