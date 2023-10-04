import React from 'react'
import Order from "@/models/Order";

export default function MyOrder({ orders, id }) {
  console.log(orders.products)
  return (

    <div>
      <h1 className='text-white text-center mt-5'>Orders</h1>
      <h2 className='text-white text-center mt-5'>Order ID: #{id}</h2>

      <div className="container mt-5">
        <table className="table table-hover table-dark fs-3">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Color</th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>

            </tr>
          </thead>
          <tbody>

            {
              Object.keys(orders.products).map((item) => {
                return (
                  <React.Fragment key={orders.products[item]._id}>
                    <tr>
                      <th scope="row">{orders.products[item].name}</th>
                      <th scope="row">{orders.products[item].quantity}</th>
                      <th scope="row">{orders.products[item].variant}</th>
                      <th scope="row">{orders.products[item].size}</th>
                      <th scope="row">{orders.products[item].price}</th>
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



export async function getServerSideProps(context) {

  const id = context.query.id;

  const orders = await Order.findById(context.query.id);
  // console.log("avavga" + orders) 
  // Query your database for orders

  // Convert the orders data to a object
  const data = JSON.parse(JSON.stringify(orders));
  // console.log("daat" + data)

  return {
    props: {
      orders: data,
      id: id, // Use a more appropriate prop name, e.g., "orders" instead of "order"
    },
  };

}
