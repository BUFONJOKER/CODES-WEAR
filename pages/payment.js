import React from 'react'
import Link from 'next/link'

import Order from "@/models/Order";
import connectDb from "@/middleware/mongoose";
import { useState } from 'react';

export default function Payment({ cart, orders }) {


  console.log("cart" + Object.keys(orders).length)

  var cart_products = []
  Object.keys(cart).map((key) => {

    cart_products.push(cart[key].product_id)

  }
  )
  console.log(cart_products)

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
    await fetch('http://localhost:3000/api/posttransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // console.log("data sent to posttransaction api")
  }









  return (
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
                <input type="text" className="form-control" id="cardNumber" name="cardNumber" placeholder="1234 1234 1234 1234" />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Expiration Date</label>
                <input type="text" className="form-control" id="expirationDate" name="expirationDate" placeholder="MM/YY" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input type="text" className="form-control" id="cvc" name="cvc" placeholder="123" />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <input type="text" className="form-control" id="country" name="country" placeholder="Pakistan" />
              </div>

              <button onClick={payementHandle} type="button" className="btn  btn-outline-dark" style={{ width: '100px' }}>
                Payment</button>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}




// Import your Mongoose Order model here

export async function getServerSideProps(context) {
  try {
    const orders = await Order.find({ status: "pending" });
    console.log("avavga" + orders) // Query your database for orders

    // Convert the orders data to a object
    const data = JSON.parse(JSON.stringify(orders));
    console.log("daat" + data)

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
