import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'


const page = () => {
  return (
    <div>
    <Header/>
    <Image src={"/image/group78.svg"} alt='img' width={1440} height={316}/>
    <div className='flex bg-[#f9f1e7] px-16 py-4'>
   <div className='flex gap-8'>
    <Image src={"/image/group57.svg"} alt='text' width={85} height={30}/>
    <Image src={"/image/bi 2.svg"} alt='circle' width={28} height={28}/>
    <Image src={"/image/bi 1.svg"} alt='view list' width={28} height={28}/> 
    <Image src={"/image/group 62.svg"} alt='text' width={237} height={37}/>
    </div>
    <div className='w-1/2 flex ml-96 gap-6'>
    <div className='flex gap-4'>
         <h1 className='pt-4'>Show</h1>
         <Image src={"/image/group58.svg"} alt='box' width={55} height={55}/>
         </div>
    <div className='flex gap-4'>
        <h1 className='pt-4'>Short by</h1>
        <Image src={"/image/group59.svg"} alt='box' width={188} height={55}/>
    </div>
    </div>
    </div>
    <div className='mt-12'>
    <div className="flex gap-12 ml-10 mr-10 mt-10 ">
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Syltherine</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Stylish cafe chair</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 2.500.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 3.500.000</h2>
    </div>
    </div>
    <div className="w-1/4 ">
    <Image src={"/image/feature.svg"} alt="image-text" width={300} height={446}/>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Lolito</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Luxury big sofa</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 7.000.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 14.000.000</h2>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/image4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Respira</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Outdoor bar table and stool</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 500.000</h1>
    </div>
    </div>
   </div>
   <div className="flex gap-12 ml-10 mr-10 mt-10">
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Syltherine</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Stylish cafe chair</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 2.500.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 3.500.000</h2>
    </div>
    </div>
    <div className="w-1/4 ">
    <Image src={"/image/products4.svg"} alt="image-text" width={300} height={446}/>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Lolito</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Luxury big sofa</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 7.000.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 14.000.000</h2>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/image4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Respira</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Outdoor bar table and stool</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 500.000</h1>
    </div>
    </div>
   </div>
   <div className="flex gap-12 ml-10 mr-10 mt-10">
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Syltherine</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Stylish cafe chair</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 2.500.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 3.500.000</h2>
    </div>
    </div>
    <div className="w-1/4 ">
    <Image src={"/image/products4.svg"} alt="image-text" width={300} height={446}/>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Lolito</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Luxury big sofa</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 7.000.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 14.000.000</h2>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/image4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Respira</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Outdoor bar table and stool</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 500.000</h1>
    </div>
    </div>
   </div>
   <div className="flex gap-12 ml-10 mr-10 mt-10">
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Syltherine</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Stylish cafe chair</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 2.500.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 3.500.000</h2>
    </div>
    </div>
    <div className="w-1/4 ">
    <Image src={"/image/products4.svg"} alt="image-text" width={300} height={446}/>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Lolito</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Luxury big sofa</h2>
    <div className="flex gap-4 pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 7.000.000</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pt-1">Rp 14.000.000</h2>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/image4.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Respira</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Outdoor bar table and stool</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 500.000</h1>
    </div>
    </div>
   </div>
    </div>
    <div className='flex justify-center mt-10'>
        <Image src={"/image/frame72.svg"} alt='buttons' width={392} height={90}/>
    </div>

    <div className='bg-[#faf3ea] mt-24 py-20 flex pl-16'>
    <div className='w-1/4 flex'>
    <Image src={"/image/trophy.svg"} alt='image' width={60} height={60}/>
    <div className='pl-4'><h1 className='font-bold text-[25px]'>High Quality</h1>
    <h2 className='text-[#898989]'>crafted from top materials</h2>
    </div>
    </div>
    <div className='w-1/4 flex'>
    <Image src={"/image/guarantee.svg"} alt='image' width={60} height={60}/>
    <div className='pl-4'><h1 className='font-bold text-[25px]'>Warranty Protection</h1>
    <h2 className='text-[#898989]'>Over 2 years</h2>
    </div>
    </div>
    <div className='w-1/4 flex'>
    <Image src={"/image/shipping.svg"} alt='image' width={60} height={60}/>
    <div className='pl-4'><h1 className='font-bold text-[25px]'>Free Shipping</h1>
    <h2 className='text-[#898989]'>Order over 150 $</h2>
    </div>
    </div>
    <div className='w-1/4 flex'>
    <Image src={"/image/customer-support.svg"} alt='image' width={60} height={60}/>
    <div className='pl-4'><h1 className='font-bold text-[25px]'>24 / 7 Support</h1>
    <h2 className='text-[#898989]'>Dedicated support</h2>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  )
}

export default page