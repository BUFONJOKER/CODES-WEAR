
import React from "react";
import { useState } from "react";
import Link from "next/link";

//icons
import {
  AiOutlineShoppingCart, AiOutlinePlusCircle,
  AiOutlineMinusCircle, AiFillCloseCircle
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsCartXFill, BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function Checkout({ cart, removeFromCart, addToCart, subTotal, orderId }) {

  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const router = useRouter()
  const [done, setDone] = useState()


  // console.log("cart" + Object.keys(cart).length)


  
  // useEffect to update the disabled state when form inputs change
  useEffect(() => {
    setDisabled(areFieldsEmpty());

    // eslint-disable-next-line
  }, [name, email, address, phone, zip]);

  const areFieldsEmpty = () => {
    return name.trim() === "" || email.trim() === "" || address.trim() === "" || phone.trim() === ""  || zip.trim() === "";
  };


  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value)
    }
    else if (e.target.name == "email") {
      setEmail(e.target.value)
    }
    else if (e.target.name == "address") {
      setAddress(e.target.value)
    }
    else if (e.target.name == "phone") {
      setPhone(e.target.value)
    }
    else if (e.target.name == "zip") {
      setZip(e.target.value)
    }
  
      if (name != "" && phone!="" &&  email != "" && address != "" && zip != "") {
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
    const data = { name, email, address, cart, products_id, subTotal }

    await fetch('http://localhost:3000/api/pretransaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });



    // console.log("data sent to pretransaction api")

    router.push("/payment")


  }





  return (
    <>
      <Head>
        <title>Codes Wear-Checkout</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Log In for Codes Wear Account
      </h1>
      <div className="container text-white mt-5 mb-5">
        <h1 className="text-center">Checkout</h1>

        { Object.keys(cart).length == 0 && <h1 className=" mt-3 p-3 text-center bg-dark">First Add Items in Cart Then You Can Checkout</h1>}



        { Object.keys(cart).length != 0 && <form className="row g-3">

        


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
            <input type="text" className="form-control" id="inputZip" name="zip" value={zip} onChange={handleChange} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={address} onChange={handleChange} required />
          </div>



          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" defaultValue="Select State" >
              <option value="Select State" disabled hidden>Select State</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Baluchistan">Baluchistan</option>
              <option value="KPK">KPK</option>
            </select>

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

                {/* <li className="text-white" key={item}>
                Item Name: {cart[item].name}
              </li>
              <li>
                Color: {cart[item].variant}
              </li>
              <li>
                Size: {cart[item].size}
              </li>
              <li>
                Quantity: {cart[item].quantity}
              </li>
              <li>
                SubTotal: {cart[item].quantity * cart[item].price}
              </li>
              <li>
                Product_id: {cart[item].product_id}
              </li>
       
 */}


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


