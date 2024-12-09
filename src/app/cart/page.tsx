import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Header/>
        <Image src={"/image/group80.svg"} alt='img' width={1440} height={316}/>
        <div className='flex w-[1440px]'>
            <div className='w-[70%]'>
            <div className='bg-[#faf3ea] w-[850px] h-[55px] gap-28 flex pt-4 pl-24 ml-20 mt-16   '>
                <p className='font-semibold text-[16px] pl-24 '>Product</p>
                <p className='font-semibold text-[16px]'>Price</p>
                <p className='font-semibold text-[16px]'>Quantity</p>
                <p className='font-semibold text-[16px]'>Subtotal</p>
            </div>
            <div className='gap-20 flex mt-12 ml-20'>
                <Image src={"/image/group81.svg"} alt='img' width={108} height={105}/>
                <p className='text-[16px] text-[#898989] mt-10'>Asgaard sofa</p>
                <p className='mt-10 text-[16px] text-[#898989] '>Rs. 250,000.00</p>
                <p className='mt-10 '> 1</p>
                <p className='mt-10 text-[16px]'>Rs. 250,000.00</p>
                <Image src={"/image/vector9.svg"} alt='img' width={21} height={21}/>

            </div>
            </div>
            <div className='w- '>
             <div className='w-[310px] h-[350px] bg-[#faf3ea] mt-16'>
                <div className='text-[32px] font-semibold flex justify-center pt-6'>Cart Totals</div>
                <div className='flex gap-6 pl-16 pt-8'>
                <h1 className='text-[16px] font-medium '>Subtotal</h1>
                <h2 className='text-[16px] '>Rs. 250,000.00 </h2>
             </div>
                <div className='flex gap-6 pl-16 pt-8'>
                    <h1  className='text-[16px] font-medium '>Total</h1>
                    <h2 className='text-[20px] font-semibold text-[#b88e2f] '>Rs. 250,000.00</h2>
                </div>
                <div className='flex justify-center mt-12 ml-2'>
                    <button className='rounded-[16px] border-2 w-[222px] h-[58px] border-black text-[20px] '>Check Out</button>
                </div>
                
             </div>
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
    <h2 className='text-[#898989]'>Dedicated support</h2>
    </div>
    </div>
    </div>
        <Footer/>
    </div>
  )
}

export default page