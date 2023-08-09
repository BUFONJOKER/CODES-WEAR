import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";


export default function App({ Component, pageProps }) {

  // cart state
  const [cart, setCart] = useState({});

  // cart total state
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (itemCode,quantity,price,name,variant,size)=>{
    
    let myCart = cart;

    
  }

  return (
    <>
      <Heading />
      <Navbar />
      <Component {...pageProps} />
      <Footer />

    </>
  );
}
