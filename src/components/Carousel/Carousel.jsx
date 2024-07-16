import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Carousel = ({dataList, componentToRender}) => {
    return (
        <>
            <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
                dynamicBullets: true,
                clickable: true
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                {
                    dataList.map((item ,idx) => {
                        return (
                            <SwiperSlide key={idx} style={{width: 'auto'}}>
                                {
                                    componentToRender(item)
                                }
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </>
    );
}

export default Carousel;