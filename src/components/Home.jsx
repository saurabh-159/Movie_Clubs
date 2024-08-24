import React, { useState, useEffect } from 'react';
import Sidenav from './templates/Sidenav';
import Topnav from './templates/Topnav';
import axios from '../utils/Axios';
import Header from './templates/Header';
import HorizontalCards from './templates/HorizontalCards';
import Dropdown from './templates/Dropdown';
import Loading from './Loading';

const Home = () => {
  document.title = "SCSDB | HomePage";
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      if (data.results && data.results.length > 0) {
        let randomData =
          data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(randomData);
      }
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results || []); // Fallback to empty array if results are undefined
    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
    getTrending();
  }, [category]);

  return wallpaper && trending ? (
    <div className="flex overflow-hidden overflow-y-auto w-full h-full">
      <Sidenav />
      <div className="w-[80%] overflow-hidden overflow-y-auto h-full bg-[#1F1E24]">
        <Topnav />
        {wallpaper && <Header data={wallpaper} />}
        
        <div className="flex justify-between p-10 my-5 items-center p-5">
          <h1 className="text-3xl font-bold text-zinc-400">Trending</h1>
          <Dropdown
            title="Filter"
            options={['all', 'movie', 'tv']}
            func={(e)=> setCategory(e.target.value)} // Update the category state
          />
        </div>

        {trending === null ? (
          <h1 className="text-white">Loading...</h1>
        ) : (
          <HorizontalCards data={trending} />
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
