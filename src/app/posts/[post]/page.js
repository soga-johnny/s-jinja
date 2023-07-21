"use client";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../sanity/sanity-utils";
import { AnimatePresence, motion } from "framer-motion";
// import SanityImage from "../../../../components/SanityImage";
import { useNextSanityImage } from "next-sanity-image";


export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPost(slug);

  // const imageComponent = {
  //   types: {
  //     image: SanityImage
  //   }
  // }

  const SanityImage = ({ post }) => {
    const imageProps = useNextSanityImage(post);
  
    if (!imageProps) return null;
  
    return (
      <Image
        // {...imageProps}
        src={imageProps.slug}
        width={500}
        height={500}
        alt={'postsImage'}
      />
    );
  };

  return (
    <div>
      <Header />
      <AnimatePresence initial={true} mode={"wait"}>
        <motion.div
          className={styles.container}
          key="child"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}>
          <div className={styles.container}>
            <Link href="/news" className={styles.backBtn}>
              戻る
            </Link>

            <section className={styles.slug}>
              <div className={styles.title}>
                <h2>{post.title}</h2>
              </div>
              <p>{post.publishedAt}</p>
              <div className={styles.body}>
                <PortableText
                  value={post.body}
                  components={{
                    types: {
                      image: SanityImage 
                      
                    }
                  }} 
                    />
              </div>
            </section>

            <Link href="/news" className={styles.backBtn}>
              戻る
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
