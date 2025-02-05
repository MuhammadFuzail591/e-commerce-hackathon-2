"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const router = useRouter();

  const goToCheckout = () => {
    router.push('/checkout')
  }

  const calculateSubtotal = (item) => item.price * item.quantity;
  const calculateTotal = () => cart.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  return (
    <div className="max-w-[1290px] p-4 flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="w-[100%] border rounded-lg p-4">
            <div className="grid grid-cols-4 gap-4 font-semibold border-b pb-2">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            {cart.map((item, index) => (
              <div key={index} className="w-[100%] grid grid-cols-4 items-center gap-4 py-4 border-b">
                <div className="flex items-center gap-2">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="object-cover rounded" />
                  <span>{item.name}</span>
                </div>
                <span>PKR {item.price.toLocaleString()}</span>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-12 border text-center rounded"
                />
                <div className="flex items-center gap-2">
                  <span>PKR {calculateSubtotal(item).toLocaleString()}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">{<RiDeleteBin5Fill/>}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="w-full md:w-1/3 p-4 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Cart Totals</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>PKR {calculateTotal().toLocaleString()}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span className="text-orange-500">PKR {calculateTotal().toLocaleString()}</span>
          </div>
          <div className="flex items-center flex-col gap-2 mt-4">
            <Button text={"Check Out"} onclick={goToCheckout} classes="text-[#000000] bg-transparent rounded-md h-[20px] flex items-center" borderClr="border-black" textColor="text-black"/>
            <Button text={"Clear Cart"} onclick={clearCart} classes="bg-red-500 rounded-md h-[20px] flex items-center"/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
