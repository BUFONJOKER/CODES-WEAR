import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function Tshirts({ products }) {

  return (
    <>
      <Head>
        <title>Codes Wear-T-Shirts</title>
      </Head>
      <h1 className="text-white   fw-bolder fst-italic text-center m-4 fs-1">
        T-Shirts for Boys
      </h1>



      {products.map((item) => {
        return (
          <React.Fragment key={item._id}>
            <div className="container d-flex justify-content-center align-items-center" >

              <div
                className="card w-50 m-3 text-center"

              >
                <Link
                  legacyBehavior
                  href={`/${item.title}`}
                  passHref
                >
                  <a
                    rel="preload"
                    as="image"
                    href={`${item.image}`}
                  >
                    <Image
                      src={`${item.image}`}
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
                  <h5 className="card-title">{item.title}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item"
                    key={`${item._id}-price`}
                  >
                    <b>Price:</b> {item.price}
                  </li>
                  <li
                    className="list-group-item"
                    key={`${item._id}-color`}
                  >
                    <b>Color:</b> {item.color}
                  </li>
                  <li
                    className="list-group-item"
                    key={`${item._id}-size`}
                  >
                    <b>Size:</b> {item.size}
                  </li>
                </ul>
              </div>


            </div>
          </React.Fragment>
        );
      })}


    </>

  );
}


export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/getproducts");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}