import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestions';
import { BG_URL } from '../utils/constant';

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            `url(${BG_URL})`,
        }}
      ></div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;