import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>

      <body style={{ backgroundColor: '#1b1b1b' }}>
        <Main />
        <NextScript />

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          crossOrigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
