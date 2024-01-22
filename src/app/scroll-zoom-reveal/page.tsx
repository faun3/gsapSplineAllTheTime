import styles from "./page.module.scss";
import AerialHeader from "../../../components/AerialHeader/AerialHeader";

export default function Page() {
  return (
    <>
      <div className={styles.body}>
        <AerialHeader />
        <div className={styles.forward}>
          <span className={`${styles.text} ${styles.empty}`}>Torus</span>
          <span className={`${styles.text}`}>Time</span>
        </div>
      </div>
      <div>
        <p className={`${styles.pushDown} ${styles.bodyText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          reprehenderit deserunt nemo asperiores rem distinctio omnis libero?
          Nobis dolores atque, magni molestias neque quibusdam. Esse,
          recusandae? Eos nostrum placeat quaerat ipsam expedita quia. Atque
          sunt esse nihil voluptatem officia sit eligendi. Doloribus soluta
          tempore illo ipsum necessitatibus? Vero, repellendus quas!
        </p>
        <p className={styles.bodyText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          dicta, esse labore recusandae facilis atque commodi perspiciatis quo
          fugiat sed amet eum expedita omnis doloribus numquam nisi voluptas
          autem? Libero.
        </p>
      </div>
    </>
  );
}
