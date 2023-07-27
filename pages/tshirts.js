import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";


export default function Tshirts() {
  // shirt title
  const [shirtTitle, setShirtTitle] = useState("Grey half sleeve T-shirt");
  return (
    <>
    <Head>
        <title>Codes Wear-T-Shirts</title>
      </Head>
      <h1 className="text-white   fw-bolder fst-italic text-center m-4 fs-1">
        T-Shirts for Boys
      </h1>

      <section className="m-5">
        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                
                
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-2">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }} >
                <Link href={`/${shirtTitle}`}>
                  <Image
                  src="/grey_shirt.jpg"
                  width={100}
                  height={300}
                  className="card-img-top"
                  alt=""
                />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">
                    {shirtTitle}
                  </h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Grey
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b> S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

      );
}
