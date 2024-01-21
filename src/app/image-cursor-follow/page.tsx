"use client";
import Follow from "../../../components/Cursor/Follow";
import styles from "./page.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Page() {
  return (
    <>
      <Follow />
      <div className={styles.pageWrapper}>
        <div className={styles.textWrapper}>
          <p className={styles.text}>TEXT</p>
          <p className={styles.text}>GREATJOB</p>
          <p className={styles.text}>AMAZING</p>
        </div>
      </div>
    </>
  );
}
