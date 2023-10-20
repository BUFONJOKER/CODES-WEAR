import React from 'react'
import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { set } from 'date-fns';
import Product from '@/models/Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from '@/models/Order';
import { trusted } from 'mongoose';
import User from '@/models/User';
import Image from 'next/image';

export default function Dashboard({ products,orders,users }) {

  
  const [viewProduct, setViewProduct] = useState(false)
  const [addProduct, setAddProduct] = useState(false)
  const [deleteProduct, setDeleteProduct] = useState(false)
  const [selectedSizeOption, setSelectedSizeOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState('')
  const [selectedCategoryOption, setSelectedCategoryOption] = useState('')
  const [filterOption, setFilterOption] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [availableQuantity, setAvailableQuantitiy] = useState('')
  const [viewOrders, setViewOrders] = useState(false)
  const [viewUsers, setViewUsers] = useState(false)

  const router = useRouter()
  const handleViewProductsClick = () => {
    setViewProduct(true)
    setAddProduct(false)
    setDeleteProduct(false)
    setViewOrders(false)
    setViewUsers(false)
  }

  const handleAddProductsClick = () => {
    setAddProduct(true)
    setViewProduct(false)
    setDeleteProduct(false)
    setViewOrders(false)
    setetViewUsers(false)
  }

  const handleDeleteProductClick = () => {
    setDeleteProduct(true)
    setViewProduct(false)
    setAddProduct(false)
    setViewOrders(false)
    setViewUsers(false)

  }

  const handleViewOrdersClick =  ()=>{
    setViewOrders(true)
    setDeleteProduct(false)
    setViewProduct(false)
    setAddProduct(false)
    setViewUsers(false)
   }

   const handleViewUsersClick =  ()=>{
    setViewUsers(true)

    setViewOrders(false)
    setDeleteProduct(false)
    setViewProduct(false)
    setAddProduct(false)
   }

  // Function to be called when a radio button is clicked
  const handleSizeRadioButtonClick = (event) => {
    const selectedSizeValue = event.target.value;
    setSelectedSizeOption(selectedSizeValue);

  };
  const handleColorRadioButtonClick = (event) => {
    const selectedColorValue = event.target.value;
    setSelectedColorOption(selectedColorValue);

  };

  const handleCategoryRadioButtonClick = (event) => {
    const selectedCategoryValue = event.target.value;
    setSelectedCategoryOption(selectedCategoryValue);

  };

  const handleFilterOptionClick = (event) => {
    const selectedFilterValue = event.target.value;
    setFilterOption(selectedFilterValue);
  }

  const handleDeleteButtonClick = async () => {

    const product = {
      title: title,
      category: category,
      size: size,
      color: color,
      price: Number(price),
      availableQuantity: Number(availableQuantity),
    }


    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/deleteproduct`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })


    let response = await res.json()
   


    if (response.message === "Product deleted successfully") {
      //add token to local storage
      toast.success('🦄 Product deleted successfully', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })

    }




    else {
      toast.error('🦄 Product could not be deleted', {
        position: "top-center",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })


    }





    setTitle('')
    setCategory('')
    setSize('')
    setColor('')
    setPrice('')
    setAvailableQuantitiy('')
  }

  const handleInputChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }

    else if (e.target.name === 'category') {
      setCategory(e.target.value)
    }

    else if (e.target.name === 'size') {
      setSize(e.target.value)
    }

    else if (e.target.name === 'color') {
      setColor(e.target.value)
    }

    else if (e.target.name === 'price') {
      setPrice(e.target.value)
    }

    else if (e.target.name === 'availableQuantity') {
      setAvailableQuantitiy(e.target.value)
    }
  }

  





  return (
    <>
      <div>
        <Head>
          <title>Codes Wear-Dashboard</title>
        </Head>

        <div className="row">
          <div className="col-sm-3 mb-sm-0">
            <div className="card" style={{ width: "300px", height: "1000px",backgroundColor:'#101010' }}>
              <div className="card-body">
                <div className="card-body" >
                  <h5 className="card-title fs-1 m-3 text-white">Dashboard</h5>

                  
                      <button className='btn btn-dark fs-3 mt-3' 
                       onClick={handleViewProductsClick}>View Products</button>
                       
                   
                      <button className='btn btn-dark fs-4 mt-3' onClick={handleDeleteProductClick}>Delete Products</button>
             

                   
                      <button className='btn btn-dark fs-3 mt-3' onClick={handleViewOrdersClick}>View Orders</button>
                
                    
                   
                      <button className='btn btn-dark fs-3 mt-3' onClick={handleViewUsersClick}>View Users</button>
              


             
                </div>
              </div>
            </div>
          </div>

                {
                  viewProduct === false && addProduct === false && deleteProduct === false && viewOrders === false && viewUsers === false ? <div className="container mt-2" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <h1 className='text-white text-center m-3'>Dashboard of CodesWear</h1>

                  <Image src='/dashboard.jpg' alt='dashboard image' width={900} height={900} quality={100} />

                </div>:null
                }

          {
            viewProduct && (
              <>
                <div className="container mt-2" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <h1 className='text-white text-center m-3'>All Products Available in Database</h1>

                  <h1 className='text-white'>Filter</h1>


                  <div className="row text-white">

                    <div className="col-md-5">
                      <label className="form-check">
                        <input className="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                          onChange={handleFilterOptionClick}
                          checked={filterOption === 'option1'} />
                        <span className="form-check-label">Filter According to Products Category</span>
                      </label>
                    </div>
                    <div className="col-md-5">
                      <label className="form-check">
                        <input className="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                          onChange={handleFilterOptionClick}
                          checked={filterOption === 'option2'} />
                        <span className="form-check-label">Filter According to Products Color and Size</span>
                      </label>
                    </div>





                  </div>




                  {
                    filterOption === 'option1' ? <>
                      <h2 className='text-white'>Category</h2>


                      <div className="row text-white">

                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option1'} />
                            <span className="form-check-label">T-Shirts</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option2'} />
                            <span className="form-check-label">Hoodies</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio3" value="option3"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option3'} />
                            <span className="form-check-label">Mugs</span>
                          </label>
                        </div>

                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio3" value="option4"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option4'} />
                            <span className="form-check-label">Stickers</span>
                          </label>
                        </div>


                      </div>
                    </> : null}


                  {
                    filterOption === 'option2' ? <>
                      <h2 className='text-white'>Size</h2>


                      <div className="row text-white">

                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option1'} />
                            <span className="form-check-label">Small</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option2'} />
                            <span className="form-check-label">Medium</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group1" id="radio3" value="option3"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option3'} />
                            <span className="form-check-label">Large</span>
                          </label>
                        </div>


                      </div>

                      <h2 className='text-white'>Color</h2>

                      <div className="row text-white">

                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group2" id="radio1" value="coloroption1"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption1'} />
                            <span className="form-check-label">Red</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group2" id="radio2" value="coloroption2"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption2'} />
                            <span className="form-check-label">Blue</span>
                          </label>
                        </div>
                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group2" id="radio3" value="coloroption3"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption3'} />
                            <span className="form-check-label">Black</span>
                          </label>
                        </div>

                        <div className="col-md-2">
                          <label className="form-check">
                            <input className="form-check-input" type="radio" name="group2" id="radio4" value="coloroption4"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption4'} />
                            <span className="form-check-label">Green</span>
                          </label>
                        </div>

                      </div></>
                      : null
                  }






                  <table className="table table-hover table-dark">
                    <thead>
                      <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Sr.</th>
                        <th scope="col">Category</th>
                        <th scope="col">Title</th>
                        <th scope="col">Size</th>
                        <th scope="col">Color</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>

                    <tbody>




                      {
                        Object.keys(products).map((key, index) => {
                          return (
                            <tr key={index}>


                              {selectedColorOption === ''
                                && selectedSizeOption === '' && selectedCategoryOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}

                              {selectedColorOption === ''
                                && selectedSizeOption === '' && selectedCategoryOption === 'option1'
                                && products[key].category === 'T-shirts' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedColorOption === ''
                                && selectedSizeOption === '' && selectedCategoryOption === 'option2'
                                && products[key].category === 'Hoodies' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedColorOption === ''
                                && selectedSizeOption === '' && selectedCategoryOption === 'option3'
                                && products[key].category === 'Mugs' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedColorOption === ''
                                && selectedSizeOption === '' && selectedCategoryOption === 'option4'
                                && products[key].category === 'Stickers' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}





                              {selectedColorOption === 'coloroption1' && products[key].color === 'Red'
                                && selectedSizeOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}

                              {selectedColorOption === 'coloroption2' && products[key].color === 'Blue'
                                && selectedSizeOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}

                              {selectedColorOption === 'coloroption3' && products[key].color === 'Black'
                                && selectedSizeOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}

                              {selectedColorOption === 'coloroption4' && products[key].color === 'Green'
                                && selectedSizeOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedSizeOption === 'option1' && products[key].size === 'Small'
                                && selectedColorOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedSizeOption === 'option1' && products[key].size === 'Small'
                                && products[key].color === 'Red' && selectedColorOption === 'coloroption1' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option1' && products[key].size === 'Small'
                                && products[key].color === 'Blue' && selectedColorOption === 'coloroption2' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option1' && products[key].size === 'Small'
                                && products[key].color === 'Black' && selectedColorOption === 'coloroption3' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option1' && products[key].size === 'Small'
                                && products[key].color === 'Green' && selectedColorOption === 'coloroption4' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}





                              {selectedSizeOption === 'option2' && products[key].size === 'Medium'
                                && selectedColorOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedSizeOption === 'option2' && products[key].size === 'Medium'
                                && products[key].color === 'Red' && selectedColorOption === 'coloroption1' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option2' && products[key].size === 'Medium'
                                && products[key].color === 'Blue' && selectedColorOption === 'coloroption2' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option2' && products[key].size === 'Medium'
                                && products[key].color === 'Black' && selectedColorOption === 'coloroption3' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option2' && products[key].size === 'Medium'
                                && products[key].color === 'Green' && selectedColorOption === 'coloroption4' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}







                              {selectedSizeOption === 'option3' && products[key].size === 'Large'
                                && selectedColorOption === '' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td>

                                </> : null}


                              {selectedSizeOption === 'option3' && products[key].size === 'Large'
                                && products[key].color === 'Red' && selectedColorOption === 'coloroption1' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option3' && products[key].size === 'Large'
                                && products[key].color === 'Blue' && selectedColorOption === 'coloroption2' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option3' && products[key].size === 'large'
                                && products[key].color === 'Black' && selectedColorOption === 'coloroption3' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}

                              {selectedSizeOption === 'option4' && products[key].size === 'Large'
                                && products[key].color === 'Green' && selectedColorOption === 'coloroption4' ?
                                <>
                                  <td>{index + 1}</td>
                                  <td>{products[key].category}</td>
                                  <td>{products[key].title}</td>
                                  <td>{products[key].size}</td>
                                  <td>{products[key].color}</td>
                                  <td>{products[key].price}</td>
                                  <td>{products[key].availableQuantity}</td></> : null}
                            </tr>
                          )
                        })
                      }



                    </tbody>

                  </table>
                </div>

              </>
            )
          }


          {
            addProduct ? <div className="col-sm-8">
              <div className="card" style={{ backgroundColor: '#1b1b1b' }}>
                <div className="card-body text-white">
                  <h5 className="card-title">Add Products</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div> : null
          }


          {
            deleteProduct ?
              <>
                <div className="container mt-2 text-white" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <h1 className='text-center mt-2'>Delete Products</h1>
                  <h2 className='mt-2'>Enter Product Information</h2>
                  <div className="container">
                    <label className='mt-2' htmlFor="inputTitle">Title</label>
                    <input type="text" className="form-control mt-2" id="inputTitle" aria-describedby="emailHelp"
                      name='title' onChange={handleInputChange} value={title} />
                    <label className='mt-2' htmlFor="inputCategory">Category</label>
                    <input type="text" className="form-control mt-2" id="inputCategory" aria-describedby="emailHelp"
                      name='category' onChange={handleInputChange} value={category} />
                    <label className='mt-2' htmlFor="inputSize">Size</label>
                    <input type="text" className="form-control mt-2" id="inputSize" aria-describedby="emailHelp"
                      name='size' onChange={handleInputChange} value={size} />
                    <label className='mt-2' htmlFor="inputColor">Color</label>
                    <input type="text" className="form-control mt-2" id="inputColor" aria-describedby="emailHelp"
                      name='color' onChange={handleInputChange} value={color} />
                    <label className='mt-2' htmlFor="inputPrice">Price</label>
                    <input type="number" className="form-control mt-2" id="inputPrice" aria-describedby="emailHelp"
                      name='price' onChange={handleInputChange} value={price} />
                    <label className='mt-2' htmlFor="inputAvailableQuantity">Available Quantity</label>
                    <input type="number" className="form-control mt-2" id="inputAvailableQuantity" aria-describedby="emailHelp"
                      name='availableQuantity' onChange={handleInputChange} value={availableQuantity} />
                    <button type="submit" className="btn btn-primary mt-3" onClick={handleDeleteButtonClick}>Delete</button>
                  </div>
                </div>
              </>

              : null
          }

          {
            viewOrders ?
            
            
           <>
            <div className="container mt-2 text-white" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            
            <h1 className='m-5 text-center'>Orders Available in Database</h1>
            
            
            
            
            <table className="table table-hover table-dark">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Sr.</th>
                <th scope="col">_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
              
                <th scope="col">Address</th>
                
                <th scope="col">Zip</th>
                <th scope="col">Amount</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

            <tbody>

              {
                Object.keys(orders).map((key, index) => {
                  return (
                    <tr key={index}>
                        <>
                          <td>{index + 1}</td>
                          <td>{orders[key]._id}</td>
                          <td>{orders[key].name}</td>
                          <td>{orders[key].email}</td>
                        
                          <td>{orders[key].address}</td>
                         
                          <td>{orders[key].zip}</td>
                         
                          <td>{orders[key].amount}</td>
                          <td>{orders[key].status}</td>

                        </>               
                    </tr>
                  )
                })
              }
            </tbody>
          </table> </div>
          </>  :null}




          {
            viewUsers ?
            
            
            <div className="container mt-2 text-white" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            
            <h1 className='m-5 text-center'>Users Available in Database</h1>
            
            
            
            
            <table className="table table-hover table-dark">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Sr.</th>
                <th scope="col">_ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>                              
                <th scope="col">Address</th>
                <th scope="col">Phone</th>                
                <th scope="col">Zip</th>
                
              </tr>
            </thead>

            <tbody>

              {
                Object.keys(users).map((key, index) => {
                  return (
                    <tr key={index}>
                        <>
                          <td>{index + 1}</td>
                          <td>{users[key]._id}</td>
                          <td>{users[key].name}</td>
                          <td>{users[key].email}</td>                        
                          <td>{users[key].address}</td>
                          <td>{users[key].phone}</td>
                          <td>{users[key].zipCode}</td>
                          

                        </>               
                    </tr>
                  )
                })
              }
            </tbody>
          </table> </div>  :null}
        </div>



      </div ></>
  )
}


export async function getServerSideProps(context) {
  const res_products = await Product.find()
  const data_products = JSON.parse(JSON.stringify(res_products))

  const res_orders = await Order.find()
  const data_orders = JSON.parse(JSON.stringify(res_orders))

  const res_users = await User.find()
  const data_users = JSON.parse(JSON.stringify(res_users))
  return {
    props: {
      products: data_products,
      orders:data_orders,
      users:data_users,
    },
  };
}
