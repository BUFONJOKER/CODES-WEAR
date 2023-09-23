import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import { useRouter } from 'next/router'

export default function Login() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleFormChange = (e) => {


    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    console.log("mano")

    const data = { email, password }
    let res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })



    let response = await res.json()

    console.log(response)
    if (response.success) {
      toast.success('🦄 Logged In Successfully', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      setEmail("")
      setPassword("")

      setTimeout(() => {
        router.push('http://localhost:3000')
      }, 1100);


    }

    else {
      toast.error('🦄 Invalid Credentials', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

      setEmail("")
      setPassword("")
    }



  }


  return (
    <>

      <Head>
        <title>Codes Wear-Log In</title>
      </Head>
      <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
        Log In for Codes Wear Account
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
        <section className=" mt-5 mb-5" style={{ backgroundColor: "#121F3E" }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>

                        <form method='POST' className="mx-1 mx-md-4">


                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="email">Email</label>
                              <input onChange={handleFormChange} value={email} type="email" id="email" name='email' className="form-control" />

                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="password">Password</label>
                              <input onChange={handleFormChange} value={password} type="password" id="password" name='password' className="form-control" />

                            </div>
                          </div>



                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={handleFormSubmit} type="button" className="btn btn-primary btn-lg">Log In</button>
                          </div>

                          <div className="d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Do not have an account?</p>
                            <Link href="signup" className="btn btn-outline-danger">Sign up</Link>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <Image width={400} height={400} src="/logo.jpg"
                          className="img-fluid m-5" alt="Sample image" />

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
  // return (
  //   <>
  //     <Head>
  //       <title>Codes Wear-Log In</title>
  //     </Head>
  //     <h1 className="text-white fw-bolder fst-italic text-center m-4 fs-1">
  //       Log In for Codes Wear Account
  //     </h1>
  //     <ToastContainer
  //       position="top-center"
  //       autoClose={1000}
  //       hideProgressBar={false}
  //       newestOnTop={false}
  //       closeOnClick
  //       rtl={false}
  //       pauseOnFocusLoss
  //       draggable
  //       pauseOnHover
  //       theme="dark"
  //     />
  //     <div>
  //       <section className="h-100 gradient-form" style={{ backgroundColor: "#121F3E" }}>
  //         <div className="container py-5 h-100">
  //           <div className="row d-flex justify-content-center align-items-center h-100">
  //             <div className="col-xl-10">
  //               <div className="card rounded-3 text-black">
  //                 <div className="row g-0">
  //                   <div className="col-lg-6">
  //                     <div className="card-body p-md-5 mx-md-4">

  //                       <div className="text-center">
  //                         <Image src="/logo.jpg"
  //                           width={300} height={300} alt="logo" />
  //                         <h4 className="mt-1 mb-5 pb-1">We are The Codes Wear Team</h4>
  //                       </div>

  //                       <form>
  //                         <p>Please login to your account</p>

  //                         <div className="form-outline mb-4">
  //                         <label className="form-label" htmlFor="email">Email</label>
  //                             <input onChange={handleFormChange} value={email} type="email" id="email" name='email' className="form-control" />
  //                         </div>

  //                         <div className="form-outline mb-4">
  //                         <label className="form-label" htmlFor="password">Password</label>
  //                             <input onChange={handleFormChange} value={password} type="password" id="password" name='password' className="form-control" />
  //                         </div>

  //                         <div className="text-center pt-1 mb-5 pb-1">
  //                         <button onClick={handleFormSubmit} type="button" className="btn btn-primary btn-lg">log In</button>
  //                           <a className="text-muted" href="#!">Forgot password?</a>
  //                         </div>

  //                         <div className="d-flex align-items-center justify-content-center pb-4">
  //                           <p className="mb-0 me-2">Do not have an account?</p>
  //                           <Link href="signup" className="btn btn-outline-danger">Sign up</Link>
  //                         </div>

  //                       </form>

  //                     </div>
  //                   </div>


  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // )
}





