import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";

export default function Hoodies() {
  const [shirtTitle, setShirtTitle] = useState("Black Hoodies");
  return (
    <>
    <Heading heading="-Hoodies"/>
      <h1 className="text-white   fw-bolder fst-italic text-center m-4 fs-1">
        Hoodies
      </h1>

      <section className="m-5">
        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>

                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container m-5">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{ width: "18rem" }}>
                <Link href={`/product/${shirtTitle}`}>
                  <Image
                    src="/hoodies.jpg"
                    width={100}
                    height={250}
                    className="card-img-top"
                    alt=""
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{shirtTitle}</h5>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Price:</b> Rs. 1,550
                  </li>
                  <li className="list-group-item">
                    <b>Color:</b> Black
                  </li>
                  <li className="list-group-item">
                    <b>Size:</b>  S,M,L,XL
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
