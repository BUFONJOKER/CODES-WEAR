
import React from "react";
import { useState } from "react";
import Link from "next/link";




export default function Checkout({ cart }) {

  const [disabled, setDisabled] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")

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
    // else if (e.target.name == "phone") {
    //   setPhone(e.target.value)
    // }
    else if (e.target.name == "zip") {
      setZip(e.target.value)
    }
setTimeout(() => {
  if (name != "" && email != "" && address != "" && zip != "") {
    setDisabled(false)

  }
  else {
    setDisabled(true)

}}
, 100);
  
    }


  return (
    <>
      <div className="container text-white mt-5 mb-5">
        <h1 className="text-center">Checkout</h1>


        <form className="row g-3">



          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Name</label>
            <input type="text" className="form-control" id="inputEmail4" name="name" value={name} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" name="email" value={email} onChange={handleChange} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={address} onChange={handleChange} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select" defaultValue="Select State" >
              <option value="Select State" disabled hidden>Select State</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Baluchistan">Baluchistan</option>
              <option value="KPK">KPK</option>
            </select>

          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" name="zip" value={zip} onChange={handleChange} />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
          <Link href="payment">
          <button  type="submit" className="btn btn-primary btn-circle btn-lg mt-3" >Checkout</button>
          </Link>
          </div>
        </form>
        <div >
        </div>
      </div>


      <div className="container text-white bg-dark p-5">

      <h1 className="text-center">CART</h1>
        {Object.keys(cart).length == 0 && <h1 className="text-center">Cart is Empty</h1>}

        
        {Object.keys(cart).length > 0 &&
          Object.keys(cart).map((item) => (
            <React.Fragment key={item}>
              
              <h3 className="text-white" key={item}>
                Item Name: {cart[item].name}
              </h3>
              <h3>
                Color: {cart[item].variant}
              </h3>
              <h3>
                Size: {cart[item].size}
              </h3>
              <h3>
                Quantity: {cart[item].quantity}
              </h3>
              <h3>
                SubTotal: {cart[item].quantity * cart[item].price}
              </h3>
              <h3>
                Product_id: {cart[item].product_id}
              </h3>


            </React.Fragment>
          ))
        }

        

      </div>



    </>
  )
}


