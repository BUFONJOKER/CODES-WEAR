import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { BsCartPlus } from 'react-icons/bs';
import mongoose from 'mongoose';
import Product from '@/models/Product';

// slug is dynamic route
export default function Slug({ addToCart, products }) {
  //router declare to get the slug
  const router = useRouter();

  //get the slug from router
  const { slug } = router.query;

  // useState for image,description,price







  let colorSize = [{ color: 'Red', size: [] },
                  { color: 'Blue', size: [] },
                  { color: 'Green', size: [] },
                  { color: 'Yellow', size: [] },
                  { color: 'Black', size: [] }];

  var image = "";
  var description = "";
  var price = 0;
  var color = [];

  Object.keys(products).map((item) => {
    if (products[item].title === slug) {
      image = products[item].image
      description= products[item].description;
      price = products[item].price;
      if(products[item].availableQuantity > 0){
        if(products[item].color === 'Red'){
          color.push("Red");
          colorSize[0].size.push(products[item].size);
        }
        else if(products[item].color === 'Blue'){
          color.push("Blue");
          
          colorSize[1].size.push(products[item].size);
        }
        else if(products[item].color === 'Green'){
          color.push("Green");
          colorSize[2].size.push(products[item].size);
        }
        else if(products[item].color === 'Yellow'){
          color.push("Yellow");
          colorSize[3].size.push(products[item].size);
        }
        else if(products[item].color === 'Black'){
          color.push("Black");
          colorSize[4].size.push(products[item].size);
        }
      }
    }
  });

  const [small, setSmall] = useState();
  const [medium, setMedium] = useState();
  const [large, setLarge] = useState();
  const [xlarge, setXlarge] = useState();
  const checkRedSizes=()=>{
    if(colorSize[0].size.includes("Small")){
      setSmall(true);
    }
    if(colorSize[0].size.includes("Medium")){
      setMedium(true);
    }
    if(colorSize[0].size.includes("Large")){
      setLarge(true);
    }
    if(colorSize[0].size.includes("Extra Large")){
      setXlarge(true);
    }
  }

  const checkBlueSizes=()=>{
    if(colorSize[1].size.includes("Small")){
      setSmall(true);
    }
    if(colorSize[0].size.includes("Medium")){
      setMedium(true);
    }
    if(colorSize[1].size.includes("Large")){
      setLarge(true);
    }
    if(colorSize[1].size.includes("Extra Large")){
      setXlarge(true);
    }
  }

  const checkGreenSizes=()=>{
    if(colorSize[2].size.includes("Small")){
      setSmall(true);
    }
    if(colorSize[2].size.includes("Medium")){
      setMedium(true);
    }
    if(colorSize[2].size.includes("Large")){
      setLarge(true);
    }
    if(colorSize[2].size.includes("Extra Large")){
      setXlarge(true);
    }
  }

  const checkYellowSizes=()=>{
    if(colorSize[3].size.includes("Small")){
      setSmall(true);
    }
    if(colorSize[3].size.includes("Medium")){
      setMedium(true);
    }
    if(colorSize[3].size.includes("Large")){
      setLarge(true);
    }
    if(colorSize[3].size.includes("Extra Large")){
      setXlarge(true);
    }
  }

  const checkBlackSizes=()=>{
    if(colorSize[4].size.includes("Small")){
      setSmall(true);
    }
    if(colorSize[4].size.includes("Medium")){
      setMedium(true);
    }
    if(colorSize[4].size.includes("Large")){
      setLarge(true);
    }
    if(colorSize[4].size.includes("Extra Large")){
      setXlarge(true);
    }
  }


  // Assuming product is an array of products
  

  // console.log(colorSizeSlug);

  //state for zipcode
  const [zipCode, setZipCode] = useState();

  //state for delivery service available or not
  const [available, setAvailable] = useState(null);

  //state for check button clickable or not
  const [notClickable, setNotClickable] = useState(true);

  //handle zipcode input change
  const handleZipCodeInput = (e) => {
    //make check button clickable
    setNotClickable(false);

    //set the zipcode
    setZipCode(e.target.value);
  };

  //handle zipcode check button
  const handleZipCodeCheck = async () => {
    //fetch the zipcode from api
    const res = await fetch('/api/productzipcode');

    //get the data from api
    const data = await res.json();

    //check the zipcode is available or not
    //from the data in api
    if (data.includes(parseInt(zipCode))) {
      //set the available state
      setAvailable(true);
    } else {
      //set the available state
      setAvailable(false);
    }
  };

  return (
   <>
     {/* <div className="container">
      <div
        className="card bg-black text-white shadow-lg"
 
      >
        <div className="card-body">
          <Image
            src={image}
            width={100}
            height={500}
            className="card-img-top"
            alt="image"
          />
          <h1>{slug}</h1>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"> Rs.{price}</p>
          <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </p>
          
          <h3>Color</h3>
         
              
          {color.includes("Red") && (
          <div className="d-flex align-items-center">
  <h1>
    
      <p className="btn btn-danger rounded-circle m-1 fs-4 text-danger">
        R
      </p>
  
  </h1>

  <select className="form-select w-25" aria-label="Select an option">
    {colorSize[0].size.includes("Small") && <option selected>Small</option>}
    {colorSize[0].size.includes("Medium") && <option value="1">Medium</option>}
    {colorSize[0].size.includes("Large") && <option value="2">Large</option>}
    {colorSize[0].size.includes("Extra Large") && <option value="3">Extra Large</option>}
  </select>
</div>
  )}
<div className="d-flex align-items-center">
  <p>
    {color.includes("Blue") && (
      <button className="btn btn-primary rounded-circle m-1 fs-4 text-primary">
        B
      </button>
    )}
  </p>
  <select className="form-select w-25" aria-label="Select an option">
    {colorSize[1].size.includes("Small") && <option selected>Small</option>}
    {colorSize[1].size.includes("Medium") && <option value="1">Medium</option>}
    {colorSize[1].size.includes("Large") && <option value="2">Large</option>}
    {colorSize[1].size.includes("Extra Large") && <option value="3">Extra Large</option>}
  </select>
</div>



{color.includes("Green") &&  (
<div className="d-flex align-items-center">
  <p>
   
      <button className="btn btn-success rounded-circle m-1 fs-4 text-success">
        Gamart
      </button>
  
  </p>
  <select className="form-select w-25" aria-label="Select an option">
    {colorSize[2].size.includes("Small") && <option selected>Small</option>}
    {colorSize[2].size.includes("Medium") &&<option value="1">Medium</option>}
    {colorSize[2].size.includes("Large") &&<option value="2">Large</option>}
    {colorSize[2].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
  </select>
</div>
  )}

{color.includes("Yellow") &&  (
<div className="d-flex align-items-center">
  <p>
   
      <button className="btn btn-warning rounded-circle m-1 fs-4 text-success">
        Y
      </button>
  
  </p>
  <select className="form-select w-25" aria-label="Select an option">
    {colorSize[2].size.includes("Small") && <option selected>Small</option>}
    {colorSize[2].size.includes("Medium") &&<option value="1">Medium</option>}
    {colorSize[2].size.includes("Large") &&<option value="2">Large</option>}
    {colorSize[2].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
  </select>
</div>
  )}


{color.includes("Black") &&  (
<div className="d-flex align-items-center">
  <p>
   
      <button className="btn btn-dark rounded-circle m-1 fs-4 text-dark">
        B
      </button>
  
  </p>
  <select className="form-select w-25" aria-label="Select an option">
    {colorSize[4].size.includes("Small") && <option selected>Small</option>}
    {colorSize[4].size.includes("Medium") &&<option value="1">Medium</option>}
    {colorSize[4].size.includes("Large") &&<option value="2">Large</option>}
    {colorSize[4].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
  </select>
</div>
  )}


  
      
          

          <button className="btn btn-primary m-1">Buy Now</button>
          <button
            onClick={() => {
              addToCart(slug, 1, 243, 'MANI', 'Red', 'XL');
            }}
            className="btn btn-primary"
          >
            <BsCartPlus className="fs-2" />
          </button>

          <h3 className="mt-2">Zip Code</h3>
          <input
            onChange={handleZipCodeInput}
            style={{ width: '100px' }}
            type="number"
            name="zipcode"
            id="zipcode"
          />

          <button
            onClick={handleZipCodeCheck}
            disabled={notClickable}
            className="btn btn-primary text-Black m-2 fw-bold rounded-pill"
          >
            Check
          </button>
          {available === true ? (
            <p className="fw-bold fs-3 text-success">
              Delivery service Available
            </p>
          ) : null}

          {available === false ? (
            <p className="fw-bold fs-3 text-danger">
              Delivery service Not Available
            </p>
          ) : null}
        </div>
      </div>
    </div> */}



<div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card mb-3">
        <Image
            src={image}
            width={522}
            height={998}
            className="card-img-top"
            alt="image"
          />          <div class="card-body">
            <h5 class="card-title">Card 1</h5>
            <p class="card-text">This is the content of Card 1.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-3">
        <h1>{slug}</h1>
          <p className="card-text">
            {description}
          </p>
          <div class="card-body">
            <h5 class="card-title">Rs.{price}</h5>
            <p>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </p>
            <p class="card-text"><h3>Color</h3>
         
              
         {color.includes("Red") && (
         <div className="d-flex align-items-center">
 <h1>
   
     <p className="btn btn-danger rounded-circle m-1 fs-4 text-danger">
       R
     </p>
 
 </h1>

 <select className="form-select w-25" aria-label="Select an option">
   {colorSize[0].size.includes("Small") && <option selected>Small</option>}
   {colorSize[0].size.includes("Medium") && <option value="1">Medium</option>}
   {colorSize[0].size.includes("Large") && <option value="2">Large</option>}
   {colorSize[0].size.includes("Extra Large") && <option value="3">Extra Large</option>}
 </select>
</div>
 )}
<div className="d-flex align-items-center">
 <p>
   {color.includes("Blue") && (
     <button className="btn btn-primary rounded-circle m-1 fs-4 text-primary">
       B
     </button>
   )}
 </p>
 <select className="form-select w-25" aria-label="Select an option">
   {colorSize[1].size.includes("Small") && <option selected>Small</option>}
   {colorSize[1].size.includes("Medium") && <option value="1">Medium</option>}
   {colorSize[1].size.includes("Large") && <option value="2">Large</option>}
   {colorSize[1].size.includes("Extra Large") && <option value="3">Extra Large</option>}
 </select>
</div>



{color.includes("Green") &&  (
<div className="d-flex align-items-center">
 <p>
  
     <button className="btn btn-success rounded-circle m-1 fs-4 text-success">
       Gamart
     </button>
 
 </p>
 <select className="form-select w-25" aria-label="Select an option">
   {colorSize[2].size.includes("Small") && <option selected>Small</option>}
   {colorSize[2].size.includes("Medium") &&<option value="1">Medium</option>}
   {colorSize[2].size.includes("Large") &&<option value="2">Large</option>}
   {colorSize[2].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
 </select>
</div>
 )}

{color.includes("Yellow") &&  (
<div className="d-flex align-items-center">
 <p>
  
     <button className="btn btn-warning rounded-circle m-1 fs-4 text-success">
       Y
     </button>
 
 </p>
 <select className="form-select w-25" aria-label="Select an option">
   {colorSize[2].size.includes("Small") && <option selected>Small</option>}
   {colorSize[2].size.includes("Medium") &&<option value="1">Medium</option>}
   {colorSize[2].size.includes("Large") &&<option value="2">Large</option>}
   {colorSize[2].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
 </select>
</div>
 )}


{color.includes("Black") &&  (
<div className="d-flex align-items-center">
 <p>
  
     <button className="btn btn-dark rounded-circle m-1 fs-4 text-dark">
       B
     </button>
 
 </p>
 <select className="form-select w-25" aria-label="Select an option">
   {colorSize[4].size.includes("Small") && <option selected>Small</option>}
   {colorSize[4].size.includes("Medium") &&<option value="1">Medium</option>}
   {colorSize[4].size.includes("Large") &&<option value="2">Large</option>}
   {colorSize[4].size.includes("Extra Large") &&<option value="3">Extra Large</option>}
 </select>
</div>
 )}

</p>

<button className="btn btn-primary m-1">Buy Now</button>
          <button
            onClick={() => {
              addToCart(slug, 1, 243, 'MANI', 'Red', 'XL');
            }}
            className="btn btn-primary"
          >
            <BsCartPlus className="fs-2" />
          </button>

          <h3 className="mt-2">Zip Code</h3>
          <input
            onChange={handleZipCodeInput}
            style={{ width: '100px' }}
            type="number"
            name="zipcode"
            id="zipcode"
          />

          <button
            onClick={handleZipCodeCheck}
            disabled={notClickable}
            className="btn btn-primary text-Black m-2 fw-bold rounded-pill"
          >
            Check
          </button>
          {available === true ? (
            <p className="fw-bold fs-3 text-success">
              Delivery service Available
            </p>
          ) : null}

          {available === false ? (
            <p className="fw-bold fs-3 text-danger">
              Delivery service Not Available
            </p>
          ) : null}
          </div>
        </div>
      </div>
    </div>
  </div>


   </>

    
  );
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3000/api/getproducts');
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}


// export async function getServerSideProps(context) {
//   if(!mongoose.connections[0].readyState){
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   }

//   let product = await Product.findOne({slug:context.params.slug});
//   let variants = await Product.find({title:product.title});
//   let colorSizeSlug = {};
  
// }