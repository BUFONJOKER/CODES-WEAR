import React from 'react'
import Link from 'next/link'

import Order from "@/models/Order";
// import connectDb from "@/middleware/mongoose";
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Payment({ cart, orders,clearCart }) {


  // console.log("cart" + Object.keys(orders).length)

  const router = useRouter()

  var cart_products = []
  Object.keys(cart).map((key) => {

    cart_products.push(cart[key].product_id)

  }
  )
  // console.log(cart_products)

  var orders_products = []
  var a = false;
  var orderId = "";
  Object.keys(orders).map((key) => {

    orders_products = orders[key].products_id

    if (JSON.stringify(cart_products) === JSON.stringify(orders_products)) {
      a = true;
      orderId = orders[key]._id

    }
  }

  )

  // console.log(a)
  // console.log(orderId)


  const payementHandle = async (e) => {

    e.preventDefault();
    const _id = orderId;

    const data = { _id };
    try {
      await fetch('http://localhost:3000/api/posttransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    
      // If the fetch request succeeds, show a success toast
      toast.success('🦄 Payment Succeed', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      // If there's an error during the fetch request, handle it here
      // console.error('Error during fetch:', error);
    
      // You can also show an error toast if needed
      toast.error('❌ Payment Failed', {
        position: "top-center",
        autoClose: 5000, // Adjust the duration as needed
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      }

    clearCart();
    router.push("/")
    

    // console.log("data sent to posttransaction api")
  }


  const [disabled, setDisabled] = useState(true)
  const [cardNumber, setCardNumber] = useState("")
  const [expirationDate, setExpirationDate] = useState("")
  const [cvc, setCvc] = useState("")
  const [country, setCountry] = useState("")

  // useEffect to update the disabled state when form inputs change
  useEffect(() => {
    setDisabled(areFieldsEmpty());

    // eslint-disable-next-line
  }, [cardNumber, expirationDate, cvc, country]);

  const areFieldsEmpty = () => {
    return cardNumber.trim() === "" || expirationDate.trim() === "" || cvc.trim() === "" || country.trim() === "";
  };


  const handleChange = (e) => {
    if (e.target.name == "cardNumber") {
      setCardNumber(e.target.value)
    }
    else if (e.target.name == "expirationDate") {
      setExpirationDate(e.target.value)
    }
    else if (e.target.name == "address") {
      setAddress(e.target.value)
    }
    else if (e.target.name == "cvc") {
      setCvc(e.target.value)
    }
    else if (e.target.name == "country") {
      setCountry(e.target.value)
    }
  
  }




  return (

   <>
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
      <Head>
        <title>Codes Wear - Payment Form </title>
      </Head>

      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Payment Form
      </h1>
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h4>Payment Details </h4>
          </div>
          <div className="card-body">
            <form action="/payment" method="post">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input onChange={handleChange} type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234"  />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input onChange={handleChange} type="text" className="form-control" id="expirationDate" name="expirationDate" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input onChange={handleChange} type="text" className="form-control" id="cvc" name="cvc" placeholder="123" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input onChange={handleChange} type="text" className="form-control" id="country" name="country" placeholder="Pakistan" />
              </div>

              <button disabled={disabled} onClick={payementHandle} type="button" className=" mt-3 btn  btn-dark" style={{ width: '100px' }}>
                Payment</button>

            </form>
          </div>
        </div>
      </div>

    </div>
    </>
  )
  
}




// Import your Mongoose Order model here

export async function getServerSideProps(context) {
  try {
    const orders = await Order.find({ status: "pending" });
    // console.log("avavga" + orders) 
    // Query your database for orders

    // Convert the orders data to a object
    const data = JSON.parse(JSON.stringify(orders));
    // console.log("daat" + data)

    return {
      props: {
        orders: data, // Use a more appropriate prop name, e.g., "orders" instead of "order"
      },
    };
  } catch (error) {
    console.error("Error fetching orders:", error);
    return {
      props: {
        orders: null, // Handle the error gracefully
      },
    };
  }
}
