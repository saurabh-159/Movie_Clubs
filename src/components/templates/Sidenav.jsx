import React from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 overflow-hidden p-10">
      <h1 className="text-2xl text-white font-bold">
        <i className="text-[#6556cd] mr-2 ri-tv-fill text-2xl"></i>
        <span className="text-2xl">SCSDB</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">New Feeds</h1>

        <Link to="/trending" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-bard-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3"> {/* Adjusted path */}
          <i className="ri-slideshow-4-line"></i> Tv Shows
        </Link>
        <Link to="/people" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
          <i className="ri-user-5-fill"></i> People
        </Link>

        <hr className="my-5" />

        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-center mt-5 p-0 mb-5">Website Information</h1>

          <Link to="/about" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
            <i className="ri-information-line"></i> About SCSDB
          </Link>
          <Link to="/contact" className="hover:bg-[#6556cd] hover:text-white duration-300 rounded-lg p-3">
            <i className="ri-phone-fill"></i> Contact us
          </Link>
        </nav>
      </nav>
    </div>
  );
};

export default Sidenav;
