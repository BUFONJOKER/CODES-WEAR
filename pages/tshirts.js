import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Product from "@/models/Product";
import { BsFillCircleFill } from 'react-icons/bs';

export default function Tshirts({ products }) {

  // console.log(products);
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
                      <p className="fs-2"><b >Price:</b>Rs.{products[item].price}</p>
                      </li>
                      
                      <li className="list-group-item">
                        <b className="fs-2">Color:</b> {
                        products[item].color.includes("Black") && 
                        <BsFillCircleFill className='fs-1 text-dark'></BsFillCircleFill>
                      }
                       {
                        products[item].color.includes("Red") && 
                        <BsFillCircleFill className='fs-1 text-danger mx-2'></BsFillCircleFill>
                      }
                       {
                        products[item].color.includes("Blue") && 
                        <BsFillCircleFill className='fs-1 text-primary mx-2'></BsFillCircleFill>
                      }
                      </li>
                      <li className="list-group-item">
                        <b className="fs-2">Size:</b> {
                        products[item].size.includes("Small") && 
                        <button  className="bg-dark m-1 rounded text-white fs-4 " disabled>
                        Small
                      </button>
                      }
                      {
                        products[item].size.includes("Medium") && 
                        <button className="bg-dark m-1 rounded text-white fs-4 " disabled>
                        Medium
                      </button>
                      }
                      {
                        products[item].size.includes("Large") && 
                        <button  className="bg-dark m-1 rounded text-white fs-4 " disabled>
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

            else{
              tshirts[item.title].color = [];
              tshirts[item.title].size = [];
            }
    }}
  return{
    props:{
      products:JSON.parse(JSON.stringify(tshirts)),
  }
  
}}