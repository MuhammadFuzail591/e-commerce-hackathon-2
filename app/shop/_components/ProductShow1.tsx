import React, { useState } from 'react';
import { Star, Plus, Minus, ShoppingCart, RefreshCcw } from 'lucide-react';

import { AiFillInstagram, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

import Image from 'next/image';
import { makeDescriptionShort } from '@/data/products';
import { urlFor } from '@/sanity/client';


const ProductShow1 = ({ product }) => {
  
  const [quantity, setQuantity] = useState(1);
  console.log(product)
  const [selectedImage, setSelectedImage] = useState(urlFor(product.productImage));

  const productImages = [urlFor(product.productImage), urlFor(product.productImage), urlFor(product.productImage)];

  const handleQuantity = (type:string) => {
    setQuantity((prev) => (type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="w-[98%] relative 2xl:w-[1440px] mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-lg relative">
          <Image 
            src={selectedImage} 
            alt="Product" 
            layout="fill" 
            objectFit="contain" 
            className="rounded-lg" 
            priority 
          />
        </div>
        <div className="flex gap-2">
          {productImages.map((img, index) => (
            <div 
              key={index} 
              className={`relative w-16 h-16 cursor-pointer border rounded-md ${
                selectedImage === img ? 'border-blue-500' : 'border-gray-300'
              }`} 
              onClick={() => setSelectedImage(img)}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${index + 1}`} 
                layout="fill" 
                objectFit="cover" 
                className="rounded-md" 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-2xl text-gray-700">Rs. {product.price}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {[...Array(4)].map((_, i) => (
            <Star key={i} size={20} fill="currentColor" />
          ))}
          <Star size={20} className="text-gray-300" />
          <span className="text-sm text-gray-600">5 Customer Reviews</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">{makeDescriptionShort(product.description,100)}</p>

        {/* Quantity and Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center border rounded-md">
            <button onClick={() => handleQuantity('dec')} className="p-2">
              <Minus size={16} />
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button onClick={() => handleQuantity('inc')} className="p-2">
              <Plus size={16} />
            </button>
          </div>

          <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-md">
            <ShoppingCart size={16} /> Add To Cart
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-md">
            <RefreshCcw size={16} /> Compare
          </button>
        </div>

        {/* Product Metadata */}
        <div className="mt-6 text-sm text-gray-600">
          <p><strong>Discount:</strong> {product.dicountPercentage}%</p>
          <p><strong>Tags:</strong> {product.tags.join(', ')}</p>

          {/* Social Sharing */}
          <div className="flex gap-4 mt-2">
            <AiFillFacebook className="cursor-pointer text-blue-600 w-[20px] h-[20px]" />
            <AiFillLinkedin className="cursor-pointer text-blue-500 w-[20px] h-[20px]"  />
            <AiFillInstagram className="cursor-pointer text-pink-500 w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow1;
