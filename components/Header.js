import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import React, { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isHovering1, setIsHovering1] = useState(false);

  const handleMouseOver1 = () => {
    setIsHovering1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovering1(false);
  };

  // --------------------

  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseOver2 = () => {
    setIsHovering2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovering2(false);
  };

  // --------------------

  const [isHovering3, setIsHovering3] = useState(false);

  const handleMouseOver3 = () => {
    setIsHovering3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovering3(false);
  };

  // --------------------

  const [isHovering4, setIsHovering4] = useState(false);

  const handleMouseOver4 = () => {
    setIsHovering4(true);
  };

  const handleMouseOut4 = () => {
    setIsHovering4(false);
  };

  // --------------------

  const [isHovering5, setIsHovering5] = useState(false);

  const handleMouseOver5 = () => {
    setIsHovering5(true);
  };

  const handleMouseOut5 = () => {
    setIsHovering5(false);
  };

  // -----------------------------------------

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Image
            src={"/logo.svg"}
            width={60}
            height={53}
            alt="logo"
            className={styles.logo}
          />
        </Link>
        <div className={styles.navi}>
          <details
            open
            onMouseOver={handleMouseOver1}
            onMouseOut={handleMouseOut1}>
            <summary>
              <h2>
                四條畷神社
                <br />
                について
              </h2>
            </summary>
            {isHovering1 && (
              <div className={styles.hover}>
                <Link href="/about" className={styles.item}>
                  <h3>御由緒</h3>
                </Link>
                <Link href="/map" className={styles.item}>
                  <h3>境内のご案内</h3>
                </Link>
                <Link href="/events" className={styles.item}>
                  <h3>年中行事</h3>
                </Link>
                <div className={styles.item}>
                  <h3 className={styles.bottomItemGrey}>
                    飯盛山
                    <br />
                    願かけ登山
                  </h3>
                </div>
              </div>
            )}
          </details>
          <details
            open
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}>
            <summary>
              <h2>
                御祈祷
                <br />
                授与品
              </h2>
            </summary>
            {isHovering2 && (
              <div className={styles.hover}>
                <Link href="/pray" className={styles.item}>
                  <h3>御祈祷</h3>
                </Link>
                <Link href="/amulets" className={styles.item}>
                  <h3 className={styles.bottomItem}>授与品</h3>
                </Link>
              </div>
            )}
          </details>
          <details
            open
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}>
            <summary>
              <h2 className={styles.titleAlign}>アクセス</h2>
            </summary>
            {isHovering3 && (
              <div className={styles.hover}>
                <Link href="/access" className={styles.item}>
                  <h3>
                    電車で
                    <br />
                    お越しの方
                  </h3>
                </Link>
                <Link href="/access" className={styles.item}>
                  <h3 className={styles.bottomItem}>
                    お車で
                    <br />
                    お越しの方
                  </h3>
                </Link>
              </div>
            )}
          </details>
          <details
            open
            onMouseOver={handleMouseOver4}
            onMouseOut={handleMouseOut4}>
            <summary>
              <h2 className={styles.titleAlign}>南郷七社</h2>
            </summary>
            {isHovering4 && (
              <div className={styles.hover}>
                <Link href="/nango" className={styles.item}>
                  <h3 className={styles.bottomItem}>
                    南郷七社の
                    <br />
                    ご紹介
                  </h3>
                </Link>
              </div>
            )}
          </details>
          <details
            open
            onMouseOver={handleMouseOver5}
            onMouseOut={handleMouseOut5}>
            <summary>
              <h2>
                ご案内
                <br />
                お問い合わせ
              </h2>
            </summary>
            {isHovering5 && (
              <div className={styles.hover}>
                <Link href="/news" className={styles.item}>
                  <h3>お知らせ</h3>
                </Link>
                {/* <Link href="/news/#hire"
                    className={styles.item}>
                        <h3>常駐のご案内</h3>
                    </Link> */}
                <Link href="/contact" className={styles.item}>
                  <h3 className={styles.bottomItem}>お問い合わせ</h3>
                </Link>
              </div>
            )}
          </details>
        </div>
        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
