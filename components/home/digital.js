import React from 'react'

const Digital = () => {
  return (
    <div className='bg-gray-100 md:pt-2 pb-24' >
        <div className='' >
            <p className='text-center text-3xl text-gray-600 font-bold pb-8' >Digital Manufacturing Resources</p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-x-6 md:px-48 px-4 gap-y-6 md:gap-y-0 ' >
                <div className='flex flex-col cursor-pointer bg-white border ' >
                    <picture>
                        <img src="https://www.fictiv.com/wp-content/uploads/2022/06/FT_2022_0603_blog_cover.png" alt="" className='h-max'  />
                    </picture>
                   <div className='px-4 pt-4 pb-8' >
                   <p className='text-gray-500 text-xs font-semibold' >E BOOK</p>
                    <p className='font-semibold py-3' >2022 State of Manufacturing Report</p>
                   </div>
                </div>
                <div className='flex flex-col cursor-pointer bg-white border' >
                    <picture>
                        <img src="https://www.fictiv.com/wp-content/uploads/2021/04/image-15.jpg" alt="" className='h-60'   />
                    </picture>
                    <div className='px-4 pt-4 pb-6' >
                   <p className='text-gray-500 text-xs font-semibold' >MASTER CLASS</p>
                    <p className='font-semibold py-3' >DFM for CNC Machining</p>
                   </div>
                </div>
                <div className='flex flex-col cursor-pointer bg-white border' >
                    <picture>
                        <img src="https://www.fictiv.com/wp-content/uploads/2023/04/blog_complex_thumb.jpg" alt="" />
                    </picture>
                    <div className='px-4 pt-4 pb-6' >
                   <p className='text-gray-500 text-xs font-semibold' >Quiz</p>
                    <p className='font-semibold py-3' >CNC Part Complexity Quiz</p>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital