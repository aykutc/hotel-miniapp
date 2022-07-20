import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/*  <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap"
            rel="preload"
            as="font"
          /> */}
          {/*  <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap"
            as="font"
            type="text/css"
            crossOrigin
          ></link> */}
          <link rel="icon" href="data:,"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
