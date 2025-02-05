import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { ProductImageType, urlFor } from '@/sanity/client';
import { makeDescriptionShort } from '@/data/products';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: ProductImageType;
  discountPercentage?: number;
  isNew?: boolean;
  tags?: string[];
}

interface ProductProps {
  products: Product[];
}

const ProductsShop: React.FC<ProductProps> = ({ products }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) handlePageChange(currentPage - 1);
  };

  // Generate array of page numbers
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <section className="flex flex-col gap-4 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.map(product => (
          <ProductCard
            id={product._id}
            key={product._id}
            productImg={urlFor(product.productImage)}
            productName={product.title}
            productDescription={makeDescriptionShort(product.description, 50)}
            productPrice={product.price}
            discount={product.discountPercentage || 10}
            isNew={product.isNew || false}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center gap-2 mt-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className={`h-[60px] w-[60px] rounded-lg flex items-center justify-center  ${
            currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'hover:bg-gray-100'
          }`}
          disabled={currentPage === 1}
        >
          
        </button>

        {/* Page Numbers */}
        {getPageNumbers().map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`h-[60px] w-[60px] rounded-lg flex items-center justify-center font-medium
              ${pageNum === currentPage 
                ? 'bg-amber-600 text-white' 
                : 'hover:bg-gray-100'
              }`}
          >
            {pageNum}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className={`h-[60px] w-[60px] rounded-lg flex items-center justify-center ${
            currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'hover:bg-gray-100'
          }`}
          disabled={currentPage === totalPages}
        >
          
        </button>

        {/* Optional: Next text button */}
        {currentPage !== totalPages && (
          <button
            onClick={handleNext}
            className="h-10 px-4 hover:bg-gray-100 font-medium"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductsShop;