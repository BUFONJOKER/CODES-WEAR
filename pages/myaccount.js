
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//icons
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import { RiAccountPinCircleLine } from "react-icons/ri";

import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function MyAccount({ user }) {



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [reload, setReload] = useState(false)

  useEffect(() => {
    fetchUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload])



  const fetchUser = async () => {
    if (user.value != null) {

      let res = await fetch('http://localhost:3000/api/getuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: localStorage.getItem('token') }),
      });

      let data = await res.json()
      let myuser = data.user


      if (name == "" && email == "" && address == "" && phone == "" && zipCode == "") {
        setName(myuser.name)
        setEmail(myuser.email)
        setAddress(myuser.address)
        setPhone(myuser.phone)
        setZipCode(myuser.zipCode)

      }
    }
  }



  const handleChange = async (e) => {


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

    else if (e.target.name == "zipCode") {
      setZipCode(e.target.value)
    }
  }


  const handleUpdateClick = async () => {
   
    let data = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      zipCode: zipCode,
      token: localStorage.getItem('token')
    }


    let response = await fetch('http://localhost:3000/api/updateuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });


    if (response.ok) {
      toast.success("User Updated successfully", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });

      setReload(true)

    }
    else {
      toast.error("User not Updated", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
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
        <title>Codes Wear-My Account</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Update Account
      </h1>
      <div className="container text-white mt-5 mb-5">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="inputPhone"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              label="Phone number"
              placeholder={`Enter your 11-digit phone number without starting "0"`} />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputZipCode" className="form-label">Zip Code</label>
            <input type="number" className="form-control" id="inputZipCode" name="zipCode" value={zipCode} onChange={handleChange} required />
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Address</label>
            <textarea type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" value={address} onChange={handleChange} required />
          </div>
          <div className="col-12">
            <button type="button" className="btn  btn-dark" style={{ width: '100px' }}
              onClick={handleUpdateClick}
            >
              <RiAccountPinCircleLine className="fs-1" />
              Update Account
            </button>
          </div>
        </form>
        <div >
        </div>
      </div>

    </>
  )
}

