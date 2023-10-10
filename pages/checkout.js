
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";





export default function Checkout({ cart, clearCart, removeFromCart, addToCart, subTotal, orderId, products }) {

  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [province, setProvince] = useState("")
  const [zip, setZip] = useState("")
  const router = useRouter()




  // useEffect to update the disabled state when form inputs change
  useEffect(() => {
    setDisabled(areFieldsEmpty());

    // eslint-disable-next-line
  }, [name, email, address, phone, zip]);

  const areFieldsEmpty = () => {
    return name.trim() === "" || email.trim() === "" || address.trim() === "" || phone.trim() === "" || zip.trim() === "";
  };


  const handleChange = async (e) => {


    if (e.target.name == "name") {
      setName(e.target.value)

      let res = await fetch('http://localhost:3000/api/myorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      });

      let data = await res.json()

      Object.keys(data.orders).map((item) => {

        setEmail(data.orders[item].email)
      })



      // let token = localStorage.getItem('token')
      // let data = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY)
      // const{email} = data
      // setEmail(data)
    }

    if (e.target.name == "address") {



      setAddress(e.target.value)
    }
    else if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    else if (e.target.name == "zip") {
      setZip(e.target.value)

      let zip = e.target.value
      const res = await fetch('/api/productzipcode');

      //get the data from api
      const data = await res.json();

      if (zip.length == 5) {
        if (Object.keys(data).includes((zip))) {
          setCity(data[zip][0])
          setProvince(data[zip][1])

        }
        else {
          setCity("")
          setProvince("")
        }

      }
      else {
        setCity("")
        setProvince("")
      }


    }

    if (name != "" && phone != "" && email != "" && address != "" && zip != "") {
      setDisabled(false)

    }
    else {
      setDisabled(true)
    }


  }



  const handleCheckoutClick = async (e) => {


    e.preventDefault();

    let products_id = []
    Object.keys(cart).map((item) => {
      products_id.push(cart[item].product_id)
    })
    // console.log(products_id)
    const data = { name, email, phone, address, zip, city, province, cart, products_id, subTotal }
    // console.log(data)
    let priceTempered = false;
    Object.keys(cart).map((item) => {
      let productName = cart[item].name
      let productSize = cart[item].size
      let productVariant = cart[item].variant
      let price = cart[item].price

      Object.keys(products).map((item) => {
        if (products[item].title == productName
          && products[item].size == productSize
          && products[item].color == productVariant) {
          if (products[item].price != price) {
            priceTempered = true
            toast.error('❌ Product Price is tempered', {
              position: "top-center",
              autoClose: 500, // Adjust the duration as needed
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            clearCart()

          }
        }
      })


    })




    if (priceTempered === false) {
      // console.log(priceTempered)
      await fetch('http://localhost:3000/api/pretransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      // console.log("MANI")

      router.push("/payment")
    }
    else {
      console.log('Error:');
    }



  }





  return (
    <>
      {/* <ToastContainer
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
      /> */}

      <Head>
        <title>Codes Wear-Checkout</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Checkout
      </h1>
      <div className="container text-white mt-5 mb-5">



        {Object.keys(cart).length == 0 && <h1 className=" mt-3 p-3 text-center bg-dark">First Add Items in Cart Then You Can Checkout</h1>}



        {Object.keys(cart).length != 0 && <form className="row g-3">




          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Phone Number</label>
            <input type="number" className="form-control" id="inputPhone" name="phone" value={phone} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="number" className="form-control" id="inputZip" name="zip" value={zip} onChange={handleChange} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={address} onChange={handleChange} required />
          </div>



          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input name="city" value={city} onChange={handleChange} type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">Province</label>
            <input name="province" value={province} onChange={handleChange} type="text" className="form-control" id="inputProvince" />
          </div>



          <div className="col-12">


            <button type="button" className="btn  btn-dark" style={{ width: '100px' }}
              disabled={disabled} onClick={handleCheckoutClick}
            >
              <BsFillBagCheckFill className="fs-1 " />
              Checkout
            </button>



          </div>
        </form>}
        <div >
        </div>
      </div>


      <div className="container text-white bg-dark p-5">

        <h1 className="text-center">CART</h1>
        {Object.keys(cart).length == 0 && <h1 className="text-center">Cart is Empty</h1>}


        <ol>
          {Object.keys(cart).length > 0 &&
            Object.keys(cart).map((item) => (
              <React.Fragment key={item}>

                <li className="fs-2 text-white">{cart[item].name}

                  <p className="fs-2 text-white"><b>Color: </b> {cart[item].variant}
                    &nbsp;&nbsp;
                    <b>Size: </b>{cart[item].size}
                    &nbsp;&nbsp;&nbsp;&nbsp;


                    <button className="btn fs-2 text-white bg-dark">
                      <AiOutlineMinusCircle onClick={() => {
                        removeFromCart(item, 1, cart[item].price,
                          cart[item].name, cart[item].variant, cart[item].size)
                      }}>
                      </AiOutlineMinusCircle>
                    </button>
                    &nbsp;{cart[item].quantity}&nbsp;

                    <button className="btn fs-2 text-white bg-dark">
                      <AiOutlinePlusCircle onClick={() => {
                        addToCart(item, 1, cart[item].price,
                          cart[item].name, cart[item].variant, cart[item].size)
                      }}></AiOutlinePlusCircle>
                    </button>

                  </p>

                  <div className="fs-1 text-white">Subtotal:{cart[item].quantity * cart[item].price}</div>
                </li>
              </React.Fragment>
            ))
          }
        </ol>


        <p className="fs-1 text-white">Total: Rs.{subTotal}</p>



      </div>



    </>
  )
}


export async function getServerSideProps(context) {

  const res = await fetch('http://localhost:3000/api/getproducts');

  //get the data from api
  const data = await res.json();

  // console.log(data.products)

  //return the data as props
  return {
    props: {
      products: data.products,
    },
  };
}

