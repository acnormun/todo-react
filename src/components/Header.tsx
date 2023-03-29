import { RocketLaunch } from "phosphor-react";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <RocketLaunch size={48} color="#5e60ce" />
        <div className={styles.title}>
          <h1 className={styles.purple}>to</h1>
          <h1 className={styles.blue}>do</h1>
        </div>
      </div>
    </header>
  );
}
