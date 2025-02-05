"use client"
import React, { useEffect, useState } from 'react';
import Hero2 from '@/components/Hero2';
import ShopHeader from '@/components/ShopHeader';
import Footer2 from '@/components/Footer2';
import { getData } from '@/data/products';
import ProductsShop from './_components/ProductsShop';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getData("*[_type == 'product']");
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex w-full overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto">
      <Hero2 mainHeading="Shop" subHeading="Home" smallHeading="Shop" />
      <ShopHeader />

      {/* Search Bar */}
      <div className="flex justify-center w-full p-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <ProductsShop products={filteredProducts} />
      <Footer2 />
    </div>
  );
};

export default Shop;
