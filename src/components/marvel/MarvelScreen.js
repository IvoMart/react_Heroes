import React from 'react';
import { HeroeList } from '../../data/HeroeList';

export const MarvelScreen = () => {
    return (
      <div>
        <h1>Marvel Heroes</h1>
        <HeroeList publisher='Marvel Comics' />
      </div>
    );
  };