
import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";


const Scrollview = () => {
     let splide = new Splide( '.splide', {
        perPage: 3,
        focus  : 0,
        omitEnd: true,
      } );
      
    //   splide.mount();
  return (
    <div className='py-10 bg-gray-100' >
        <div>
            <div className='text-center ' >
                <p className='text-base font-bold text-teal-500' >#ﬁctivmade</p>
                <p className='md:text-4xl text-3xl leading-relaxed font-bold    md:w-1/2 mx-auto  text-gray-700 py-1 ' >Join 3,000+ Companies Who Trust Fictiv for High-Quality Parts</p>
                {/* <p className='text-4xl font-bold text-gray-700' >High-Quality Parts</p> */}
            </div>
            <div>
                {/* <Splide className='splide' >
                   <SplideSlide>
                   
                   </SplideSlide>
                   <SplideSlide>lorem</SplideSlide>
                   <SplideSlide>lorem</SplideSlide>
                   <SplideSlide>lorem</SplideSlide>
                   <SplideSlide>lorem</SplideSlide>
                </Splide> */}
            </div>
        </div>
    </div>
  )
}

export default Scrollview