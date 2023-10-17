
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

//icons

import { CiDeliveryTruck } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";


import { BsFillBagCheckFill } from "react-icons/bs";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";


export default function MyAccount({ user, logout }) {



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [zipCode, setZipCode] = useState("")
  const [reload, setReload] = useState(false)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmNewPassword, setConfirmNewPassword] = useState("")
  const router = useRouter()

 


  useEffect(() => {
    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  })



  const fetchUser = async () => {
    if (user.value != null) {

      let res = await fetch(`${process.env.HOST}/api/getuser`, {
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

    else if (e.target.name == "address") {
      setAddress(e.target.value)
    }

    else if (e.target.name == "phone") {
      setPhone(e.target.value)
    }

    else if (e.target.name == "zipCode") {
      setZipCode(e.target.value)
    }

    else if (e.target.name == "password") {
      setPassword(e.target.value)
    }

    else if (e.target.name == "newpassword") {
      setNewPassword(e.target.value)
    }

    else if (e.target.name == "confirmnewpassword") {
      setConfirmNewPassword(e.target.value)
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


    let response = await fetch(`${process.env.HOST}/api/updateuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });


    if (response.ok) {
      toast.success("Delievey Details Updated successfully", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });

      setReload(true)

    }
    else {
      toast.error("Delivery Details not Updated", {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    }
  }

  const handleChangePasswordClick = async () => {
    const data = { email, password }

    let res = await fetch(`${process.env.HOST}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      if (newPassword === confirmNewPassword) {
  
        let data = {
          password: newPassword,
          token: localStorage.getItem('token')
        }


        let response = await fetch(`${process.env.HOST}/api/updateuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          logout()
          toast.error("Password Changed Log in again", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
          });
          setPassword("")
          router.push('/login')

        }

        else {
          toast.error("Password cannot not be Update", {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
          });
        }
      }
      else {
        toast.error("Password and Confirm Password are not same", {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          progress: undefined,
        });
      }
    }

    else {
      toast.error("Password not Correct", {
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
        <h2 className="fw-bold mb-5">1 - Delivery Details</h2>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleChange} required />
          </div>

          <div className="col-md-6">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={email} required readOnly  autoComplete="email" />
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
            <button type="button" className="btn  btn-dark mt-3" style={{ width: '300px' }}
              onClick={handleUpdateClick}
            >

              <CiDeliveryTruck className="fs-1 mx-3" />
              <b>Update Delievery Details</b>
            </button>
          </div>
          <h2 className="fw-bold mt-5">2 - Change Password</h2>
          <div className="col-md-4">
            <label htmlFor="password" className="form-label">Passwod</label>
            <input type="password" className="form-control" id="password" name="password"
              value={password} onChange={handleChange} required  autoComplete="current-password" />
          </div>
          <div className="col-md-4">
            <label htmlFor="newpassword" className="form-label">New Password</label>
            <input type="password" className="form-control" id="newpassword" name="newpassword"
              value={newPassword} onChange={handleChange} required  autoComplete="new-password" />
          </div>
          <div className="col-md-4">
            <label htmlFor="confirmnewpassword" className="form-label">Confirm New Password</label>
            <input type="password" className="form-control" id="confirmnewpassword" name="confirmnewpassword"
              value={confirmNewPassword} onChange={handleChange} required  autoComplete="confirm-newpassword"/>
          </div>

          <button type="button" className="btn  btn-dark mt-5" style={{ width: '200px' }}
            onClick={handleChangePasswordClick}
          >
            <RiLockPasswordFill className="fs-1" />
            <b>Change Password</b>
          </button>

        </form>
        <div >
        </div>
      </div>

    </>
  )
}

