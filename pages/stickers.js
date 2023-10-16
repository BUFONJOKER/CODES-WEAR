import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";
import { BsFillCircleFill } from 'react-icons/bs';

export default function Stickers({ products }) {


  return (
    <>
      <Head>
        <title>Codes Wear-Stickers</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Stickers for Boys
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
  const products = await Product.find({category:"Stickers"});
  let stickers = {};
  for(let item of products){
    if(item.title in stickers){
            if(!stickers[item.title].color.includes(item.color) &&
                    item.availableQuantity > 0){
                            stickers[item.title].color.push(item.color);
            }
            if(!stickers[item.title].size.includes(item.color) &&
                    item.availableQuantity > 0){
                            stickers[item.title].size.push(item.size);
            } 
    }

    else{
            stickers[item.title] = JSON.parse(JSON.stringify(item));
            if(item.availableQuantity > 0){
                    stickers[item.title].color = [item.color];
                    stickers[item.title].size = [item.size];
            }

            else{
              stickers[item.title].color = [];
              stickers[item.title].size = [];
            }
    }}
  return{
    props:{
      products:JSON.parse(JSON.stringify(stickers)),
  }
  
}}