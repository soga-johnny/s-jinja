import Image from "next/image";
import styles from "./SubtitleVisual.module.scss";

const SubtitleVisual = (props) => (
  <div className={styles.container}>
    <div className={styles.leftContent}>
      <div className={styles.leftContentTitle}>
        <h2>{props.title}</h2>
      </div>
      <p>{props.description}</p>
    </div>
    <div className={styles.visualCover}>
      <Image
        src={props.visual}
        alt="mainVisual"
        fill
        className={styles.visual}
      />
    </div>
  </div>
);

export default SubtitleVisual;
