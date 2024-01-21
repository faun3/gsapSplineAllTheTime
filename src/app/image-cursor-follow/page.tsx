import Follow from "../../../components/Cursor/Follow";
import SkewedText from "../../../components/SkewedText/SkewedText";
import styles from "./page.module.scss";
export default function Page() {
  return (
    <>
      <div className={styles.bigWrapper}>
        <Follow />
        <SkewedText />
      </div>
    </>
  );
}
