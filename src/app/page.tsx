import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
    <Header/>
   <div className="image-container">
    <Image src={"/image/plant.svg"} alt="Image" width={1440} height={1008}/> 
    <div className="content-box ">
      <h1 className="text-black text-[16px] ">New Arrival</h1>
      <h2 className="text-[#b88e2f] font-bold text-[52px] mb-4">Discover Our New Collection</h2>
      <p className="mb-12 text-[18px] text-black ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
      <a href="" className="bg-[#b88e2f] px-[72px] py-[25px] font-bold">BUY NOW</a>
    </div>
   </div>
   <div className="my-12">
    <h1 className="text-[32px] font-bold flex justify-center">Browse The Range</h1>
    <h2 className="rext-[20px] flex justify-center"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
   </div>
   <div className="flex ml-12">
    <div className="w-1/3">
    <Image src={"/image/mask1.svg"} alt="hero-image" width={381} height={480}/>
    <h1 className="text-[24px] font-semibold flex justify-center my-6 mr-14">Dining</h1>
    </div>
    <div className="w-1/3">
    <Image src={"/image/mask2.svg"} alt="hero-image" width={381} height={480}/>
    <h1 className="text-[24px] font-semibold flex justify-center my-6 mr-8">Living</h1>
    </div>
    <div className="w-1/3">
    <Image src={"/image/mask3.svg"} alt="hero-image" width={381} height={480}/>
    <h1 className="text-[24px] font-semibold flex justify-center my-6 mr-8">Bedroom</h1>
    </div>
   </div>
   <div className="mb-10">
    <h1 className="text-[40px] font-bold flex justify-center mt-4">Our Products</h1>
   </div>
   <div className="flex gap-12 ml-10 mr-10">
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
   <div className="flex gap-12 mt-6 ml-10 mr-10">
   <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images 5.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Grifo</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Night lamp</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 1.500.000</h1>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images 6.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Muggo</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Small mug</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 150.000</h1>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/images7.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Pingky</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Cute bed set</h2>
    <div className="pl-4 flex gap-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 7.000.000</h1>
    <h2 className="text-[14px] text-[#b0b0b0] pt-1">Rp 14.000.000</h2>
    </div>
    </div>
    <div className="w-1/4 bg-[#f4f5f7]">
    <Image src={"/image/image 8.svg"} alt="hero-image" width={300} height={301}/>
    <h1 className="text-[24px] font-semibold pl-4 pt-4 pb-2">Potty</h1>
    <h2 className="text-[16px] text-[#b0b0b0] pl-4 pb-2">Minimalist flower pot</h2>
    <div className="pl-4"> 
    <h1 className="text-[20px] font-semibold ">Rp 500.000</h1>
    </div>
    </div>
   </div>
   <div className="flex justify-center mt-20 mb-20">
   <button className="text-[#b88e2f] border-[1px] border-[#b88e2f] w-[245px] h-[48px]">Show More</button>
   </div>
   <div className="flex bg-[#fcf8f3] ">
    <div className="w-1/2 ml-[100px] mt-[150px] ">
      <h1 className="text-[40px] font-bold w-[422px] h-[96px] mb-6  ">50+ Beautiful rooms  inspiration</h1>
      <p className="font-medium text-[16px] w-[368px] h-[48px] pt-4">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
      <button className="bg-[#b88e2f] text-[16px] font-semibold text-white w-[176px] h-[48px] mt-10">Explore More</button>
    </div>
     <div className="w-1/2 ">
      <div className="my-12">
      <Image  src={"/image/products.svg"} alt="image" width={1196} height={582}/>
      </div>
     </div>
    </div>
    <div className="mt-20">
      <h1 className="font-semibold text-[20px] flex justify-center">Share your setup with</h1>
      <h2 className="font-bold text-[40px] flex justify-center">#FuniroFurniture</h2>
    </div>
    <div>
    <Image src={"/image/images60.svg"} alt="hero img" width={1799} height={721}/>
    </div>
    <Footer/>
   </div>
  );
}
