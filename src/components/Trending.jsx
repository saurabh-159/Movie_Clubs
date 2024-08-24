import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from './templates/Topnav';
import Dropdown from './templates/Dropdown';
import axios from '../utils/Axios';
import Cards from './templates/Cards';
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]); // Initialized as an empty array
  const [page, setPage] = useState(1); // To track the current page
  const [hasMore, setHasMore] = useState(true); // To track if there's more data

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      setTrending(prevTrending => [...prevTrending, ...data.results]); // Append new data to the existing
      if (data.results.length === 0) setHasMore(false); // If no more data, stop further calls
    } catch (error) {
      console.error('Error fetching trending data:', error);
    }
  };

  useEffect(() => {
    setTrending([]); // Clear previous results when category or duration changes
    setPage(1); // Reset to page 1
    setHasMore(true); // Reset `hasMore` to true
    getTrending();
  }, [category, duration]);

  const fetchMoreData = () => {
    setPage(prevPage => prevPage + 1); // Increment page number
    getTrending();
  };

  return (
    <div className='w-full h-full p-[1%]     overflow-x-hidden'>
      <div className='w-full flex justify-between items-center'>
        <div className='w-[10%]'>
          <h1 className='text-zinc-400 text-2xl font-semibold'>
            <i 
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line hover:text-[#6556cd]"></i>
            Trending
          </h1>
        </div>
        <div className='w-[90%] flex justify-between items-center'>
          <div className='w-[60%]'>
            <Topnav />
          </div>
          <div className='w-[40%] flex'>
            <Dropdown
              title="Category"
              options={["movie", "tv", "all"]}
              func={(e) => setCategory(e.target.value)}
            />
            <div className='w-[2%]'></div>
            <Dropdown
              title="Duration"
              options={["day", "week"]} 
              func={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  );
};

export default Trending;
