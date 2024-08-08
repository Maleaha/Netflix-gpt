import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative text-white px-6 pt-24 md:px-12 md:pt-36 z-10 max-w-2xl">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-base md:text-lg max-w-xl">{overview}</p>
      </div>
      <div className="mt-8 flex space-x-4">
        <button className="bg-white text-black px-6 py-3 text-lg font-semibold rounded hover:bg-gray-200 transition duration-200">
          Play Now
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-3 text-lg font-semibold rounded hover:bg-opacity-100 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
