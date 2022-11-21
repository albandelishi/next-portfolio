import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const setInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? 'dark' 
          : 'light'
      }
      document.body.dataset.theme = getUserPreference();
    `;
    return (
      <Html lang="en">
        <Head>
          <meta name="title" content="Alban Codes" />
          <meta
            name="description"
            content="Hello, I'm Alban Delishi, I'm an enthusiastic web developer. My goal is to develop web applications that are fast, realiable and easy to use."
          />
          <meta
            name="keywords"
            content="html, css, javascript, jquery, ajax, node js, react js, react native, mysql, mongo, express, mongoose, nodejs, reactjs, sql, php, wordpress, software engineering, full stack web developer, front end developer, back end developer"
          />
          <meta name="robots" content="index" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="author" content="Alban Delishi" />
          <link
            rel="icon"
            type="image/x-icon"
            href="/images/favicon.ico"
          ></link>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <Script
            src="https://fonts.googleapis.com/css2?family=Sono:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <Script
            src="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-JFJVZNSQQQ');
        `}
          </Script>
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
