import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
import Image from "next/image";

export default function Amulets (){

    return (

        <div className={styles.container}>
        <Header />
        <TopVisual 
        visual="/amulet.jpg"
        title="授与品"
        description=
        "　説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル説明サンプル"
        />
        
        <section className={styles.contents}>
            {/* ---------------------------------------1 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet1.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>神宮大麻</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet2.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>四條畷神社神札</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet3.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>四條畷神社神札(家内安全)</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------2 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet4.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御朱印帳</h3>
                    </div>
                        <p>１，２００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet5.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御朱印帳</h3>
                    </div>
                        <p>１，２００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet6.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>忠孝両全守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------3 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet7.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>小楠公絵馬</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet8.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>干支絵馬</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet9.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>干支絵馬</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------4 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet10.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>かぶと絵馬</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet11.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全木札</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet12.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全守(吸盤)</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------5 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet13.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全守(吸盤)</h3>
                    </div>
                        <p>１，０００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet14.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全守(キーホルダー)</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet15.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全守(キーホルダー)</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------6 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet16.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全ステッカー</h3>
                    </div>
                        <p>５００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet17.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>交通安全ステッカー</h3>
                    </div>
                        <p>５００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet18.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>厄除守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------7 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet19.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>厄除守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet20.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>合格守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet21.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------8 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet22.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>縁結守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet23.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>病気平癒守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet24.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>心願成就守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------9 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet25.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>学業守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet26.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>健康守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet27.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>こども守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------------------------------10 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet28.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>勝守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet29.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>安産守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet30.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>巾着守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------11 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet31.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>干支守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet32.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>かぶと守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet33.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>ひょうたん守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------12 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet34.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>すず守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet35.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>さくら咲かす守</h3>
                    </div>
                        <p>１、０００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet36.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>四つ葉守</h3>
                    </div>
                        <p>１、０００円</p>
                </div>
            </div>
            </div>
            {/* ---------------------------------------13 */}
            <div className={styles.items}>
            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet37.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>福銭</h3>
                    </div>
                        <p>３００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet38.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>安産守</h3>
                    </div>
                        <p>８００円</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.imageCover}>
                <Image
                src="/amulets/amulet39.jpg"
                width={250}
                height={250}
                alt="amulet"
                 />
                </div>
                <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>略記</h3>
                    </div>
                        <p>１００円</p>
                </div>
            </div>
            </div>
            {/* --------------------------------------- */}

        </section>

        <Footer />
        </div>
    )
}