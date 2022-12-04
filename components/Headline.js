import styles from "../styles/Home.module.css";

export default function Headline({ title, page }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>

      <p className={styles.description}>
        Get started by editing <code className={styles.code}>{page}</code>
      </p>
    </div>
  );
}
