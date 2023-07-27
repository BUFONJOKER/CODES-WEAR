import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import {BsCartPlus} from 'react-icons/bs';






export default function Slug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="d-flex justify-content-center m-5 text-white">
      <div className="card bg-black text-white" style={{ width: '80%', height: '800px' }}>
        <div className="card-body">
        <Image  src="/hoodies.jpg" width={100} height={200} className="card-img-top" alt="image" />
          <h1>HOODIES</h1>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum veritatis, placeat nesciunt aliquam facilis ut quibusdam ipsa praesentium modi maiores.</p>
          <p  className="card-text"> Rs.100</p>
          <p><AiFillStar/><AiFillStar/><AiFillStar/>
          <AiFillStar/><BsStarHalf/></p>
          <h3>Size</h3>
          <p>
          <button className='btn btn-primary m-1'>S</button>
          <button className='btn btn-primary m-1'>M</button>
          <button className='btn btn-primary m-1'>L</button>
          <button className='btn btn-primary m-1'>XL</button>
          </p>
          <h3>Color</h3>
          <p>
          <button className='btn btn-primary m-1'>Red</button>
          <button className='btn btn-primary m-1'>Black</button>
          <button className='btn btn-primary m-1'>Green</button>
          <button className='btn btn-primary m-1'>Blue</button>
          </p>
          
          <button className='btn btn-primary m-1'>Buy Now</button>
          <button className='btn btn-primary'><BsCartPlus className='fs-2'/></button>

        </div>
      </div>
    </div>
  );
}
