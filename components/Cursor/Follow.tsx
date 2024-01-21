"use client";
import styles from "./follow.module.scss";
import Image from "next/image";
import lightning from "../../images/lightning.jpg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Follow() {
  const imageRef = useRef(null);
  useGSAP(() => {
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(imageRef.current, {
        duration: 0.3,
        x: e.clientX,
        xPercent: -50,
        y: e.clientY,
        yPercent: -50,
      });
    };
    gsap.from(imageRef.current, {
      opacity: 0,
      duration: 1.5,
      delay: 1,
    });
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });
  return (
    <Image
      src={lightning}
      width={300}
      height={300}
      alt="nothing"
      className={styles.followImg}
      ref={imageRef}
    />
  );
}
