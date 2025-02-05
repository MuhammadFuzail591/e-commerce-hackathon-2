import React, { useState } from 'react';
import Image from 'next/image';
import { ProductImageType, urlFor } from '@/sanity/client';

// Define the Product interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: ProductImageType;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
}

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<string>('description');

  const productImages: ProductImageType[] = [product.productImage, product.productImage];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {['Description', 'Additional Information', `Reviews [5]`].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab.toLowerCase() ? 'border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'description' && (
          <p className="text-gray-700 leading-7 whitespace-pre-line">{product.description}</p>
        )}

        {activeTab === 'additional information' && (
          <div className="text-gray-600">
            <p><strong>Price:</strong> Rs. {product.price}</p>
            <p><strong>Discount:</strong> {product.discountPercentage}%</p>
            <p><strong>Tags:</strong> {product.tags.join(', ')}</p>
          </div>
        )}

        {activeTab === 'reviews [5]' && (
          <p className="text-gray-600">This product has 5 customer reviews. (Sample content)</p>
        )}
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {productImages.map((img, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
            <Image 
              src={urlFor(img)}
              alt={`Product ${index + 1}`} 
              width={350} 
              height={250} 
              objectFit="contain" 
              className="rounded-md cursor-pointer" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
