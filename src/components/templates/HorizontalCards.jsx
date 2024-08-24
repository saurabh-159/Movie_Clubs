import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const HorizontalCards = ({ data }) => {
  return (
    
    

      <div className="w-full overflow-y-hidden p-5   flex  space-x-5">
        {data.length > 0 ? data.map((item, index) => (
          <Link to={`/${item.media_type}/details/${item.id}`} 
            key={index}
            className="min-w-[15%] h-[55vh] bg-zinc-900 mb-5 rounded-lg shadow-lg"
          >
            <img
              className="w-full h-[55%] object-cover rounded-t-lg"
              src={
                item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.profile_path
                    }`
                  : 'https://via.placeholder.com/150' // Placeholder image URL
              }
              alt={item.title || item.original_name || 'Image'}
            />
            <div className="h-[45%] p-3">
              <h1 className="text-white font-semibold text-xl mt-3">
                {item.title || item.original_name || item.original_title}
              </h1>
              <p className="text-white">
                {item.overview.slice(0, 50)}...
                <Link to={`/details/${item.id}`} className="text-zinc-300 ml-1">
                  more
                </Link>
              </p>
            </div>
          </Link>
        )) : <h1 className='text-3xl text-white font-black text-center'>Nothing to found</h1> }
      </div>
     
  );
};

export default HorizontalCards;
