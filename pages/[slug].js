import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf, BsFillCircleFill } from 'react-icons/bs';
import { BsCartPlus } from 'react-icons/bs';
import Head from 'next/head';
// import mongoose from 'mongoose';
import Product from '@/models/Product';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from 'next/error'

//            PRODUCT PAGE

// slug is dynamic route
export default function Slug({ addToCart, products }) {
  //router declare to get the slug
  const router = useRouter();
  let titleSlug;
  Object.keys(products).map((item) => {
    titleSlug = products[item].title;

  })

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
  var category = "";
  var product_id = ""
  let outOfStock = [];


  Object.keys(products).map((item) => {
    if (products[item].title === slug) {
      product_id = products[item]._id
      image = products[item].image
      description = products[item].description;
      price = products[item].price;
      category = products[item].category;
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
      else {
        outOfStock.push(products[item]._id)
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


    // check if data includes zipcode


    if (Object.keys(data).includes((zipCode))) {

      toast.success('🦄 Delivery Service Available', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {

      toast.error('🦄 Delivery Service Not Available', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  };


  const [cartButtoncanBeClicked, setCartButtonCanBeClicked] = useState(true);

  if (slug != titleSlug) {

    return (
      <>
        <Head>
          <title>Codes Wear - {category} </title>
        </Head>
        <Error statusCode={404} />
      </>
    )


  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Head>
        <title>Codes Wear - {category} </title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        {slug}
      </h1>


      <div className="container d-flex justify-content-center align-items-center mt-5" >
        <div className="row ">
          <div className="col-md-6">
            <div className="card text-center m-3 " >
              <Image
                quality={100}
                priority
                src={image}
             
                width={200}
                height={500}
                className="card-img-top "
                alt="image"
                style={{
                  width: "auto",
                  height: "auto",
                }}
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
                {(Object.keys(products).length === outOfStock.length) &&
                  <h5 className="card-title text-danger fs-2">Out Of Stock!</h5>}
                <p>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <BsStarHalf />
                </p>
                <div className="card-text"><h3>Available Color and Sizes</h3>


                  {color.includes("Red") && (
                    <div className="d-flex align-items-center">
                      <h1>

                        <BsFillCircleFill className='fs-1 text-danger '>B</BsFillCircleFill>

                      </h1>

                      {colorSize[0].size.includes("Small") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Small")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Small</button>}
                      {colorSize[0].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Medium")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)

                      }} type="button" className="btn btn-primary m-1">Medium</button>
                      }
                      {colorSize[0].size.includes("Large") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Large</button>}
                      {colorSize[0].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Red")
                        setCartSize("Extra Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Extra Large</button>}
                    </div>
                  )}

                  {color.includes("Blue") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <BsFillCircleFill className='fs-1 text-primary mt-3'></BsFillCircleFill>



                      </p>
                      {colorSize[1].size.includes("Small") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Small")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Small</button>}
                      {colorSize[1].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Medium")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Medium</button>}
                      {colorSize[1].size.includes("Large") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Large</button>}
                      {colorSize[1].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Blue")
                        setCartSize("Extra Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Extra Large</button>}
                    </div>
                  )}


                  {color.includes("Green") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <BsFillCircleFill className='fs-1 text-success mt-3'></BsFillCircleFill>


                      </p>
                      {colorSize[2].size.includes("Small") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Small")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Small</button>}
                      {colorSize[2].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Medium")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Medium</button>}
                      {colorSize[2].size.includes("Large") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Large</button>}
                      {colorSize[2].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Green")
                        setCartSize("Extra Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Extra Large</button>}
                    </div>
                  )}

                  {color.includes("Yellow") && (
                    <div className="d-flex align-items-center">
                      <p>

                        <BsFillCircleFill className='fs-1 text-success'>B</BsFillCircleFill>
                        <button className="btn btn-warning rounded-circle m-1 fs-4 text-success" disabled>
                          Y
                        </button>

                      </p>
                      {colorSize[3].size.includes("Small") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Small")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Small</button>}
                      {colorSize[3].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Medium")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Medium</button>}
                      {colorSize[3].size.includes("Large") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Large</button>}
                      {colorSize[3].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Yellow")
                        setCartSize("Extra Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Extra Large</button>}
                    </div>
                  )}


                  {color.includes("Black") && (
                    <div className="d-flex align-items-center">
                      <p>
                        <BsFillCircleFill className='fs-1 text-dark mt-3'></BsFillCircleFill>


                      </p>
                      {/* <select className="form-select w-25" aria-label="Select an option"> */}
                      {colorSize[4].size.includes("Small") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Small")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Small</button>}
                      {colorSize[4].size.includes("Medium") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Medium")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Medium</button>}
                      {colorSize[4].size.includes("Large") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Large</button>}
                      {colorSize[4].size.includes("Extra Large") && <button onClick={() => {

                        setCartColor("Black")
                        setCartSize("Extra Large")
                        toast.success('🦄 Color Selected Click Cart Button', {
                          position: "top-center",
                          autoClose: 1000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "colored",
                        });
                        setCartButtonCanBeClicked(false)
                      }} type="button" className="btn btn-primary m-1">Extra Large</button>}
                      {/* </select> */}
                    </div>
                  )}

                </div>

                <button disabled={cartButtoncanBeClicked}
                  onClick={() => {
                    addToCart(slug, 1, price, slug, cartColor, cartSize, product_id);
                    router.push('/checkout')
                  }} className="btn btn-primary m-1">Buy Now</button>



                <button disabled={cartButtoncanBeClicked}
                  onClick={() => {
             
                    addToCart(slug, 1, price, slug, cartColor, cartSize, product_id);
                    toast.success('🦄 Adding to Cart', {
                      position: "top-center",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  }}
                  className="btn btn-primary m-1"
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

              </div>
            </div>
          </div>
        </div>
      </div>


    </>


  );
}

export async function getServerSideProps(context) {
  const res = await Product.find({ title: context.query.slug })

  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {
      products: data,
    },
  };
}

