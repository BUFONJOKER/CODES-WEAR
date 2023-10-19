import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useState, r } from "react";


//icons
import {
  AiOutlineShoppingCart, AiOutlinePlusCircle,
  AiOutlineMinusCircle, AiFillCloseCircle
} from "react-icons/ai";

import { MdAccountCircle, MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsCartXFill, BsFillBagCheckFill } from "react-icons/bs";
import { ro } from "date-fns/locale";
import { useRouter } from "next/router";

//navbar component
export default function Navbar({ logout, user, cart, addToCart,
  removeFromCart, clearCart }) {
  const router = useRouter()

  //ref for cart
  const ref = useRef(null);

  let total = 0;
  Object.keys(cart).map((item) => {
    total += cart[item].quantity * cart[item].price
  })


  //cart click function
  const cartClick = () => {

  }

  //close card if clicked close button
  const closeClick = () => {
    ref.current.classList.remove("show");

  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };



  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };



  const [hover, setHover] = useState(false)


  const handleMenuItemClick = (e) => {
    e.preventDefault()
    // Prevent the click event from reaching the parent (menu)
    e.stopPropagation();

    // Handle the click action for the menu item here
    // For example, you can navigate to a different page
  };


  const handleLogOutClick = () => {
    router.push('/login')
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
              className={`navbar-toggler ${mobileMenuOpen ? 'collapsed' : ''}`}
              data-bs-target="#navcol-1"
              onClick={toggleMobileMenu}

            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`} id="navcol-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link passHref className="nav-link active fs-2 mx-3" href="/" onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>

                <li className="nav-item fs-2 mx-3">
                  <Link className="nav-link fs-2 " href="/about" onClick={closeMobileMenu}>
                    About
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link fs-2 mx-3" href="/contact" onClick={closeMobileMenu}>
                    Contacts
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="dropdown-toggle nav-link fs-2 mx-2"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    href="/"

                  >
                    Products{" "}
                  </Link>
                  <div className="dropdown-menu bg-secondary">
                    <Link className="dropdown-item text-black fw-bold" href="/tshirts" onClick={closeMobileMenu}>
                      T-Shirts
                    </Link>
                    <Link className="dropdown-item text-black fw-bold" href="/hoodies" onClick={closeMobileMenu}>
                      Hoodies
                    </Link>
                    <Link className="dropdown-item text-black fw-bold" href="/mugs" onClick={closeMobileMenu}>
                      Mugs
                    </Link>
                    <Link className="dropdown-item text-black fw-bold" href="/stickers" onClick={closeMobileMenu}>
                      Stickers
                    </Link>
                  </div>
                </li>

                <li className="nav-item">
                  {user.value &&

                    <Link className="nav-link text-white fs-2 " href="/"  >

                      <div className="dropdown" onClick={handleMenuItemClick} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>

                        <MdAccountCircle className="fs-1 " id="dropdownMenuButton"
                          aria-haspopup="true"
                          aria-expanded={isDropdownOpen} />


                        <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''} bg-secondary `} aria-labelledby="dropdownMenuButton">
                          <button
                            onClick={() => {
                              router.push('/myaccount')
                            }}
                            className="dropdown-item text-black fw-bold"

                          >My Account</button>
                          <button
                            onClick={() => {
                              router.push('/myorders')
                            }}
                            className="dropdown-item text-black fw-bold "

                          >My Orders</button>

                          <button
                            onClick={() => {
                              logout();
                              handleLogOutClick();
                            }}

                            className="dropdown-item text-black fw-bold "

                          >Log Out</button>
                        </div>
                      </div> </Link>

                    // <button type="button" className="btn btn-black fs-3">Log Out</button>
                  }
                  {!user.value &&
                    <Link className="nav-link text-white fs-2" href="/login" onClick={closeMobileMenu}>
                      <button type="button" className="btn btn-primary fs-4">Log In</button>
                    </Link>
                  }

                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-2" href="/adminlogin" onClick={closeMobileMenu}>
                  <MdOutlineAdminPanelSettings className="fs-1" />
                  </Link>
                </li>



                <li className="nav-item">


                  <Link onClick={cartClick}
                    className="nav-link text-white mt-2"
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
                      width: "auto",
                      height: "auto", position: "absolute",
                      right: 6, backgroundColor: "gray",
                      maxHeight: '650px', overflowY: 'scroll'
                    }}>

                      <h2 className="text-white mb-5">Shopping Cart</h2>

                      <ol>
                        {Object.keys(cart).length === 0 && <div className="fs-4 text-white">Cart is empty</div>}

                        {Object.keys(cart).map((item) => {
                          return (
                            <React.Fragment key={item}>
                              <li className="fs-4 text-white">{cart[item].name}
                                <p className="fs-4 text-white"><b>Color: </b> {cart[item].variant}
                                  &nbsp;&nbsp;

                                  <b>Size: </b>{cart[item].size}

                                </p>

                                <p className="fs-4"><b>Quantity:</b>
                                  <button className="btn text-white  fs-4" style={{ backgroundColor: "gray" }}>
                                    <AiOutlineMinusCircle onClick={() => {
                                      removeFromCart(item, 1, cart[item].price,
                                        cart[item].name, cart[item].variant, cart[item].size)
                                    }}>
                                    </AiOutlineMinusCircle>
                                  </button>
                                  {cart[item].quantity}

                                  <button className="btn text-white  fs-4" style={{ backgroundColor: "gray" }}>
                                    <AiOutlinePlusCircle onClick={() => {
                                      addToCart(item, 1, cart[item].price,
                                        cart[item].name, cart[item].variant, cart[item].size)
                                    }}></AiOutlinePlusCircle>
                                  </button>
                                </p>




                                <div className="fs-4 text-white mb-3">Subtotal:{cart[item].quantity * cart[item].price}</div>

                              </li>

                            </React.Fragment>

                          )
                        })}
                      </ol>
                      <p className="fs-1 text-white">Total: Rs.{total}</p>
                      <p className="mt-2">
                        <Link href="/checkout" >
                          <button type="button" className="btn  btn-outline-dark" style={{ width: '100px' }}>
                            <BsFillBagCheckFill className="fs-1 " />
                            Checkout
                          </button>
                        </Link>

                        <button
                          onClick={clearCart}
                          type="button"
                          className="btn  btn-outline-dark  m-3"
                          style={{ width: '150px' }}
                        >
                          <BsCartXFill className="fs-1" />
                          Clear Cart
                        </button>

                      </p>
                      <AiFillCloseCircle className="btn btn-hover"
                        onClick={closeClick}
                        style={{
                          marginTop: "20",
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
