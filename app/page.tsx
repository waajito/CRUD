import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <form action="" className={styles.createArticle}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Content</label>
        <textarea name="content" id="content" cols={30} rows={10}></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </main>
  );
}
