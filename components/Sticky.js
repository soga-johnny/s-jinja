import styles from "./Sticky.module.scss";
import Link from "next/link";

const Sticky = () => {
  return (
    <div className={styles.container}>
      <div className={styles.position}>
        <div className={styles.scroll}>
          <p>Scroll</p>
        </div>
        <div className={styles.ralative}>
          <Link href="/">
            <h1>四條畷神社</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
