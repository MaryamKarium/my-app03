import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className=' flex mx-8 my-4 xs-480'>
        <div className='w-1/3'>
        <Image src={"/image/logo.svg"} alt='logo' width={185} height={41}/>
        </div>
        <div className='w-1/3 pt-2 pl20 hidden md:block'>
        <a href="" className='pr-[50px]'>Home</a>
        <a href="/shop" className='pr-[50px]'>Shop</a>
        <a href="/blog" className='pr-[50px]'>Blog</a>
        <a href="/contact" className='pr-[50px]'>Contact</a>
        </div>
        <div className='w-1/3 flex gap-12 pl-24 '>
        <Image src={"/image/vector.svg"} alt='vector' width={28} height={28}/>
        <Image src={"/image/vector 1.svg"} alt='vector1' width={28} height={28}/>
        <Image src={"/image/vector 2.svg"} alt='vector2' width={28} height={28}/>
       <a href='/cart'> <Image className="pt-2" src={"/image/vector 3.svg"} alt='vector3' width={28} height={28}/></a>
        </div>
    </div>
  )
}

export default Header