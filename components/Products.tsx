"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";
import { ProductImageType, urlFor } from "@/sanity/client";
import { getData, makeDescriptionShort } from "@/data/products";

interface Product {
  productImage: ProductImageType;
  price: number;
  tags: string[];
  discountPercentage: number;
  description: string;
  isNew: boolean;
  _id: string;
  title: string;
}

interface ProductProps {
  isHome: boolean;
}

function Products({ isHome }: ProductProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = isHome
      ? `*[_type == 'product'][0...8]`
      : `*[_type == 'product']`;

    async function fetchProducts() {
      try {
        const productsData = await getData(query);
        console.log(productsData); // Check data in console
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [isHome]);

  return (
    <section className="flex flex-col gap-4 items-center">
      {isHome && (
        <h1 className="font-poppins text-[40px] font-[900] text-secondary">
          Our Products
        </h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
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
      {isHome && (
        <Button
          text="Show More"
          borderClr="border-primary"
          bgColor="bg-transparent"
          textColor="text-primary"
          width="w-[245px]"
          height="h-[48px]"
        />
      )}
    </section>
  );
}

export default Products;
