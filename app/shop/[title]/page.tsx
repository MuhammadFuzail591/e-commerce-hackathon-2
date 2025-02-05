"use client";
import React, { useEffect, useState } from "react";
import { BreadCrumbs } from "../_components/BreadCrumbs";
import { useParams } from "next/navigation";
import { getSingleProduct } from "@/data/products";
import { ProductImageType } from "@/sanity/client";
import ProductShow1 from "../_components/ProductShow1";
import ProductTabs from "../_components/ProuductTabs";
import { client } from "@/sanity/client"; // Assuming you have this setup
import RelatedProducts from "../_components/RelatedProducts";

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

function ProductDetails() {
  const params = useParams();
  const encodedTitle = params.title;
  const [productData, setProductData] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Handle title parsing
  let title: string;
  if (Array.isArray(encodedTitle)) {
    title = encodedTitle[0];
  } else if (typeof encodedTitle === "string") {
    title = encodedTitle;
  } else {
    throw new Error("Title is missing in the URL");
  }
  const decodedTitle = decodeURIComponent(title);

  // Function to fetch related products
  const fetchRelatedProducts = async (currentProduct: Product) => {
    try {
      // Sanity query to fetch related products based on matching tags
      const query = `*[_type == "product" && title != $title && count((tags[])[@ in $tags]) > 0] {
        title,
        productImage,
        price,
        tags,
        discountPercentage,
        description,
        isNew,
        _id
      } | order(count((tags[])[@ in $tags]) desc)[0...4]`;

      const params = {
        title: currentProduct.title,
        tags: currentProduct.tags
      };

      const related = await client.fetch(query, params);
      setRelatedProducts(related);
    } catch (error) {
      console.error("Failed to fetch related products:", error);
    }
  };

  // Fetch main product data
  useEffect(() => {
    async function getProductData() {
      if (!decodedTitle) return;
      setIsLoading(true);
      try {
        const prod = await getSingleProduct(decodedTitle);
        setProductData(prod);
        if (prod) {
          await fetchRelatedProducts(prod);
        }
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getProductData();
  }, [decodedTitle]);

  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
    { name: `${productData?.title}`, link: `/shop/${productData?.title}` },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex w-[100%] md:w-[80%] overflow-hidden gap-10 flex-col 2xl:w-[1440px] items-center justify-center mx-auto">
      <BreadCrumbs breadcrumb={breadcrumbs} />
      <ProductShow1 product={productData} />
      <ProductTabs product={productData} />
      <RelatedProducts relatedProducts={relatedProducts}/>
    </div>
  );
}

export default ProductDetails;