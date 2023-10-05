import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Orders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      let res = await fetch('http://localhost:3000/api/myorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      });

      let data = await res.json()
      setOrders(data.orders)
      // Object.keys(data.orders).map((item) => {
      //   console.log(data.orders[item].email)
      // })
    }


    if (localStorage.getItem('token')) {
      fetchUser()
    }

    else {

    }



  }, [])

  return (
    <div>

      <Head>
        <title>Codes Wear-Orders</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Orders
      </h1>

      <div className="container mt-5">
        <table className="table table-hover table-dark mx-auto">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>

            {
              Object.keys(orders).map((item) => {
                return (
                  <React.Fragment key={orders[item]._id}>
                    <tr>
                      {/* <td>{orders[item]._id}</td> */}
                      <td>{orders[item].name}</td>
                      <td>{orders[item].amount}</td>
                      <td>{orders[item].status}</td>
                      <td><Link href={'/order?id=' + orders[item]._id}>Details</Link></td>
                    </tr>
                  </React.Fragment>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

