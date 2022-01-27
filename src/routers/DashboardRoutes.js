import React from 'react';

import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroeScreen } from '../components/heroe/HeroeScreen';

export const DashboardRoutes = () => {
  return (
  <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path='dc' element={<DcScreen />} />
        <Route path='marvel' element={<MarvelScreen />} />
        <Route path='heroe/:heroeId' element={<HeroeScreen />} />
        <Route path='search' element={<SearchScreen />} />

        <Route path='/' element={<DcScreen />} />
      </Routes>
    </div>
  </>);
};
