import Image from 'next/image';
import styles from './TopVisual.module.scss'


const TopVisual = ( props ) => (

    <div className={styles.container}>
    <div className={styles.leftContent}>
        <div className={styles.visualCover}>
        <Image 
        src={ props.visual }
        alt="mainVisual"
        fill
        className={styles.visual}
        />
        </div>
        <div className={styles.description}>
            <p>{ props.description }</p>
        </div>
    </div>
    <div className={styles.rightContent}>
        <h2>{ props.title }</h2>
    </div>
    <div className={styles.nameLogo}>
        <div className={styles.scroll}>
            <p>Scroll</p>
        </div>
        <h1>四條畷神社</h1>

    </div>

    <Image 
        src={ "/backAccentPC.png" } width={1370} height={190}
        alt="backAccent"
        className={styles.backAccentPC}
        />
    <Image 
        src={ "/backAccentMobile.png" } width={1370} height={190}
        alt="backAccent"
        className={styles.backAccentMobile}
        />
</div>
)

export default TopVisual;