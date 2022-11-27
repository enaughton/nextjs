import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Blurb from "/components/Blurb";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome! </h1>

        <div className={styles.grid}>
          <Blurb />
        </div>

        <div className={styles.grid}>
          <a href="https://emmettnaughton.com" className={styles.card}>
            <h2>Read </h2>
            <p>My writing about tech. </p>
          </a>

          <a
            href="https://emmettnaughton.com/media"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Listen </h2>
            <p>Podcasts I &#39;ve been on</p>
          </a>
          <a
            href="mailto:enaughton5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Outreach</h2>
            <p>Get in touch with me</p>
          </a>

          <a
            href="https://github.com/enaughton"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Learn </h2>
            <p>Discover my projects.</p>
          </a>

          <a
            href="https://hireemmett.work"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Delight</h2>
            <p>What people are saying</p>
          </a>
          <a href="https://coderdads.carrd.com" className={styles.card}>
            <h2>Community</h2>
            <p>Join CoderDads</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
