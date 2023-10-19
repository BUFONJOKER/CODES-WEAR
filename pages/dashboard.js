import React from 'react'
import Head from "next/head";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { set } from 'date-fns';
import Product from '@/models/Product';

export default function Dashboard({ products }) {


  const [viewProduct, setViewProduct] = useState(false)
  const [addProduct, setAddProduct] = useState(false)

  const router = useRouter()
  const handleViewProductsClick = () => {
    setViewProduct(true)
    setAddProduct(false)
  }

  const handleAddProductsClick = () => {
    setAddProduct(true)
    setViewProduct(false)
  }

  const [selectedSizeOption, setSelectedSizeOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState('')
  const [selectedCategoryOption, setSelectedCategoryOption] = useState('')
  const [filterOption, setFilterOption] = useState('')


  // Function to be called when a radio button is clicked
  const handleSizeRadioButtonClick = (event) => {
    const selectedSizeValue = event.target.value;
    setSelectedSizeOption(selectedSizeValue);



    // Call your custom function here
    // For example:
    // customFunction(selectedValue);
  };
  const handleColorRadioButtonClick = (event) => {
    const selectedColorValue = event.target.value;
    setSelectedColorOption(selectedColorValue);




    // Call your custom function here
    // For example:
    // customFunction(selectedValue);
  };

  const handleCategoryRadioButtonClick = (event) => {
    const selectedCategoryValue = event.target.value;
    setSelectedCategoryOption(selectedCategoryValue);




    // Call your custom function here
    // For example:
    // customFunction(selectedValue);
  };

  const handleFilterOptionClick = (event) => {
    const selectedFilterValue = event.target.value;
    setFilterOption(selectedFilterValue);
  }



  return (
    <>
      <div>
        <Head>
          <title>Codes Wear-Dashboard</title>
        </Head>

        <div className="row">
          <div className="col-sm-3 mb-sm-0 mt-5">
            <div className="card" style={{ width: "300px", height: "500px" }}>
              <div className="card-body">
                <div className="card-body" >
                  <h5 className="card-title">Dashboard</h5>

                  <ul className="list-group list-group-flush ">
                    <li className="list-group-item bg-secondary">
                      <button className='btn btn-dark' onClick={handleViewProductsClick}>View Products</button>
                    </li>
                    <li className="list-group-item bg-secondary">
                      <button className='btn btn-dark' onClick={handleAddProductsClick}>Add Products</button>
                    </li>
                    <li className="list-group-item bg-secondary">
                      <button className='btn btn-dark'>Delete Products</button>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>


          {
            viewProduct && (
              <>
                <div className="container mt-2" style={{ width: '1000px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                  <h1 className='text-white text-center m-3'>All Products Available in Database</h1>

                  <h1 className='text-white'>Filter</h1>


                  <div class="row text-white">

                    <div class="col-md-5">
                      <label class="form-check">
                        <input class="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                          onChange={handleFilterOptionClick}
                          checked={filterOption === 'option1'} />
                        <span class="form-check-label">Filter According to Products Category</span>
                      </label>
                    </div>
                    <div class="col-md-5">
                      <label class="form-check">
                        <input class="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                          onChange={handleFilterOptionClick}
                          checked={filterOption === 'option2'} />
                        <span class="form-check-label">Filter According to Products Color and Size</span>
                      </label>
                    </div>





                  </div>




                  {
                    filterOption === 'option1' ? <>
                      <h2 className='text-white'>Category</h2>


                      <div class="row text-white">

                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option1'} />
                            <span class="form-check-label">T-Shirts</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option2'} />
                            <span class="form-check-label">Hoodies</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio3" value="option3"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option3'} />
                            <span class="form-check-label">Mugs</span>
                          </label>
                        </div>

                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio3" value="option4"
                              onChange={handleCategoryRadioButtonClick}
                              checked={selectedCategoryOption === 'option4'} />
                            <span class="form-check-label">Stickers</span>
                          </label>
                        </div>


                      </div>
                    </> : null}


                  {
                    filterOption === 'option2' ? <>
                      <h2 className='text-white'>Size</h2>


                      <div class="row text-white">

                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio1" value="option1"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option1'} />
                            <span class="form-check-label">Small</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio2" value="option2"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option2'} />
                            <span class="form-check-label">Medium</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group1" id="radio3" value="option3"
                              onChange={handleSizeRadioButtonClick}
                              checked={selectedSizeOption === 'option3'} />
                            <span class="form-check-label">Large</span>
                          </label>
                        </div>


                      </div>

                      <h2 className='text-white'>Color</h2>

                      <div class="row text-white">

                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group2" id="radio1" value="coloroption1"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption1'} />
                            <span class="form-check-label">Red</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group2" id="radio2" value="coloroption2"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption2'} />
                            <span class="form-check-label">Blue</span>
                          </label>
                        </div>
                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group2" id="radio3" value="coloroption3"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption3'} />
                            <span class="form-check-label">Black</span>
                          </label>
                        </div>

                        <div class="col-md-2">
                          <label class="form-check">
                            <input class="form-check-input" type="radio" name="group2" id="radio4" value="coloroption4"
                              onChange={handleColorRadioButtonClick}
                              checked={selectedColorOption === 'coloroption4'} />
                            <span class="form-check-label">Green</span>
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

        </div>



      </div ></>
  )
}


export async function getServerSideProps(context) {
  const res = await Product.find()

  const data = JSON.parse(JSON.stringify(res))
  return {
    props: {
      products: data,
    },
  };
}
