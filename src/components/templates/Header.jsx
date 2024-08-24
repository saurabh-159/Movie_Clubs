import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({data}) => {
  return (
    <div 
    style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.4), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${
                        data.backdrop_path || data.profile_path
                      }) `, 
                      backgroundPosition: "contain",
                      backgroundSize:"cover",
                      backgroundRepeat: "no-repeat"
    }}
    className='w-full h-[50vh] flex flex-col justify-end items-start p-[10%]'>
      <h1 className=' w-[70%] text-white font-black   text-5xl'>{data.title || data.name || data.original_title || data.original_name}</h1>
      <p className='w-[70%] mt-5 mb-3 text-white'>{data.overview.slice(200)}...<Link  
      to={`/${data.media_type}/details/${data.id}`}
      className='text-blue-400'>more</Link>
</p>
<p className='text-white'>
<i className="ri-megaphone-fill text-yellow-500"></i> {data.release_date || data.release_date}
<i className="ml-5 ri-album-fill text-yellow-500 "></i>{data.media_type.toUpperCase()}

</p>
<Link className='bg-[#6556CD] mt-3 p-4 rounded text-white font-semibold'> Watch Trailer</Link>
    </div>
  )
}

export default Header
