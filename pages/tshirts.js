import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

export default function Tshirts({ products }) {

  console.log(products);
  return (
    <>
      <Head>
        <title>Codes Wear-T-Shirts</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        T-Shirts for Boys
      </h1>

      <div className="container">
        <div className="row">
          {Object.keys(products).map((item) => {
            return (
              <React.Fragment key={products[item]._id}>
                <div className="col-md-6">
                  <div className="card m-3 text-center">
                    <Link
                      legacyBehavior
                      href={`/${products[item].title}`}
                      passHref
                    >
                      <a
                        rel="preload"
                        as="image"
                        href={products[item].image}
                      >
                        <Image
                          src={`${products[item].image}`}
                          width={100}
                          height={300}
                          className="card-img-top"
                          alt=""
                          style={{
                            width: "auto",
                            height: "auto",
                          }} // Maintain aspect ratio
                        />
                      </a>
                    </Link>

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
  const products = await Product.find({category:"T-shirts"});
  let tshirts = {};
  for(let item of products){
    if(item.title in tshirts){
            if(!tshirts[item.title].color.includes(item.color) &&
                    item.availableQuantity > 0){
                            tshirts[item.title].color.push(item.color);
            }
            if(!tshirts[item.title].size.includes(item.color) &&
                    item.availableQuantity > 0){
                            tshirts[item.title].size.push(item.size);
            } 
    }

    else{
            tshirts[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQuantity > 0){
                    tshirts[item.title].color = [item.color];
                    tshirts[item.title].size = [item.size];
            }
    }}
  return{
    props:{
      products:JSON.parse(JSON.stringify(tshirts)),
  }
  
}}