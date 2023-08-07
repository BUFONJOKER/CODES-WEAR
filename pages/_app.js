import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Heading />
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </>
  );
}
