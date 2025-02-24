import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cart() {
  const { id } = useParams();
  const [productinfo, setproductinfo] = useState(null);

  console.log("URL id:", id);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://localhost:3000/product");
        const data = res.data;

        console.log("Axios Response:", data);

        const selectedProduct = data.find((product) => product.id === id);
        console.log("Selected Product:", selectedProduct);

        if (selectedProduct) {
          setproductinfo(selectedProduct);
        } else {
          console.error("Product not found");
        }
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!productinfo) {
    return <div>Loading or Product not found...</div>;
  }
  return (
    <div className='flex bg-neutral-400 py-14'>
      <div className='bg-white w-200 h-200 ml-28 rounded-sm shadow-slate-900 shadow-sm p-4'>
        <hr className='w-auto h-1 bg-black mt-10' />
        <div className='flex h-200 w-200 mt-5'>
          <div className='mr-5'>
            <img src={productinfo.image} className='w-40 h-40 ' />
            <div className='border-2 border-gray-400 mt-6 flex justify-center'>
              <button className='w-8 h-8 pb-1 text-xl'>+</button>
              <input type='number' min={1} max={5} placeholder='1' className='w-10 pl-2 mx-4' />
              <button className=' w-8 h-8 pb-1 text-xl'>-</button>
            </div>
          </div>
          <div>
            <h4 className='flex mt-5'>
              {productinfo.title}
              <hr className='w-[1px] mt-1 h-5 ml-10 bg-black' />
              <span className='ml-5'>Delivery by Dec 26</span>
            </h4>
            <p className='text-sm mt-3 text-gray-600'>Category: {productinfo.category}</p>
            <h6 className='mt-3 font-bold'>price:-${productinfo.price}</h6>
            <h6 className='mt-3'>Rating:-⭐⭐⭐⭐⭐</h6>
            <button className='font-bold mt-8 px-2 py-2 rounded-md'>Save For Later</button>
            <button className='font-bold mt-8 px-2 py-2 rounded-md ml-8'>Remove</button>

          </div>
        </div>
      </div>
      {/* second-div */}
      <div className='second-div bg-white w-128 h-128 ml-10 rounded-sm shadow-slate-900 shadow-sm p-4 '>
        <h1 className='flex justify-center items-center font-semibold text-2xl'>Price Details</h1>
        <hr className='w-auto h-1 bg-black mt-6' />
        {/*============= main div of items ==========================*/}
        <div className='mt-5 px-6'>
          <div className='flex justify-between mb-5'>
            <h6>Price (1 item) </h6>
            <span>${productinfo.price}/</span>
          </div>
          <div className='flex justify-between mb-5'>
            <h6>Discount </h6>
            <span>-{productinfo.discount}%</span>
          </div> <div className='flex justify-between mb-5'>
            <h6>Buy more & Save more </h6>
            <span>-15/</span>
          </div> <div className='flex justify-between mb-5'>
            <h6>Delivery charges </h6>
            <span>350 <sapn>Free</sapn></span>
          </div> <div className='flex justify-between mb-5'>
            <h6>Secured Packaging Fee </h6>
            <span>$1.8/</span>
          </div>
          <hr className='w-auto h-1 bg-black mt-6' />
          <div className='flex justify-between font-bold mt-5'>
            <h6>Total Amount</h6>
            <span>{productinfo.price}/ only</span>
          </div>
        </div>
      </div>
    </div>
  )
}
