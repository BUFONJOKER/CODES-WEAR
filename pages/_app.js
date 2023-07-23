import "@/styles/globals.css";
import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
      <Head>
        <title>CodesWear</title>
        <meta name="description" content="CodesWear - Wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Footer/>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
      ></script>
    </>
  );
}
