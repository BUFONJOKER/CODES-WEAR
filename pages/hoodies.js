import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

export default function Hoodies({ products }) {
  // console.log(products);

  return (
    <>
      <Head>
        <title>Codes Wear-Hoodies</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Hoodies for Boys
      </h1>

      <div className="container">
        <div className="row">
          {Object.keys(products).map((item) => {
            return (
              <React.Fragment key={products[item]._id}>
                <div className="col-md-6">
                  <div className="card m-3 text-center">
                  <div>
                    <Link
                      href={products[item].title}
                      key={products[item]._id}

                    >
              
                      <Image
                        quality={100}
                        priority
                        src={`${products[item].image}`}
                        width={100}
                        height={300}
                        className="card-img-top"
                        alt="product image"
                        style={{
                          width: "auto",
                          height: "auto",
                        }} // Maintain aspect ratio
                      />
        
                    </Link>
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{products[item].title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                      <p className="fs-3"><b >Price:</b>Rs.{products[item].price}</p>
                      </li>
                      
                      
                      <li className="list-group-item">
                        <b className="fs-3">Color:</b> {
                        products[item].color.includes("Black") && <button className="btn btn-dark rounded-circle m-1  text-dark">
                        B
                      </button>
                      }
                       {
                        products[item].color.includes("Red") && <button className="btn btn-danger rounded-circle m-1  text-danger">
                        R
                      </button>
                      }
                       {
                        products[item].color.includes("Blue") && <button className="btn btn-primary rounded-circle m-1  text-primary">
                        B
                      </button>
                      }
                      </li>
                      <li className="list-group-item">
                        <b className="fs-3">Size:</b> {
                        products[item].size.includes("Small") && <button className="btn btn-primary  m-1 ">
                        Small
                      </button>
                      }
                      {
                        products[item].size.includes("Medium") && <button className="btn btn-primary  m-1 ">
                        Medium
                      </button>
                      }
                      {
                        products[item].size.includes("Large") && <button className="btn btn-primary  m-1 ">
                        Large
                      </button>
                      }
                      </li>
                    </ul>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const products = await Product.find({category:"Hoodies"});
  let hoodies = {};
  for(let item of products){
    if(item.title in hoodies){
            if(!hoodies[item.title].color.includes(item.color) &&
                    item.availableQuantity > 0){
                            hoodies[item.title].color.push(item.color);
            }
            if(!hoodies[item.title].size.includes(item.color) &&
                    item.availableQuantity > 0){
                            hoodies[item.title].size.push(item.size);
            } 
    }

    else{
            hoodies[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQuantity > 0){
                    hoodies[item.title].color = [item.color];
                    hoodies[item.title].size = [item.size];
            }
            
            else{
              hoodies[item.title].color = [];
              hoodies[item.title].size = [];
            }
    }}
  return{
    props:{
      products:JSON.parse(JSON.stringify(hoodies)),
  }
  
}}