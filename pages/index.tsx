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
        <Head>
          <meta name="robots" content="follow" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:title" content="Brian Ruff&apos;s Portfolio" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://brianruff.com" />
          <meta
            property="og:image"
            content="https://pbs.twimg.com/profile_images/1519832143500914694/9zX3itOy_200x200.jpg"
          />

          <meta
            property="og:description"
            content="Get to know me and my work."
          />
          <meta property="og:site_name" content="Brian Ruff" />
          <meta charSet="utf-8" />
          <meta name="author" content="Brian Ruff" />
          <meta name="copyright" content="Brian Ruff" />
          <meta property="og:locale" content="en_US" />

          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Brian Ruff" />
          <meta
            property="og:audio"
            content="https://www.youtube.com/watch?v=04854XqcfCY"
          />
          <meta
            property="og:video"
            content="https://www.youtube.com/watch?v=04854XqcfCY"
          />
          <meta property="og:video:width" content="640" />
          <meta property="og:video:height" content="360" />
          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:alt" content="Queen: We are the Champions" />
          <meta
            property="og:video:url"
            content="https://www.youtube.com/watch?v=04854XqcfCY"
          />
          <meta
            property="og:video:secure_url"
            content="https://www.youtube.com/watch?v=04854XqcfCY"
          />
          <link rel="icon" href={"/small-me.jpg"} />
          <title>Brian Ruff&apos;s Portfolio</title>
        </Head>
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
