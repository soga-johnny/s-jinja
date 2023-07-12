import React, { useState } from "react";
import Link from "next/link";

import styles from "./Menu.module.scss";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={[styles.menu, isOpen && "is-open"].join(" ")}
        onClick={menuToggle}>
        {isOpen ? "Close" : "Menu"}
      </div>
      {isOpen && (
        <div className={styles.spNav}>
          {/* <Link href="/"><h2>四條畷神社</h2></Link> */}

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/about">
              {" "}
              <h3>御由緒</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/map">
              {" "}
              <h3>境内のご案内</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/events">
              {" "}
              <h3>年中行事</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/pray">
              {" "}
              <h3>御祈祷</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/amulets">
              {" "}
              <h3>授与品</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/access">
              {" "}
              <h3>アクセス</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/nango">
              {" "}
              <h3>南郷七社</h3>
            </Link>
            {/* </div> */}
          </div>

          <div className={styles.item}>
            {/* <div className={styles.navTitle}> */}
            <Link href="/news">
              {" "}
              <h3>ご案内・お問い合わせ</h3>
            </Link>
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
