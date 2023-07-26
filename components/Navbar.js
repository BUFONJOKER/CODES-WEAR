import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";

//icons
import { AiOutlineShoppingCart, AiOutlinePlusCircle,
   AiOutlineMinusCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

//navbar component
export default function Navbar() {

  //ref for cart
  const ref = useRef(null);

  //cart click function
  const cartClick = () => {


  }

  //close card if clicked close button
  const closeClick = () => {
    ref.current.classList.remove("show");

  }


  return (
    <>
      <nav
        className="navbar shadow-lg navbar-expand-md sticky-top py-3 navbar-dark"
        style={{ backgroundColor: "black" }}
        id="mainNav"
      >
        <div className="container">
          <Link className="navbar-brand  d-flex align-items-center" href="/">
            <span 
            className="bs-icon-sm 
            bs-icon-circle bs-icon-primary shadow
             d-flex justify-content-center align-items-center me-2 bs-icon">
              <Image src="/logo.jpg" alt="" width={60} height={60}></Image>
            </span>
            <span className="fs-2">Codes Wear</span>
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mt-4">
              <li className="nav-item">
                <Link className="nav-link active fs-4" href="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link fs-4" href="about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-4" href="contact">
                  Contacts
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="dropdown-toggle nav-link fs-4 "
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  href="/"
                >
                  Products{" "}
                </Link>
                <div className="dropdown-menu">
                  <Link className="dropdown-item" href="tshirts">
                    T-Shirts
                  </Link>
                  <Link className="dropdown-item" href="hoodies">
                    Hoodies
                  </Link>
                  <Link className="dropdown-item" href="mugs">
                    Mugs
                  </Link>
                  <Link className="dropdown-item" href="stickers">
                    Stickers
                  </Link>
                </div>
              </li>


              <li className="nav-item">


                <Link onClick={cartClick} 
                className="m-2 nav-link text-white" 
                data-bs-toggle="collapse" 
                href="#collapseExample" 
                aria-expanded="false" 
                aria-controls="collapseExample">
                  <AiOutlineShoppingCart className="fs-1" />
                </Link>


              </li>
              <li className="nav-item fixed-top">

                <div ref={ref} className="collapse" id="collapseExample">

                  <div className="card card-body " style={{ width: "300px", 
                  height: "300px", position: "absolute", 
                  right: 6, backgroundColor: "gray" }}>
                    <h2 className="text-white">Shopping Cart</h2>
                    <ul>

                      <li className="fs-4 text-white">T-Shirts
                        &nbsp;&nbsp;&nbsp;
                        <AiOutlineMinusCircle></AiOutlineMinusCircle>1
                        <AiOutlinePlusCircle></AiOutlinePlusCircle>

                      </li>

                      <li className="fs-4 text-white">Hoodies
                        &nbsp;&nbsp;&nbsp;
                        <AiOutlineMinusCircle></AiOutlineMinusCircle>1
                        <AiOutlinePlusCircle></AiOutlinePlusCircle>
                      </li>

                      <li className="fs-4 text-white">Mugs
                        &nbsp;&nbsp;&nbsp;
                        <AiOutlineMinusCircle></AiOutlineMinusCircle>1
                        <AiOutlinePlusCircle></AiOutlinePlusCircle>
                      </li>

                      <li className="fs-4 text-white">Stickers
                        &nbsp;&nbsp;&nbsp;
                        <AiOutlineMinusCircle></AiOutlineMinusCircle>1
                        <AiOutlinePlusCircle></AiOutlinePlusCircle>
                      </li>
                    </ul>
                    <button type="button"
                     className="btn btn-primary m-3 rounded-pill fs-2">
                      <BsFillBagCheckFill className="mb-3 mx-2">
                        </BsFillBagCheckFill>Checkout</button>
                    <AiFillCloseCircle className="btn btn-hover" 
                    onClick={closeClick} 
                    style={{ position: "absolute", right: 0, width: '70px',
                     height: '70px' }} />


                  </div>

                </div>


              </li>



            </ul>


          </div>



        </div>
      </nav>




    </>
  );
}
