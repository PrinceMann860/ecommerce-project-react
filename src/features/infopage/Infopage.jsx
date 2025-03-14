import React, { useEffect, useState } from 'react'
import { PiTruck } from "react-icons/pi";
import { MdAttachMoney } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsStarFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Infopage = () => {
  const { id } = useParams();
  const [productinfo, setproductinfo] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [userInput, setUserInput] = useState(1);

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
          setTotalPrice(selectedProduct.price);
        } else {
          console.error("Product not found");
        }
      } catch (err) {
        console.log("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);
  function handlecartclick(){
    dispatch({type:'increament'})
    dispatch({type:'add_to_cart', payload:productinfo})
    
  }
  // Handle quantity change and price calculation
  const handleChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    setUserInput(quantity);
    if (productinfo) {
      setTotalPrice(quantity * productinfo.price); // Update total price based on quantity
    }
  };

  if (!productinfo) {
    return <div>Loading or Product not found...</div>;
  }
  const mrp = parseInt((productinfo.price) / (1 - (productinfo.discount / 100)))
  return (
    <div className='m-0 p-0 max-w-screen'>
      <div className='block lg:flex min-w-screen'>
        <div className='w-full lg:w-1/2'>
          <img src={productinfo.image} alt="Product img" className='m-24 w-[60%] h-auto' />
        </div>
        <div className='text-left w-full lg:w-1/2 lg:m-10 p-10'>
          <h1 className='text-2xl font-bold mb-4'>{productinfo.title}</h1>
          <p className='mb-2'>{productinfo.description}</p>
          <p className='mb-2'>Ratings</p>
          <p className='mb-2'>{productinfo.category}</p>
          <span className='text-2xl'>
            <p className='inline text-red-600'>-{productinfo.discount}%</p>
            <p className='inline text-black'>${totalPrice}</p>
          </span>
          <p className='mb-4'>MRP ${mrp}<br /> Inclusive of all taxes</p>
          <div className='flex justify-around mb-4'>
              <Link to={'/page1'}><div className='text-center'><PiTruck size={40} className='mx-auto' />Cash On Delivery</div></Link>
              <Link to={'/page2'}><div className='text-center'><MdAttachMoney size={40} className='mx-auto' />30 day return & replacement</div></Link>
              <Link to={'/page3'}><div className='text-center'><RiSecurePaymentLine size={40} className='mx-auto' />Secure Payments</div></Link>
          </div>
          <p className='mb-2'>Product warranty</p>
          <p className='mb-2'>Shipping Information</p>
          <p className='mb-2'>availability status</p>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-lg font-medium">
              Quantity
            </label>
            <input type="number" id="quantity" min="1" max={5} value={userInput} onChange={handleChange} defaultValue={1} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className='flex justify-around w-[300px]'>
          <Link to={`/Buy/${productinfo.id}`}>
          <button className="bg-amber-400 text-black px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300">
            Buy Now
          </button>
          </Link>
          <Link to={`/cart/${productinfo.id}`}>
            <button className="bg-amber-400 text-black px-6 py-3 rounded-lg hover:bg-amber-500 transition duration-300">
              Add To Cart
            </button>
          </Link>
          </div>
        </div>
      </div>
      <div className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div> <h3 className="text-lg font-semibold">reviewerName</h3>
                  <p className="text-gray-600">reviewerEmail</p>
                  <p className="text-gray-600">comment</p>
                  <p className="text-gray-600">review date</p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <span>
                  <BsStarFill className='text-yellow-300 inline' />
                  <BsStarFill className='text-yellow-300 inline' />
                  <BsStarFill className='text-yellow-300 inline' />
                  <BsStarFill className='text-yellow-300 inline' />
                  <BsStarFill className='text-yellow-300 inline' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infopage;
