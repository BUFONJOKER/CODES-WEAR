import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Orders() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      let res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myorders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      });

      let data = await res.json()
      setOrders(data.orders)
    
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
        <title>Codes Wear-My Orders</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        My Orders
      </h1>

      <div className="container mt-5"  style={{ width: 'auto', overflowX: 'auto', whiteSpace: 'nowrap' }}>
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Email</th>
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
                      <td>{orders[item].email}</td>
                      <td>{orders[item].amount}</td>
                      <td>{orders[item].status  }</td>
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

