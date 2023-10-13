import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'
import Product from "@/models/Product";



export default function App({ Component, pageProps }) {

  const [quantity, setQuantity] = useState(0);

  const [user, setUser] = useState({ value: null })

  const [key, setKey] = useState(0)

  // cart state
  const [cart, setCart] = useState({});

  // cart total state
  const [subTotal, setSubTotal] = useState(0);

  // progress for loading bar
  const [progress, setProgress] = useState(0)

  const router = useRouter()

  const [orderId, setOrderId] = useState("")


  const logout = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    toast.warning('🦄 Logged Out Successfully', {
      position: "top-center",
      autoClose: 100,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
  }

  // use effect to check if cart is in local storage
  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      setProgress(50)
    });

    router.events.on('routeChangeComplete', () => {
      setProgress(100)
    });

    console.log('useEffect in _app.js');

    const token = localStorage.getItem('token')

    if (token) {
      setUser({ value: token })
      setKey(Math.random())
    }


    try {

      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }

    }

    catch (error) {
      console.log(error);
    }


  }, [router.events, router.query]);




  // add to cart function
  const addToCart = async (itemCode, quantity, price, name, variant, size, id) => {

    // console.log("var,size" + variant, size, id);
    // create a copy of the cart state
    let newCart = cart;

  //   const res = await fetch('http://localhost:3000/api/getproducts');

  // //get the data from api
  //  const products = await res.json();
  //  // loop through the products
    
  //   let availableQuantity;

  //  for(let i=0;i<products.products.length;i++){
  //     if(products.products[i].title==itemCode && products.products[i].color==variant && products.products[i].size==size){

  //       console.log(products.products[i].availableQuantity)
  //       console.log(products.products[i]._id)
  //       let id = products.products[i]._id
       
  //       if(products.products[i].availableQuantity<1){
  //           alert("Product is out of stock")
  //           availableQuantity = 0
  //       }
  //       else{
  //         availableQuantity = products.products[i].availableQuantity - 1
  //       }
  //       let data = [
  //         {
  //           "_id": id,
           
         
  //           "availableQuantity": availableQuantity
          
  //         }
  //     ]

  //     console.log(data)

  //     try {
  //       const response = await fetch("http://localhost:3000/api/updateproducts", {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(data),
  //       });
      
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
      
  //       const responseData = await response.json();
  //       console.log(responseData);
  //     } catch (error) {
  //       console.error(error);
  //     }
      





       
       
  //  }
  // }
 
   
  
    if (cart[itemCode]) {
      // if item is in cart, increase quantity
      //check if only quantity changed
      if (cart[itemCode].variant == variant && cart[itemCode].size == size && cart[itemCode].product_id == id) {
        newCart[itemCode] = {
          quantity: cart[itemCode].quantity + 1,
          price: price,
          name: name,
          variant: variant,
          size: size,
          product_id: id,
        }
      }
      else {
        newCart[itemCode] = {
          quantity: cart[itemCode].quantity + 1,
          price: price,
          name: name,
          variant: variant,
          // variant: cart[itemCode].variant + " " + variant + "(" + size + ")",
          size: size,
          product_id: id,
        }
      }
    }

    // if item is not in cart add it
    else {
      // add item to cart
      newCart[itemCode] = {
        quantity: 1,
        price: price,
        name: name,
        variant:variant,
        // variant: variant + "(" + size + ")",
        size: size,
        product_id: id,
      }
    }

    // update cart state
    setCart(newCart);

    // update cart in local storage
    saveCart(newCart);

    setQuantity(cart[itemCode].quantity)

  }

  // update cart in local storage
  const saveCart = (newCart) => {

    // localStorage is available
    localStorage.setItem('cart', JSON.stringify(newCart));

    let subTotal = 0;
    let keys = Object.keys(newCart);

    for (let i = 0; i < keys.length; i++) {
      subTotal += newCart[keys[i]].quantity * newCart[keys[i]].price;

    }

    setSubTotal(subTotal);
   
  }

  // clear cart function
  const clearCart = () => {


    // clear cart state
    setCart({});



    // clear cart in local storage
    saveCart({});
  }

  // remove item from cart function
  const removeFromCart = (itemCode, quantity, price, name, variant, size) => {

    // create a copy of the cart state
    let newCart = cart;


    // check if item is in cart then decrease quantity 
    if (newCart[itemCode]) {
      newCart[itemCode].quantity = cart[itemCode].quantity - 1;
    }

    // if item quantity is 0, remove it from cart
    if (newCart[itemCode].quantity <= 0) {
      newCart[itemCode].quantity = 0;
    }

    setCart(newCart);

    // update cart in local storage
    saveCart(newCart);

    setQuantity(cart[itemCode].quantity)



  }


  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        waitingTime={500}
      />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Heading />

      <Navbar logout={logout} key={key} user={user} cart={cart} addToCart={addToCart} quantity={quantity}
        removeFromCart={removeFromCart} clearCart={clearCart}
        subTotal={subTotal}
      />

      <Component {...pageProps} user={user} orderId={orderId} cart={cart} addToCart={addToCart}
        removeFromCart={removeFromCart} clearCart={clearCart}
        subTotal={subTotal}
      />
      <Footer />

    </>
  );
}



