import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss"
import React, { useRef } from "react";
import Menu from "./Menu"


const Header = () => {
    
    const summaryRef1  = useRef(null); 
    const summaryRef2  = useRef(null); 
    const summaryRef3  = useRef(null); 
    const summaryRef4  = useRef(null); 
    const summaryRef5  = useRef(null); 

    const contentRef1  = useRef(null);
    const contentRef2  = useRef(null);
    const contentRef3  = useRef(null);
    const contentRef4  = useRef(null);
    const contentRef5  = useRef(null);
  
// -------------------------------------------

    const handleClick1 = (e) => {
      e.preventDefault();
  
      const accordion1 = summaryRef1.current.parentNode;
      const content1 = contentRef1.current;
  

    const closingAnimation1 = (content1) => [
        {
          height: `${content1.offsetHeight}px`,
          opacity: 1,
        },
        {
          height: 0,
          opacity: 0,
        },
      ];

      const openingAnimation1 = (content1) => [
        {
          height: 0,
          opacity: 0,
        },
        {
          height: `${content1.offsetHeight }px`,
          opacity: 1,
        },
      ];
  
      const animation = {
        duration: 200,
        easing: "ease-in-out",
      };
      
      if ( accordion1.open ) {
        if (content1) {
          content1.animate(closingAnimation1(content1), animation).onfinish = () => {
            accordion1.removeAttribute("open"); 
          };
        }
      } else {
        content1?.animate(openingAnimation1(content1), animation);
        accordion1.setAttribute("open", "true");
      }
    };


    const handleClick2 = (e) => {
        e.preventDefault();
    
        const accordion2 = summaryRef2.current.parentNode;
        const content2 = contentRef2.current;
    
      const closingAnimation2 = (content2) => [
          {
            height: `${content2.offsetHeight}px`,
            opacity: 1,
          },
          {
            height: 0,
            opacity: 0,
          },
        ];
  
        const openingAnimation2 = (content2) => [
          {
            height: 0,
            opacity: 0,
          },
          {
            height: `${content2.offsetHeight}px`,
            opacity: 1,
          },
        ];
    
        const animation = {
          duration: 200,
          easing: "ease-in-out",
        };
  
        if ( accordion2.open ) {
          if ( content2) {
            content2.animate(closingAnimation2(content2), animation).onfinish = () => {
              accordion2.removeAttribute("open"); // アニメーション完了後に付与する
            };
          }
        } else {
          content2?.animate(openingAnimation2(content2), animation);
          accordion2.setAttribute("open", "true");
        }
      };

      const handleClick3 = (e) => {
        e.preventDefault();
    
        const accordion3 = summaryRef3.current.parentNode;
        const content3 = contentRef3.current;
    
  
      const closingAnimation3 = (content3) => [
          {
            height: `${content3.offsetHeight}px`,
            opacity: 1,
          },
          {
            height: 0,
            opacity: 0,
          },
        ];
  
        const openingAnimation3 = (content3) => [
          {
            height: 0,
            opacity: 0,
          },
          {
            height: `${content3.offsetHeight }px`,
            opacity: 1,
          },
        ];
    
        const animation = {
          duration: 200,
          easing: "ease-in-out",
        };
        
        if ( accordion3.open ) {
          if (content3) {
            content3.animate(closingAnimation3(content3), animation).onfinish = () => {
              accordion3.removeAttribute("open"); 
            };
          }
        } else {
          content3?.animate(openingAnimation3(content3), animation);
          accordion3.setAttribute("open", "true");
        }
      };
  
  
      const handleClick4 = (e) => {
          e.preventDefault();
      
          const accordion4 = summaryRef4.current.parentNode;
          const content4 = contentRef4.current;
      
        const closingAnimation4 = (content4) => [
            {
              height: `${content4.offsetHeight}px`,
              opacity: 1,
            },
            {
              height: 0,
              opacity: 0,
            },
          ];
    
          const openingAnimation4 = (content4) => [
            {
              height: 0,
              opacity: 0,
            },
            {
              height: `${content4.offsetHeight}px`,
              opacity: 1,
            },
          ];
      
          const animation = {
            duration: 200,
            easing: "ease-in-out",
          };
    
          if ( accordion4.open ) {
            if ( content4 ) {
              content4.animate(closingAnimation4(content4), animation).onfinish = () => {
                accordion4.removeAttribute("open"); // アニメーション完了後に付与する
              };
            }
          } else {
            content4?.animate(openingAnimation4(content4), animation);
            accordion4.setAttribute("open", "true");
          }
        };

        const handleClick5 = (e) => {
            e.preventDefault();
        
            const accordion5 = summaryRef5.current.parentNode;
            const content5 = contentRef5.current;
        
          const closingAnimation5 = (content5) => [
              {
                height: `${content5.offsetHeight}px`,
                opacity: 1,
              },
              {
                height: 0,
                opacity: 0,
              },
            ];
      
            const openingAnimation5 = (content5) => [
              {
                height: 0,
                opacity: 0,
              },
              {
                height: `${content5.offsetHeight}px`,
                opacity: 1,
              },
            ];
        
            const animation = {
              duration: 200,
              easing: "ease-in-out",
            };
      
            if ( accordion5.open ) {
              if ( content5 ) {
                content5.animate(closingAnimation5(content5), animation).onfinish = () => {
                  accordion5.removeAttribute("open"); // アニメーション完了後に付与する
                };
              }
            } else {
              content5?.animate(openingAnimation5(content5), animation);
              accordion5.setAttribute("open", "true");
            }
          };

    // -----------------------------------------

    return (
    <header className={styles.header}>
    <div className={styles.container}>
        <Link href="/">
        <Image 
        src={"/logo.svg"} width={60} height={53}
        alt="logo"
        className={styles.logo}
        />
        </Link>
        <div className={styles.navi}>
            <details>
                <summary onClick={handleClick1} ref={summaryRef1}>
                    <h2>四條畷神社<br/>について</h2>
                </summary>
                <div ref={contentRef1} className={styles.hover}>
                    <Link href="/about"
                    className={styles.item}>
                        <h3>御由緒</h3>
                    </Link>
                    <Link href="/map"
                    className={styles.item}>
                        <h3>境内のご案内</h3>
                    </Link>
                    <Link href="/events"
                    className={styles.item}>
                        <h3>年中行事</h3>
                    </Link>
                    <Link href="/"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>飯盛山<br/>願かけ登山</h3>
                    </Link>
                    </div>
            </details>
             <details>
                <summary onClick={handleClick2} ref={summaryRef2}>
                    <h2>ご祈祷<br/>授与品</h2>
                </summary>
                <div ref={contentRef2} className={styles.hover}>
                    <Link href="/pray"
                    className={styles.item}>
                        <h3>ご祈祷</h3>
                    </Link>
                    <Link href="/amulets"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                            授与品</h3>
                    </Link>
                    </div>
            </details> 
            <details>
                <summary onClick={handleClick3} ref={summaryRef3}>
                    <h2 className={styles.titleAlign}>アクセス</h2>
                </summary>
                <div ref={contentRef3} className={styles.hover}>
                    <Link href="/access"
                    className={styles.item}>
                        <h3>電車で<br/>お越しの方</h3>
                    </Link>
                    <Link href="/access"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                           お車で<br/>お越しの方</h3>
                    </Link>
                    </div>
            </details>
            <details>
                <summary onClick={handleClick4} ref={summaryRef4}>
                    <h2 className={styles.titleAlign}>南郷七社</h2>
                </summary>
                <div ref={contentRef4} className={styles.hover}>
                    <Link href="/nango"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                           南郷七社の<br/>ご紹介</h3>
                    </Link>
                    </div>
            </details>
            <details>
                <summary onClick={handleClick5} ref={summaryRef5}>
                    <h2>ご案内<br/>お問い合わせ</h2>
                </summary>
                <div ref={contentRef5} className={styles.hover}>
                    <Link href="/news"
                    className={styles.item}>
                        <h3>お知らせ</h3>
                    </Link>
                    <Link href="/news/#hire"
                    className={styles.item}>
                        <h3>常駐のご案内</h3>
                    </Link>
                    <Link href="/contact"
                    className={styles.item}>
                        <h3 className={styles.bottomItem}>
                            お問い合わせ</h3>
                    </Link>
                    </div>
            </details>
        </div>
        <div className={styles.menu}>
        <Menu />
        </div>
    </div>
    </header>
    )      
    }

export default Header;