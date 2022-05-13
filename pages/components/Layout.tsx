import Head from "next/head";

export default function Layout({ children }) {
  return (
    <main>
      <Head>
        <meta name="robots" content="index, follow, noodp, noydir" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Brian Ruff&apos;s Portfolio" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://brianruff.com" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1519832143500914694/9zX3itOy_200x200.jpg"
        />

        <meta property="og:description" content="Get to know me and my work." />
        <meta property="og:site_name" content="BrianRuff.com" />
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

        {/* twitter meta tags */}
        <meta name="twitter:title" content="Brian Ruff&pos; Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@brff19" />
        <meta
          name="twitter:description"
          content="Get to know me and my work."
        />
        <meta name="twitter:image" content="/small-me.jpg" />

        <link rel="icon" href={"/small-me.jpg"} />

        <title>Brian Ruff&apos;s Portfolio</title>
      </Head>
      {children}
    </main>
  );
}
