import Link from "next/link";
import styles from "./ContactBtn.module.scss"



const ContactBtn = ( props ) => (

    <div className={styles.container}>
    <button className={styles.btn}>
        <Link href="/contact">
            <p>{ props.text }</p>
        </Link>
    </button>
    </div>
)

export default ContactBtn;