import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
    <div className='flex mt-36 ml-28 '>
        <div className='w-1/4 mt-8'>
        <h1 className='font-bold text-[24px] mb-20'>Funiro.</h1>
        <h2 className='text-[16px] text-[#9f9f9f]'>400 University Drive Suite 200 Coral Gables,FL 33134 USA</h2>
        </div>
        <div className='w-1/4 ml-48'>
        <p className='text-[16px] font-medium mt-8 text-[#9f9f9f] '>Links</p>
        <p className='text-[16px] font-medium mt-8'>Home</p>
        <p className='text-[16px] font-medium mt-8'>Shop</p>
        <p className='text-[16px] font-medium mt-8'>About</p>
        <p className='text-[16px] font-medium mt-8'>Contact</p>
        </div>
        <div className='w-1/4 mr-12 '>
        <p className='text-[16px] font-medium text-[#9f9f9f] mt-8'>Help</p>
        <p className='text-[16px] font-medium mt-8'>Payment Options</p>
        <p className='text-[16px] font-medium mt-8'>Returns</p>
        <p className='text-[16px] font-medium mt-8'>Privacy Policies</p>
        </div>
        <div className='w-1/4 mr-48 mt-8'>
        <h1 className='text-[16px] font-medium text-[#9f9f9f] mb-12'>Newsletter</h1>
        <Image src={"/image/group.svg"} alt="text" width={286} height={24}/>
        </div>
        
    </div>
    <div className='ml-24 mt-20 mr-12'>
    <Image src={"/image/line.svg"} alt='line' width={1240} height={1}/>
    <h1 className='mt-12'>2023 furino. All rights reverved</h1>
     </div>
    </div>
  )
}

export default Footer