"use client";
import Card from "@/components/card";
import styles from "./page.module.scss";
import Button from "@/components/button";

export default function Home() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const { title, content } = event.target.elements;
    const article = {
      title: title.value,
      content: content.value,
    };
  }
  return (
    <>
      <header>
        <h1>CRUD</h1>
      </header>
      <main className={styles.main}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="content">Content</label>
          <textarea name="content" id="content" cols={30} rows={10}></textarea>
          <Button color="primary" size="large">
            Save
          </Button>
        </form>
        <div className={styles.vr}></div>
        <div className={styles["card-list"]}>
          <Card
            title="this is a sample title"
            content="this is sample content file with a bunch of text to make it work"
            id="23"
          />

          <Card
            title="this is a sample title"
            content="this is sample content file with a bunch of text to make it work"
            id="23"
          />
          <Card
            title="this is a sample title"
            content="this is sample content file with a bunch of text to make it work"
            id="23"
          />
        </div>
      </main>
    </>
  );
}
