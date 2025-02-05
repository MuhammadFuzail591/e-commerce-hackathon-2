import React from 'react';
import ProductCard from '../../../components/ProductCard';
import { makeDescriptionShort } from '@/data/products';
import { ProductImageType, urlFor } from '@/sanity/client';

// Product Interface
interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew: boolean;
  productImage: ProductImageType;
}

// Props Interface for RelatedProducts
interface RelatedProductsProps {
  relatedProducts: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ relatedProducts }) => {
  return (
    <div className="max-w-[100%] mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <ProductCard
            id={product._id}
            key={product._id}
            productImg={urlFor(product.productImage)}
            productName={product.title}
            productDescription={makeDescriptionShort(product.description, 50)}
            productPrice={product.price}
            discount={product.discountPercentage || 0}
            isNew={product.isNew}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 border rounded-md text-gray-800 hover:bg-gray-100 transition">
          Show More
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
