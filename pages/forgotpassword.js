import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect } from 'react';


export default function ForgotPassword() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

//   useEffect(() => {
//     if(localStorage.getItem('token')){
//       router.push('http://localhost:3000')
//     }
//   }, [router])

  const handleFormChange = (e) => {

    if (e.target.name === 'name') {
      setName(e.target.value)
    }
    else if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const data = { name, email, password }
    await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })


    toast.success('🦄 Your Account has been Created', {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
    setName("")
    setEmail("")
    setPassword("")
  }


  return (
    <>

      <Head>
        <title>Codes Wear-Forgot Password</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Forgot Password
      </h1>
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
      <div>
        <section className=" mt-5 mb-5" >
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>

                        <form method='POST' className="mx-1 mx-md-4">

                        

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="email">Email</label>
                              <input onChange={handleFormChange} value={email} type="email" id="email" name='email' className="form-control" />

                            </div>
                          </div>
                   
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={handleFormSubmit} type="button" className="btn btn-dark btn-lg">Forgot Password</button>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Image width={400} height={400} src="/logo.jpg"
                          className="img-fluid m-5" alt="Sample image"
                          style={{
                            width: "auto",
                            height: "auto",
                          }} quality={100}
                          priority  />
                 

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div></>
  )
}
