import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

const { homeSection, picOfMe } = styles;

export interface HomePageContent {
    header: string;
    description: string;
}

export default function Home() {
  const [content, setContent] = useState<HomePageContent | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/content.json');
      const jsonData = await response.json();
      setContent(jsonData);
    }

    fetchData();
  }, []);

  if (content === null) return <p>Loading...</p>

  return (
    <section>
      <h1 className={homeSection} dangerouslySetInnerHTML={{
        __html: content.header
      }}></h1>
     <div className={homeSection}>
     <Image
        className={picOfMe}
        aria-describedby="Brian Ruff"
        alt="Brian Ruff"
        height={300}
        width={300}
        src="/small-me.jpg"
      />
      <p dangerouslySetInnerHTML={{
        __html: content.description
      }}>
      </p>
      <address>
        <ul>
          {renderLink("https://www.linkedin.com/in/brianaruff", "LinkedIn")}
          {renderAnchor("mailto:brff19@gmail.com", "Email")}
          {renderAnchor("tel:+1-980-240-6927", "Phone")}
          {renderLink("https://github.com/brianaruff", "Github")}
          {renderLink("https://gitlab.com/brff19", "GitLab")}
          {renderLink("https://brianruffportfolio.com/", "Deprecated Portfolio")}
        </ul>
      </address>
     </div>
    </section>
  );
}

function renderLink(href: string, text: string) {
  return (
    <li>
      <Link href={href} passHref>
        <a target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </Link>
    </li>
  );
}

function renderAnchor(href, text) {
  return (
    <li>
      <a href={href} target="_top" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
}
