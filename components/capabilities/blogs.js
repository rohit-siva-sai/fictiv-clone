import React from 'react'

const Blogs = ({blogs}) => {

    // console.log(blogs,"hgdcvehgvfehvhg");
    
  return (
    <div className='md:px-44 px-4 md:py-24 py-20 bg-gray-100 ' >
        <div className='grid grid-cols-1  md:grid-cols-3 md:gap-x-12  gap-y-5 md:gap-y-0' >
           {blogs.map((item)=>{
            return (
                <div className='flex flex-col bg-white space-y-4 border items-center justify-start py-6  px-8 ' >
                    <picture className='' >
                        <img src={item.imgUrl} alt="" className='md:w-24 w-full h-24' />
                    </picture>
                    <p className='text-gray-700 font-bold text-base ' >{item.Title}</p>
                    <p className='text-base text-center text-gray-400 font-semibold' >{item.matter}</p>
                </div>
            )
           })}
        </div>
    </div>
  )
}

export default Blogs