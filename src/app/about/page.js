"use client"

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import TopVisual from "../../../components/TopVisual";
import styles from "./page.module.scss"
import Image from "next/image";
import SubtitleVisual from "../../../components/SubtitleVisual";
// import {  motion } from 'framer-motion'

export default function About (){

    return (

        // <AnimatePresence initial={false} mode="wait">
        <div className={styles.container}>
        <Header />
        {/* <motion.div
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}    
 > */}
        <TopVisual 
        visual="/visuals/about.jpg"
        title="四條畷神社について"
        description=
        "四條畷市は大阪府の東北部に位置し、市の約三分の二が北生駒山地でしめられている緑豊かな場所であり、西の軽井沢と称される。当社は飯森山の山麓に鎮座し、忠孝両全の名将楠木正行公をはじめ二十五柱の大神様をお祀りしている。"
        />
        {/* </motion.div> */}
        <SubtitleVisual
        title="御由緒"
        description="サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト"
        visual="/subtitles/subtitle1.jpg"
        />
        
        <section className={styles.main}>

            <div className={styles.item}>
            <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御鎮座</h3>
                    </div>
                        <p>住吉平田神社の神主、三牧文吾氏らが楠正行公殉節の地である当地に、
                        神社創建を願い出て、明治22年に勅許が下り、四條畷神社という社号が下されました。
                        これを里人が大いに喜び、境内地や金品を寄進され、老も若きも、土運び石積みに奉仕され、
                        明治23年4月5日に御鎮座祭が斎行されました。
                        </p>
                </div>
            <div className={styles.imageCover}>
                <Image
                src="/about/about1.jpg"
                width={250}
                height={250}
                alt="shijonawateJinja"
                 />
            </div>
            </div>
            {/* --------------------------------------- */}
            <div className={styles.item}>
            <div className={styles.imageCover}>
                <Image
                src="/about/about2.jpg"
                width={250}
                height={500}
                alt="shonanko"
                 />
            </div>
            <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>御神祭</h3>
                    </div>
                    <h4>主祭神</h4>
                    <h4>楠 正行 公</h4>
                        {/* <p>
                        楠正行公は楠正成公（湊川神社：神戸市）の嫡男であり、正成公同様、
                        鎌倉時代末に皇位の継承がもつれ、南北に朝廷ができた際、不利を覚悟で
                        正統の天皇を守り、四條畷の地で殉死された。
                        忠孝両全の武将としてその御神徳は必勝祈願・武運長久・家内安全をはじめ、
                        「なにわ七幸めぐり」で心願成就の御利益と言われるほど、幅広い御神徳がある。
                        また、御祭神の姓である「クスノキ」は、古来より防虫・虫除けに使用されていた。
                        現代ではそれが転じて厄除・災難除けの楠公さんと称され祈願者も多い。
                        さらに、本殿西側の御妣神社には、正行公の御母堂久子様を祀り、賢母の教えを慕われ、
                        安産祈願・初宮詣・七五三など子育ての神として崇敬を集める。
                        </p> */}
                    <h4>配祀（四條畷の戦いにて殉節された24柱）</h4>
                        <p>
                        楠 正時命、楠 正家命・同人子息、和田賢秀命、
                        和田新兵衛命、和田六兵衛命・同人子息二人、大塚惟久命、
                        畠山興三命、畠山文郎命、野田四郎命・同人子息二人、
                        金岸某命・同人舎弟、関住良圓命・同人子息、三輪西阿命・同人子息、
                        河邊石掬丸命、譽田某命、阿間了願命、青屋刑部命
                        </p>
                </div>
            </div>
            {/* --------------------------------------- */}
            <div className={styles.item}>
            <div className={styles.caption}>
                    <div className={styles.title}>
                        <h3>四條畷の戦い</h3>
                    </div>
                    <h4>後村上天皇の御言葉</h4>
                        <p>
                        度々の敗戦に驚いた足利尊氏は、腹心の高師直・師泰に八万の大兵を
                        授けて向かわせた。正行公も死を覚悟して吉野の行宮に参代し、
                        後村上天皇に「この度は敵も精兵を集めて攻めて来ましたので、
                        私も生きるか死ぬかの大決戦を致します。最後の思い出に陛下の
                        お顔を拝してから参りとうございます」と申し上げた。
                        天皇も「私はお前を自分の手足の如く思い頼っているのだから
                        決して無理な事はしないように」と仰られた。
                        </p>
                    <h4>如意輪堂</h4>
                        <p>
                        天皇のお言葉に正行公は感泣して退出し、先帝後醍醐天皇の御陵を拝し、
                        次いで如意輪堂に行き、一族143名の名を留めて、<br/>

                        　かえらじと　かねて思へば　あずさ弓<br/>
                        　　　　　　　　なき数に入る　名をぞとどむる<br/>

                        の辞世の歌を記して、出陣された。（この姿の銅像が飯盛山頂に建っている）
                        </p>
                    <h4>四條畷の決戦</h4>
                        <p>
                        大正3年正月5日（1348）、三千の兵を率い牧岡の往生院に本陣を置いた正行公は、
                        一挙北進し、深野池の東、野崎に構える高師直の先陣を打ち破り、
                        師直に迫ったが替玉に欺かれて取り逃がし、遂に多勢に無勢、後方との連絡も絶たれ、
                        あわれ23才を一期として深野池の東北、葦の繁れる所にて弟正時公と刺し違え
                        殉節された。他の者たちも腹かき切って息絶えた。
                        （この所をハラキリという。又、古戦田なる地名も三カ所あった。
                        騎士道の国英国のイートンパブリックスクールの壁には、小楠公四條畷奮戦の図が
                        掲げられている由）
                        </p>
            </div>
            <div className={styles.imageCover}>
                <Image
                src="/about/about3.jpg"
                width={250}
                height={500}
                alt="shijonawateJinja"
                 />
            </div>
            </div>

        </section>

        <Footer />
        </div>
        // </AnimatePresence>
    )
}