// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import './style.css';

// // import required modules
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// export default function Banner() {
//     return (
//         <>
//             <h1 className=' md:text-5xl lg:text-5xl  p-4 text-center font-bold from-purple-600  to-blue-600 bg-gradient-to-r bg-clip-text text-transparent '>Explore Our Feature</h1>
//             <p className='border-2 border-yellow-700 w-24 mx-auto'></p>
//             <Swiper
//                 effect={'coverflow'}
//                 grabCursor={true}
//                 centeredSlides={true}
//                 slidesPerView={'auto'}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true,
//                 }}
//                 pagination={true}
//                 modules={[EffectCoverflow, Pagination]}
//                 className="mySwiper"
//             >

//                 <SwiperSlide>
//                     <img src="https://i.ibb.co/6tCjXHj/images-14.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://i.ibb.co/6tCjXHj/images-14.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://i.ibb.co/6tCjXHj/images-14.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://i.ibb.co/6tCjXHj/images-14.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://i.ibb.co/6tCjXHj/images-14.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
//                 </SwiperSlide>
//             </Swiper>
//         </>
//     );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Banner() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                

            </Swiper>
        </>
    );
}
