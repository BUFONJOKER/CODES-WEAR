import React from 'react'
import Image from 'next/image'
import Order from "@/models/Order";

export default function MyOrder({ orders}) {
  console.log(orders.products)
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden text-white mt-5 mb-5">
        <div className="container  mx-auto text-white">
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-10 col-md-12 mb-4 mb-lg-0">
              <h2 className="text-sm  text-white">BRAND NAME</h2>
              <h1 className="text-white font-weight-bold text-white">Order ID: #{orders._id}</h1>
              <div className="d-flex mb-4">
                <h3 className="flex-grow-1 text-indigo-500 border-bottom border-indigo-500 py-2 text-lg">Description</h3>
                <h3 className="flex-grow-1 border-bottom border-gray-300 py-2 text-lg">Quantity</h3>
                <h3 className="flex-grow-1 border-bottom border-gray-300 py-2 text-lg">Color</h3>
                <h3 className="flex-grow-1 border-bottom border-gray-300 py-2 text-lg ">Size</h3>
                <h3 className="flex-grow-1 border-bottom border-gray-300 py-2 text-lg">Price</h3>
              </div>
              {
                Object.keys(orders.products).map((item) => {
                  return (
                    <React.Fragment key={orders.products[item]._id}>
                      <div className="row">
                <ul className="col mx-5">
                  <li>{orders.products[item].name}</li>
                
                </ul>

                <ul className="col mx-5">
                  <li>{orders.products[item].quantity}</li>
                 
                </ul>
                <ul className="col mx-4">
                  <li>{orders.products[item].variant}</li>
                 
                </ul>
                <ul className="col mx-5">
                  <li>{orders.products[item].size}</li>
                 
                </ul>
               
                <ul className="col mx-3">
                  <li>Rs. {orders.products[item].price}</li>
               
                </ul>
              </div>  

              
                    </React.Fragment>
                  )
                })
              }
         
             
            </div>
            {/* <div className="col-lg-6 col-md-12">
              <Image src="/joker_sticker.jpg" alt="Picture of the author" width={300} height={500} />
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}



export async function getServerSideProps(context) {
  
    const orders = await Order.findById(context.query.id);
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
  
}
