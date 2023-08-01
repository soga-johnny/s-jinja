"use client";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import styles from "./page.module.scss";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { getPost } from "../../../../sanity/sanity-utils";
import { AnimatePresence, motion } from "framer-motion";
// import SanityImage from "../../../../components/SanityImage";
// import { useNextSanityImage } from "next-sanity-image";
import imageUrlBuilder from '@sanity/image-url'
// import {getImageDimensions} from '@sanity/asset-utils'
// import Image from "next/image";
import config from "../../../../sanity/config/client.config";


function urlFor (source) {
  return imageUrlBuilder(config).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).fit('max').auto('format')}
          className={styles.inlineImage}
        />
      )
    }
  }
}


export default async function Post({ params }) {
  const slug = params.post;
  const post = await getPost(slug);

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
                  components={ptComponents} 
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
