"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import styles from "./AerialHeader.module.scss";
import aerial from "../../images/ring.jpg";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AerialHeader() {
  const donutRef = useRef(null);
  const container = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1,
        pin: donutRef.current,
        start: "top top",
      },
    });
    tl.to(donutRef.current, {
      clipPath: "circle(70% at 50% 50%)",
      mask: "radial-gradient(circle at 50% 50%, transparent 80%, black 0%)",
    });
    tl.to(donutRef.current, {
      clipPath: "circle(70% at 50% 50%)",
      mask: "radial-gradient(circle at 50% 50%, transparent 100%, black 0%)",
    });
  });
  return (
    <div ref={container}>
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
