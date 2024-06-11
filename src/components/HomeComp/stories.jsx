import React from "react";
import { useState } from "react";
import Slider from 'react-slick';

const UserStory = ({ imageSrc, alt, name }) => {
  return (
    <div className="w-[100px] h-[100px] relative px-2 flex flex-col items-center hover:cursor-pointer">
      <img
        src={imageSrc}
        alt={alt}
        className="w-[90px] h-[90px] rounded-full border-4 border-purple-950 border-gradient"
      />
      <span className="text-white text-sm my-1">{name}</span>
    </div>
  );
};

const Stories = () => {
  
  const [users,setusers] = useState([
    {
      src: "https://randomuser.me/api/portraits/women/1.jpg",
      alt: "User 1",
      name: "User 1",
    },
    {
      src: "https://randomuser.me/api/portraits/men/2.jpg",
      alt: "User 2",
      name: "User 2",
    },
    {
      src: "https://randomuser.me/api/portraits/women/3.jpg",
      alt: "User 3",
      name: "User 3",
    },
    {
      src: "https://randomuser.me/api/portraits/women/1.jpg",
      alt: "User 1",
      name: "User 1",
    },
    {
      src: "https://randomuser.me/api/portraits/men/2.jpg",
      alt: "User 2",
      name: "User 2",
    },
    {
      src: "https://randomuser.me/api/portraits/women/3.jpg",
      alt: "User 3",
      name: "User 3",
    },
    {
      src: "https://randomuser.me/api/portraits/women/1.jpg",
      alt: "User 1",
      name: "User 1",
    },
    {
      src: "https://randomuser.me/api/portraits/men/2.jpg",
      alt: "User 2",
      name: "User 2",
    },
    {
      src: "https://randomuser.me/api/portraits/women/3.jpg",
      alt: "User 3",
      name: "User 3",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleStories = 5;

  const nextStories = () => {
    if (currentIndex < users.length - visibleStories) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevStories = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="min-w-[800px] max-w-[45vw] text-white p-6 rounded-lg">
        <h2 className="text-2xl mb-4">Stories</h2>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <button className="w-[80px] h-[80px] bg-gray-500 text-white text-4xl rounded-full border-4 border-dashed border-gray-700 flex justify-center items-center">
              +
            </button>
            <span className="text-white text-sm my-1">Add Story</span>
          </div>
          <button 
            onClick={prevStories} 
            className={`relative left-3 bottom-3 pr-3 z-10 ${currentIndex === 0 ? 'invisible' : ''}`}
          >
            &lt;
          </button>
          <div className="overflow-hidden w-full">
            <div 
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleStories)}%)` }}
            >
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="min-w-[20%] flex justify-center"
                >
                  <UserStory imageSrc={user.src} alt={user.alt} name={user.name} />
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={nextStories} 
            className={`relative right-0 top-5 z-10 p-2 w-[5px] h-[5px] rounded ${currentIndex >= users.length - visibleStories ? 'invisible' : ''}`}
          >
            &gt;
          </button>
        </div>
        </div>
      </div>
    
  );
};

export default Stories;
