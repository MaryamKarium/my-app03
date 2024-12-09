import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
     <Header/>
     <Image src={"/image/group79.svg"} alt='image' width={1440} height={316}/>
     <div className='mt-16'>
        <h1 className='text-[34px] font-bold flex justify-center'>Get In Touch With Us</h1>
        <p className='text-[16px] text-[#9f9f9f] text-center w-[644px] ml-[25%] mt-2 '>For More Information About Our Product & Services. 
        Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
     </div>
     <div className='flex mt-20'>
        <div className='w-1/2 ml-48'>
        <div className='flex gap-6 mb-8'>
            <Image className="mb-20" src={"/image/vector4.svg"} alt="vector" width={22} height={28}/>
        <div className='gap-2'>
            <h1 className='font-medium text-[24px]'>Address</h1>
            <h2 className='text-[16px]  w-[212px]'>236 5th SE Avenue, New York NY10000, United States</h2>
        </div>
        </div>
        <div className='flex gap-6 mb-8'>
        <Image className="mb-20" src={"/image/vector5.svg"} alt="vector" width={22} height={28}/>
        <div className='gap-2'>
            <h1 className='font-medium text-[24px]'>Phone</h1>
            <h2 className='text-[16px]  w-[212px]'>Mobile: +(84) 546-6789
            Hotline: +(84) 456-6789</h2>
        </div>
        </div>
        <div className='flex gap-6 mb-8'>
        <Image className="mb-20" src={"/image/vector6.svg"} alt="vector" width={22} height={28}/>
        <div className='gap-2'>
            <h1 className='font-medium text-[24px]'>Working Time</h1>
            <h2 className='text-[16px] w-[212px]'>Monday-Friday: 9:00 - 22:00
            Saturday-Sunday: 9:00 - 21:00</h2>
        </div>
        </div>
        </div>
        <div className='w-1/2 mr-12'>
        <div>
            <h1 className='text-[16px] font-medium '>Your name</h1>
            <button className='text-[#9f9f9f] my-6 rounded-[10px] h-[70px] border-[1px] border-black w-[528px]'>Abc</button>
        </div>
        <div> 
        <h1 className='text-[16px] font-medium '>Email address</h1>
        <button className='text-[#9f9f9f] my-6 rounded-[10px] h-[70px] border-[1px] border-black w-[528px]'>Abc@def.com</button></div>
        <div>
        <h1 className='text-[16px] font-medium '>Subject</h1>
        <button className='text-[#9f9f9f] my-6 rounded-[10px] h-[70px] border-[1px] border-black w-[528px]'>This is an optional</button>
        </div>
        <div>
        <h1 className='text-[16px] font-medium '>Message</h1>
        <button className='text-[#9f9f9f] my-6 rounded-[10px] h-[120px] border-[1px] border-black w-[527px]'>Hi! i’d like to ask about</button>
        </div>
        <button className='w-[237px] h-[55px] bg-[#b88e2f] text-[16px] text-white mt-8 ml-2'>Submit</button>
        </div>
        
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
    <h2 className='text-[#898989]'>Dedicated suppor</h2>
    </div>
    </div>
    </div>
     <Footer/>
    </div>
  )
}

export default page