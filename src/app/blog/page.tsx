import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <Header/>
        <Image src={"/image/group20.svg"} alt='img' width={1440} height={316}/>
        <div className='flex'>
            <div className='w-[60%] mt-16 ml-20'>
                <div>
                    <Image src={"/image/image68.svg"} alt='img' width={617} height={500}/>
                    <Image className="mt-4" src={"/image/image10.svg"} alt='tags' width={349} height={24}/>
                    <h1 className='text-[30px] font-medium my-2'>Going all-in with millennial design</h1>
                    <h2 className='text-[15px] text-[#898989] w-[617px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. 
                     Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                     Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                     <p className='text-[16px] mt-4'>Read more</p>
                     <Image className="mt-2 " src={"/image/line13.svg"} alt='line' width={75} height={1}/>
                </div>
                <div className='mt-10'>
                <Image src={"/image/image22.svg"} alt='img' width={617} height={500}/>
                    <Image className="mt-4" src={"/image/image10.svg"} alt='tags' width={349} height={24}/>
                    <h1 className='text-[30px] font-medium my-2'>Exploring new ways of decorating</h1>
                    <h2 className='text-[15px] text-[#898989] w-[617px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. 
                     Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                     Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                     <p className='text-[16px] mt-4'>Read more</p>
                     <Image className="mt-2 " src={"/image/line13.svg"} alt='line' width={75} height={1}/>
                </div>
                <div className='mt-10'>
                <Image src={"/image/image21.svg"} alt='img' width={617} height={500}/>
                    <Image className="mt-4" src={"/image/image10.svg"} alt='tags' width={349} height={24}/>
                    <h1 className='text-[30px] font-medium my-2'>Exploring new ways of decorating</h1>
                    <h2 className='text-[15px] text-[#898989] w-[617px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. 
                     Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero.
                     Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</h2>
                     <p className='text-[16px] mt-4'>Read more</p>
                     <Image className="mt-2 " src={"/image/line13.svg"} alt='line' width={75} height={1}/>
                </div>
            </div>
            <div className='w-[40%]'>
                <Image className='mt-12' src={"/image/image23.svg"} alt='search' width={300} height={250}/>
                <Image className="mt-8" src={"/image/image24.svg"} alt='search' width={350} height={650}/>
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