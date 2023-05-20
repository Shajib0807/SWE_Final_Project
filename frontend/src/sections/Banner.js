import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
const Banner = () => {
    return (
        <>
        <h1 className="text-5xl text-green-500 font-bold my-10  py-8">
            PRODUCT <span className=' text-red-500'>Showcase</span> 
          </h1>
        <div className="w-[90%] mx-auto my-10 p-5">
          
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={0}
            slidesPerView={1}
            allowTouchMove = {false}
            navigation={{ clickable: true }}
           
          >
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div className=''>
                        <img className='' src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/yamaha-r15-m-metallic-grey61a5a6d0df4d1.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-5xl uppercase py-2'>Yamaha R15M</h1>
                        <p className='text-1xl'>Engine: Powered by a liquid-cooled 155cc engine that produces 18.6 horsepower and 14.1 Nm of torque.</p>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/suzuki-intruder-fi-abs-front-view60d70c1ad2a66.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-5xl uppercase py-2'>Suzuki Intruder FI ABS</h1>
                        <p className='text-1xl'>The Suzuki Intruder FI ABS is a cruiser motorcycle powered by a 155cc fuel-injected engine that deli</p>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/new-honda-cbr-150r-black-red60d8585793885.webp" alt="" />
                    </div>
                    <div>
                        <h1 className='text-5xl uppercase py-2'>Honda CBR 150R</h1>
                        <p className='text-1xl'>The Honda CBR 150R is a sporty motorcycle with a 149cc engine that delivers a maximum power of 17.1</p>
                    </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded w-full grid grid-cols-2 justify-center items-center   shadow-sm   overflow-hidden  ">
                    <div>
                        <img src="https://www.bikebd.com/den/storage/app/files/shares/images/productimages/slider/1614232648_12_781151.jpeg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-5xl uppercase py-2'>TVS Apache RTR 160 4V</h1>
                        <p className='text-1xl'>The TVS Apache RTR 160 4V is a sporty motorcycle with a 159.7cc engine that delivers 17.6 horsepower and features a sleek design with a racing-inspired graphics. It also comes equipped with advanced features like a fully digital instrument cluster and LED headlamps.</p>
                    </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </>
    );
};

export default Banner;