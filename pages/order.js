import React from 'react'
import Image from 'next/image'

export default function Order() {
  return (
    <div>
      <section class="text-gray-600 body-font overflow-hidden text-white mt-5 mb-5">
        <div class="container px-5 py-24 mx-auto text-white">
          <div class="row justify-content-center align-items-center ">
            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h2 class="text-sm  text-white">BRAND NAME</h2>
              <h1 class="text-white font-weight-bold mt-2 mb-4 text-white">Animated Night Hill Illustrations</h1>
              <div class="d-flex mb-4">
                <h3 class="flex-grow-1 text-indigo-500 border-bottom border-indigo-500 py-2 text-lg">Description</h3>
                <h3 class="flex-grow-1 border-bottom border-gray-300 py-2 text-lg">Quantity</h3>
                <h3 class="flex-grow-1 border-bottom border-gray-300 py-2 text-lg">Total</h3>
              </div>
              <div className="row">
                <ul className="col mx-4">
                  <li>Shirt</li>
                
                </ul>
                <ul className="col mx-5">
                  <li>1</li>
                 
                </ul>
                <ul className="col">
                  <li>1250</li>
               
                </ul>
              </div>
         
              <div class="d-flex align-items-center">
                <span class="font-weight-bold h2 text-white "> Total: Rs.1250</span>
                <button class="btn btn-primary fs-5 fw-bold  text-white mx-5">Track Order</button>
          
                
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <Image src="/joker_sticker.jpg" alt="Picture of the author" width={300} height={500} />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
