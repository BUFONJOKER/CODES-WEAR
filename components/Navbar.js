import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav
      className="navbar shadow-lg rounded-pill navbar-expand-md sticky-top py-3 navbar-dark"
      style={{ backgroundColor: "#121F3E" }}
      id="mainNav"
    >
      <div className="container">
        <Link className="navbar-brand  d-flex align-items-center" href="/">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
            <Image src="/logo.jpg" alt="" width={50} height={50}></Image>
          </span>
          <span>CodesWear</span>
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
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link active" href="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" href="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">
                Contacts
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="dropdown-toggle nav-link"
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
              </div>
            </li>
          </ul>

          <li className="nav-item m-3">
            <Link className="btn btn-primary shadow" role="button" href="/">
              Sign up
            </Link>
          </li>
          <li className="nav-item mb-3">
            <Link className="nav-link text-white" href="/">
              <AiOutlineShoppingCart className="fs-1" />
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
}
