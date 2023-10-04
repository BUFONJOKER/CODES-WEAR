import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'

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
      console.log()
    }


    if (localStorage.getItem('token')) {
      fetchUser()
    }

    else {

    }



  }, [])

  return (
    <div>
      <h1 className='text-white text-center mt-5'>Orders</h1>
      <div className="container mt-5">
        <table className="table table-hover table-dark fs-3">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>

            {
              Object.keys(orders).map((item) => {
                return (
                  <React.Fragment key={orders[item]._id}>
                    <tr>
                      <th scope="row">{orders[item]._id}</th>
                      <td>{orders[item].name}</td>
                      <td>{orders[item].amount}</td>
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

