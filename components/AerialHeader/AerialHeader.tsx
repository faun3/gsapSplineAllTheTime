"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./AerialHeader.module.scss";
import aerial from "../../images/ring.jpg";
import { useRef } from "react";

export default function AerialHeader() {
  const donutRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(donutRef.current, {
      clipPath: "circle(75% at 50% 50%)",
      duration: 1.5,
      mask: "radial-gradient(circle at 50% 50%, transparent 80%, black 0%)",
    }).to(donutRef.current, {
      mask: "radial-gradient(circle at 50% 50%, transparent 100%, black 0%)",
      duration: 1,
    });
  });
  return (
    <div>
      <div
        className={styles.imageWrapper}
        style={{
          backgroundImage: `url(${aerial.src})`,
        }}
        ref={donutRef}
      ></div>
    </div>
  );
}
