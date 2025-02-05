"use client"
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';
import React from 'react';
import { useForm } from 'react-hook-form';
interface FormData {
  firstName: string;
  lastName: string;
  companyName?: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  zipCode: string;
  phone: string;
  email: string;
  additionalInfo?: string;
  paymentMethod: string;
}

const Form = () => {
  const { cart } = useCart();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Order Data:', data);
    console.log(errors)
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-[1242px] mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[20px] lg:flex-row">
        <div className="flex-1 flex flex-col gap-[20px]">
          <h2 className="font-poppins text-[24px] font-semibold">Billing details</h2>

          <div className="flex gap-4">
            <input {...register('firstName', { required: 'First Name is required' })} placeholder="First Name" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
            <input {...register('lastName', { required: 'Last Name is required' })} placeholder="Last Name" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          </div>

          <input {...register('companyName')} placeholder="Company Name (Optional)" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('country', { required: 'Country is required' })} placeholder="Country" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('streetAddress', { required: 'Street Address is required' })} placeholder="Street Address" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('city', { required: 'City is required' })} placeholder="Town / City" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('province', { required: 'Province is required' })} placeholder="Province" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('zipCode', { required: 'ZIP Code is required' })} placeholder="ZIP Code" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('phone', { required: 'Phone is required' })} placeholder="Phone" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <input {...register('email', { required: 'Email is required' })} placeholder="Email Address" className="w-full h-[75px] border border-[#9F9F9F] rounded-md pl-4" />
          <textarea {...register('additionalInfo')} placeholder="Additional Information" className="w-full h-[120px] border border-[#9F9F9F] rounded-md pl-4 py-4" />
        </div>

        <div className="w-full lg:w-[400px] flex flex-col gap-[20px] border-l pl-6">
          <h3 className="font-poppins text-[20px] font-semibold">Product Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>Rs. {item.price * item.quantity}</span>
            </div>
          ))}

          <div className="font-bold text-xl flex justify-between">
            <p>Total:</p>
            <strong className='text-[#B88E2F]'>Rs.{cartTotal}</strong>
          </div>

          <div className="flex flex-col gap-4">
            <label>
              <input type="radio" value="bank" {...register('paymentMethod', { required: 'Payment method is required' })} /> Direct Bank Transfer
            </label>
            <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <label>
              <input type="radio" value="cod" {...register('paymentMethod')} /> Cash on Delivery
            </label>
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
          </div>
          <Button text={"Place Order"} classes="text-[#000000] bg-transparent rounded-md h-[20px] flex items-center justify-center" borderClr="border-black" textColor="text-black"/>
        </div>
      </form>
    </div>
  );
};

export default Form;
