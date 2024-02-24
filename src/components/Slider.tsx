// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import Slider Images
import SLIDEIMG_1 from '../assets/images/slide-bg.jpg';
import SLIDEIMG_2 from '../assets/images/slide-bg-02.jpg';

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        autoplay={{
          delay: 5600,
          disableOnInteraction: false,
        }}
        className="mySwiper mt-20"
        loop={true}
        grabCursor={true}
        effect={'fade'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
      >
        <SwiperSlide>
          <div className="relative h-[190px] min-[626px]:h-auto">
            <img src={SLIDEIMG_1} alt="" />
            <div className=" absolute text-white top-6 gap-y-9 flex flex-col items-center justify-center w-full">
              <p className="slider-text flex flex-col text-sm md:text-base w-11/12 md:w-full">
                <span className="font-bold capitalize text-lg md:text-2xl mb-3">
                  Welcome to Hotel Booking
                </span>
                <span className="text-xs sm:text-sm md:text-base">
                  Click on the button below for more information!
                </span>
              </p>
              <a
                href="#footer"
                className="slider-button bg-[#e331bf] text-xs md:text-sm duration-500 border hover:bg-[#b90a96] border-[#b90a96] md:py-3 uppercase p-2 md:px-4 rounded-md"
              >
                About Hotel Booking
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[190px] min-[626px]:h-auto">
            <img src={SLIDEIMG_2} alt="" />
            <div className=" absolute text-white top-6 gap-y-9 flex flex-col items-center justify-center w-full">
              <p className="slider-text flex flex-col capitalize w-11/12 md:w-full">
                <span className="font-bold text-lg md:text-2xl mb-3">
                  Welcome to Hotel Reservation Network
                </span>
                <span className="text-xs sm:text-sm md:text-base">
                  Click the button below to see the nearest hotels!
                </span>
              </p>
              <a
                href="#nearbyhotels"
                className="slider-button bg-[#e331bf] text-xs md:text-sm duration-500 border hover:bg-[#b90a96] border-[#b90a96] md:py-3 uppercase p-2 md:px-4 rounded-md"
              >
                Nearest Hotels
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
