// Next.js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// styles
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <section className={styles.homeSection}>
      <h1>Brian Ruff&apos;s Website</h1>
      <Image
        style={{ borderRadius: "50%" }}
        aria-describedby="Brian Ruff"
        alt="Brian Ruff"
        height={300}
        width={300}
        src={"/small-me.jpg"}
      />
      <Head>
        <title>Brian Ruff</title>
        <meta name="description" content="Brian Ruff's Website" />
        <link rel="icon" href={"/small-me.jpg"} />
      </Head>
      <p>
        I&apos;m not 100% sure what I want to do with this yet, so this is
        placeholder content until I figure that out. Until then, I&apos;ll keep
        this site hosted on Google&apos;s servers for at least the following{" "}
        <span className={styles.googleHostTimePeriod}>seven years</span>, so
        feel free to contact me with the information below.
      </p>
      <address>
        <ul>
          <li>
            <a href="mailto:brff19@gmail.com" target="_top">
              Email
            </a>
          </li>
          <li>
            <a
              href="tel:+1-980-240-6927"
              target="_top"
              rel="noopener noreferrer"
            >
              Phone
            </a>
          </li>
          <li>
            <Link href={"https://github.com/brianaruff"} passHref>
              <a target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </Link>
          </li>
          <li>
            <Link href={"https://gitlab.com/brff19"} passHref>
              <a target="_blank" rel="noopener noreferrer">
                GitLab
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://brianruffportfolio.com/">
              <a target="_blank" rel="noopener noreferrer">
                Deprecated Portfolio
              </a>
            </Link>
          </li>
        </ul>
      </address>
    </section>
  );
}
