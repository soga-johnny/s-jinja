import Image from "next/image";
import styles from "./TopVisual.module.scss";
import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";
// import Sticky from './Sticky'

const TopVisual = (props) => {
  return (
    <div>
      <motion.div
        key={"child"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: "easeInOut" }}>
        <div className={styles.container}>
          <div className={styles.leftContent}>
            <div className={styles.visualCover}>
              <ParallaxBanner
                layers={[
                  {
                    image: `${props.visual}`,
                    translateY: [0, 15],
                    scale: [3, 1, "easeOutCubic"],
                    expanded: false,
                  },
                ]}
                className={styles.visual}></ParallaxBanner>

              {/* -------- */}
            </div>
            <div className={styles.description}>
              <p>{props.description}</p>
            </div>
          </div>
          <div className={styles.rightContent}>
            <h2>{props.title}</h2>
          </div>
          {/* <div className={styles.nameLogo}>
        <div className={styles.scroll}>
            <p>Scroll</p>
        </div>
        <h1>四條畷神社</h1>

    </div> */}
        </div>
      </motion.div>

      <Image
        src={"/backAccentPC.png"}
        width={1370}
        height={190}
        alt="backAccent"
        className={styles.backAccentPC}
      />
      <Image
        src={"/backAccentMobile.png"}
        width={1370}
        height={190}
        alt="backAccent"
        className={styles.backAccentMobile}
      />
    </div>
  );
};

export default TopVisual;
