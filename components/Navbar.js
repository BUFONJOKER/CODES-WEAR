import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";


//icons
import {
  AiOutlineShoppingCart, AiOutlinePlusCircle,
  AiOutlineMinusCircle, AiFillCloseCircle
} from "react-icons/ai";
import{MdAccountCircle} from "react-icons/md";
import { BsCartXFill, BsFillBagCheckFill } from "react-icons/bs";

//navbar component
export default function Navbar({ cart, addToCart, subTotal,
  removeFromCart, clearCart, quantity }) {
 
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

      <div className="sticky-top" style={{ backgroundColor: "black" }}>

        <header className="" style={{ backgroundColor: "black" }}>
          <Link className="nav-link active fs-1 text-white text-center" href="/">

            <Image className="mx-3" src="/logo.jpg" alt="" width={60} height={60}></Image>

            Codes Wear
          </Link>
        </header>

        <nav
          className="navbar shadow-lg navbar-expand-md navbar-dark"

          id="mainNav"
        >
          <div className="container text-center">

            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active fs-1 m-3" href="/">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-1 m-3" href="about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-1 m-3" href="contact">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="dropdown-toggle nav-link fs-1 m-3"
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
                <Link className="nav-link text-white m-4" href="login"><MdAccountCircle className="fs-1"/></Link>
                </li>


                <li className="nav-item">

                  
                  <Link onClick={cartClick}
                    className="nav-link text-white m-4"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample">
                    <AiOutlineShoppingCart className="fs-1" />
                  </Link>


                </li>
                <li className="nav-item fixed-top">

                  <div ref={ref} className="collapse" id="collapseExample">

                    <div className="card card-body" style={{
                      width: "500px",
                      height: "300px", position: "absolute",
                      right: 6, backgroundColor: "gray"
                    }}>
                      <h2 className="text-white mb-5">Shopping Cart</h2>


                      <ul>
                        {Object.keys(cart).length === 0 && <div className="fs-4 text-white">Cart is empty</div>}

                        {Object.keys(cart).map((item) => {
                          return (
                            <React.Fragment key={item}>
                              <li className="fs-4 text-white">{cart[item].name} {cart[item].variant}{cart[item].size}
                                &nbsp;&nbsp;&nbsp;&nbsp;

                                <AiOutlineMinusCircle style={{ cursor: 'pointer' }} onClick={() => {
                                  removeFromCart(item, 1, cart[item].price,
                                    cart[item].name, cart[item].variant, cart[item].size)
                                }}>
                                </AiOutlineMinusCircle>
                                &nbsp;{quantity}&nbsp;
                                <AiOutlinePlusCircle style={{ cursor: 'pointer' }} onClick={() => {
                                  addToCart(item, 1, cart[item].price,
                                    cart[item].name, cart[item].variant, cart[item].size)
                                }}></AiOutlinePlusCircle>


                                <div className="fs-4 text-white">Subtotal:{subTotal}</div>
                              </li>
                            </React.Fragment>
                          )
                        })}
                      </ul>
                      <p className="mt-2">
                        <Link href="checkout" >
                          <button type="button" className="btn btn-primary" style={{ width: '100px' }}>
                            <BsFillBagCheckFill className="fs-1 " />
                            Checkout
                          </button>
                        </Link>
                        <button onClick={clearCart} type="button" className="btn btn-primary m-3" style={{ width: '150px' }}>
                          <BsCartXFill className="fs-1" />
                          Clear Cart
                        </button></p>
                      <AiFillCloseCircle className="btn btn-hover"
                        onClick={closeClick}
                        style={{
                          position: "absolute", right: 0, width: '70px',
                          height: '70px'
                        }} />



                    </div>

                  </div>


                </li>



              </ul>


            </div>



          </div>
        </nav>
      </div>




    </>
  );
}
