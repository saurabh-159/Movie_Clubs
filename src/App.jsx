import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movie from './components/Movie';
import TvShows from './components/TvShows';
import People from './components/People';
import Moviedetails from './components/Moviedetails';
import Peopledetails from './components/Peopledetails';
import TvDetails from "./components/Tvdetails";

import Trailer from './components/templates/Trailer';

const App = () => {
  return (
    <div className="bg-[#1F1E24] flex w-screen h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/details/:id" element={<TvDetails />} >
        <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>
        
        <Route path="/people" element={<People />} />
        <Route path="/person/details/:id" element={<Peopledetails />} />
      </Routes>
    </div>
  );
};

export default App;
