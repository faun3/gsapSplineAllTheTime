import styles from "./page.module.scss";
import AerialHeader from "../../../components/AerialHeader/AerialHeader";

export default function Page() {
  return (
    <div className={styles.body}>
      <AerialHeader />
    </div>
  );
}
