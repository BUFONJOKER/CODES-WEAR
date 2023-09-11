import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { BsCartPlus } from 'react-icons/bs';
import Head from 'next/head';
// import mongoose from 'mongoose';
import Product from '@/models/Product';
import Link from 'next/link';

//            PRODUCT PAGE

// slug is dynamic route
export default function Slug({ addToCart, products }) {
  //router declare to get the slug
  const router = useRouter();

  //get the slug from router
  const { slug } = router.query;


  let colorSize = [{ color: 'Red', size: [] },
  { color: 'Blue', size: [] },
  { color: 'Green', size: [] },
  { color: 'Yellow', size: [] },
  { color: 'Black', size: [] }];

  var image = "";
  var description = "";
  var price = 0;
  var color = [];

  Object.keys(products).map((item) => {
    if (products[item].title === slug) {
      image = products[item].image
      description = products[item].description;
      price = products[item].price;
      if (products[item].availableQuantity > 0) {
        if (products[item].color === 'Red') {
          color.push("Red");
          colorSize[0].size.push(products[item].size);
        }
        else if (products[item].color === 'Blue') {
          color.push("Blue");

          colorSize[1].size.push(products[item].size);
        }
        else if (products[item].color === 'Green') {
          color.push("Green");
          colorSize[2].size.push(products[item].size);
        }
        else if (products[item].color === 'Yellow') {
          color.push("Yellow");
          colorSize[3].size.push(products[item].size);
        }
        else if (products[item].color === 'Black') {
          color.push("Black");
          colorSize[4].size.push(products[item].size);
        }
      }
    }
  });

  // color and size to show on cart 
  const [cartColor, setCartColor] = useState("");
  const [cartSize, setCartSize] = useState("");

  const handleCartClick = (size, color) => {
    setCartColor(color);
    setCartSize(size);
  }






  //state for zipcode
  const [zipCode, setZipCode] = useState();

  //state for delivery service available or not
  const [available, setAvailable] = useState(null);

  //state for check button clickable or not
  const [notClickable, setNotClickable] = useState(true);

  //handle zipcode input change
  const handleZipCodeInput = (e) => {
    //make check button clickable
    setNotClickable(false);

    //set the zipcode
    setZipCode(e.target.value);
  };

  //handle zipcode check button
  const handleZipCodeCheck = async () => {
    //fetch the zipcode from api
    const res = await fetch('/api/productzipcode');

    //get the data from api
    const data = await res.json();

    //check the zipcode is available or not
    //from the data in api
    if (data.includes(parseInt(zipCode))) {
      //set the available state
      setAvailable(true);
    } else {
      //set the available state
      setAvailable(false);
    }
  };


  const [cartButtoncanBeClicked, setCartButtonCanBeClicked] = useState(true);

  return (
    <>
      <Head>
        <title>Codes Wear - T-Shirts ({slug}) </title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        {slug}
      </h1>


      <div className="container d-flex justify-content-center align-items-center mt-5" >
        <div className="row">
          <div className="col-md-6">
            <div className="card text-center m-3" >
              <Image
                src={image}
                width={200}
                height={500}
                className="card-img-top"
                alt="image"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h1 className='m-3'>{slug}</h1>
              <p className="card-text m-3">
                {description}
              </p>
              <div className="card-body">
                <h5 className="card-title">Rs.{price}</h5>
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </p>
                <div className="card-text"><h3>Color</h3>


                  {color.includes("Red") && (
                    <div className="d-flex align-items-center">
                      <h1>

                        <p className="btn btn-danger rounded-circle m-1 fs-4 text-danger">
                          R
                        </p>

                      </h1>

                      {colorSize[0].size.includes("Small") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Small")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Small</button>}
                      {colorSize[0].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Medium")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)

                      }} type="button" className="btn btn-primary">Medium</button>
                      }
                      {colorSize[0].size.includes("Large") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Large</button>}
                      {colorSize[0].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Extra Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Extra Large</button>}
                    </div>
                  )}

                  {color.includes("Blue") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <button className="btn btn-primary rounded-circle m-1 fs-4 text-primary">
                          B
                        </button>

                      </p>
                      {colorSize[1].size.includes("Small") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Small")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Small</button>}
                      {colorSize[1].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Medium")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Medium</button>}
                      {colorSize[1].size.includes("Large") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Large</button>}
                      {colorSize[1].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Extra Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Extra Large</button>}
                    </div>
                  )}


                  {color.includes("Green") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <button className="btn btn-success rounded-circle m-1 fs-4 text-success">
                          Gamart
                        </button>

                      </p>
                      {colorSize[2].size.includes("Small") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Small")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Small</button>}
                      {colorSize[2].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Medium")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Medium</button>}
                      {colorSize[2].size.includes("Large") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Large</button>}
                      {colorSize[2].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Extra Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Extra Large</button>}
                    </div>
                  )}

                  {color.includes("Yellow") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <button className="btn btn-warning rounded-circle m-1 fs-4 text-success">
                          Y
                        </button>

                      </p>
                      {colorSize[3].size.includes("Small") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Small")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Small</button>}
                      {colorSize[3].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Medium")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Medium</button>}
                      {colorSize[3].size.includes("Large") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Large</button>}
                      {colorSize[3].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Extra Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Extra Large</button>}
                    </div>
                  )}


                  {color.includes("Black") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <button className="btn btn-dark rounded-circle m-1 fs-4 text-dark">
                          B
                        </button>

                      </p>
                      {/* <select className="form-select w-25" aria-label="Select an option"> */}
                      {colorSize[4].size.includes("Small") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Small")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Small</button>}
                      {colorSize[4].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Medium")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Medium</button>}
                      {colorSize[4].size.includes("Large") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Large</button>}
                      {colorSize[4].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Extra Large")
                        alert("Added to cart")
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary">Extra Large</button>}
                      {/* </select> */}
                    </div>
                  )}

                </div>

                <Link href="checkout"><button disabled={cartButtoncanBeClicked}
                  onClick={() => {
                    addToCart(slug, 1, price, slug, cartColor, cartSize);
                  }} className="btn btn-primary m-1">Buy Now</button></Link>

                
                  
                <button disabled={cartButtoncanBeClicked}
                  onClick={() => {
                    addToCart(slug, 1, price, slug, cartColor, cartSize);
                  }}
                  className="btn btn-primary"
                >
                  <BsCartPlus className="fs-2" />
                </button>

                <h3 className="mt-2">Zip Code</h3>
                <input
                  onChange={handleZipCodeInput}
                  style={{ width: '100px' }}
                  type="number"
                  name="zipcode"
                  id="zipcode"
                />

                <button
                  onClick={handleZipCodeCheck}
                  disabled={notClickable}
                  className="btn btn-primary text-Black m-2 fw-bold rounded-pill"
                >
                  Check
                </button>
                {available === true ? (
                  <p className="fw-bold fs-3 text-success">
                    Delivery service Available
                  </p>
                ) : null}

                {available === false ? (
                  <p className="fw-bold fs-3 text-danger">
                    Delivery service Not Available
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  );
}

export async function getServerSideProps(context) {
  const res = await Product.find()
  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {
      products: data,
    },
  };
}

