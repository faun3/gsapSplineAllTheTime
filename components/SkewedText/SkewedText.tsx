"use client";
import styles from "./SkewedText.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function SkewedText() {
  let textRef = useRef(null);
  useGSAP(
    () => {
      const textTimeline = gsap.timeline();
      textTimeline.from(".text", {
        skewY: 8,
        duration: 1.5,
        y: 200,
        stagger: {
          each: 0.2,
        },
        opacity: 0,
      });
    },
    { scope: textRef }
  );
  return (
    <div className={styles.textWrapper} ref={textRef}>
      <p className={`${styles.text} text`}>TEXT</p>
      <p className={`${styles.text} text`}>AMAZING WOW</p>
      <p className={`${styles.text} text`}>IT IS SO COOL</p>
    </div>
  );
}
