import Link from "next/link";
import styles from "./PrayBtn.module.scss";

const ContactBtn = (props) => (
  <div className={styles.container}>
    <button className={styles.btn}>
      <Link href="/pray">
        <p>{props.text}</p>
      </Link>
    </button>
  </div>
);

export default ContactBtn;
