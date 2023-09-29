import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import { useState, useEffect } from "react";
import { set } from "mongoose";
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar from 'react-top-loading-bar'



export default function App({ Component, pageProps }) {

  const [quantity, setQuantity] = useState(0);

  const [user, setUser] = useState({value: null})

  const [key, setKey] = useState(0)

  // cart state
  const [cart, setCart] = useState({});

  // cart total state
  const [subTotal, setSubTotal] = useState(0);

  // progress for loading bar
  const [progress, setProgress] = useState(0)

  const router = useRouter()
  

  const logout = () => {
    localStorage.removeItem('token')
    setUser({value: null})
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

    if(token){
      setUser({value: token})
      setKey(Math.random())
    }


    // try {

    //   if (localStorage.getItem('cart')) {
    //     setCart(JSON.parse(localStorage.getItem('cart')));
    //   }

    // }

    // catch (error) {
    //   console.log(error);
    // }


  }, [router.events, router.query]);




  // add to cart function
  const addToCart = (itemCode, quantity, price, name, variant, size) => {
   
    // create a copy of the cart state
    let newCart = cart;
  

    // check if item is already in cart
    if (cart[itemCode]) {
      // if item is in cart, increase quantity
      newCart[itemCode].quantity = cart[itemCode].quantity + quantity;
    }

    // if item is not in cart, add it
    else {
      // add item to cart
      newCart[itemCode] = {
        quantity: 1,
        price: price,
        name: name,
        variant: variant,
        size: size
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
  
      // // localStorage is available
      // localStorage.setItem('cart', JSON.stringify(newCart));
  
  

    

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

      <Navbar logout={logout} key={key} user={user} cart={cart} addToCart={addToCart} quantity = {quantity} 
      removeFromCart={removeFromCart} clearCart={clearCart}
       subTotal={subTotal}
       />

      <Component {...pageProps} cart={cart} addToCart={addToCart} 
      removeFromCart={removeFromCart} clearCart={clearCart}
      subTotal={subTotal}
       />
      <Footer />

    </>
  );
  }



  