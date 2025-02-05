import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id: string;
  productImg: string;
  productName: string;
  productDescription: string;
  productPrice: number;
  discount: number;
  isNew: boolean;
}

function ProductCard({
  id,
  productImg,
  productName,
  productDescription,
  productPrice,
  discount,
  isNew,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      name: productName,
      price: productPrice,
      image: productImg,
      quantity: 1,
    });
  };

  return (
    <div className=" shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_7px_10px_rgba(0,0,0,0.08)] cursor-pointer rounded-lg max-h-[446px] max-w-[285px]">
      <div className="flex flex-col md:flex gap-1 rounded-lg relative group">
        <div className="relative w-[285px] h-[301px] overflow-hidden">
          <Image
            className="rounded-t-lg object-cover"
            src={productImg}
            alt={productName}
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 285px"
          />
        </div>
        <span
          className={`absolute top-4 right-4 font-poppins text-[16px] font-semibold text-white ${
            isNew === true ? "bg-newBg" : "bg-discountBg"
          } w-[48px] h-[48px] rounded-full flex items-center justify-center`}
        >
          {isNew == true ? "New" : discount + "%"}
        </span>
        <h2 className="ml-4 font-poppins text-[24px] font-semibold text-proheading">
          {productName}
        </h2>
        <p className="ml-4 font-poppins text-[16px] font-medium text-prodesc">
          {productDescription}
        </p>
        <p className="ml-4 mb-4 font-poppins text-[20px] font-semibold text-proheading">
          PKR {productPrice}
        </p>

        <div className="invisible group-hover:visible absolute top-0 left-0 w-full h-full rounded-lg bg-proheading bg-opacity-70 z-10">
          <div className="absolute w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <Button
              text="Add To Cart"
              bgColor="bg-white"
              textColor="text-primary"
              height="w-[202px]"
              width="h-[48px]"
              onclick={handleAddToCart}
            />
            <Link href={`/shop/${productName}`}>
              <Button
                text="View Details"
                bgColor="bg-white"
                textColor="text-primary"
                height="w-[202px]"
                width="h-[48px]"
              />
            </Link>

            <div className="text-white flex gap-4">
              <div className="flex items-center gap-1">
                <Image
                  src="/images/shareIcon.png"
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  alt="share"
                ></Image>
                <h4>Share</h4>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/compareIcon.png"
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  alt="Compare"
                ></Image>
                <h4>Compare</h4>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="/images/Vector.png"
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  alt="Like"
                ></Image>
                <h4>Like</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;