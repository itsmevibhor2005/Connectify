import { defaults } from "autoprefixer";
import React, { useState } from "react";
import { FaEllipsisH, FaHeart, FaComment, FaBookmark } from "react-icons/fa";

const Card = ({ user, post }) => {
  const [hovered, setHovered] = useState(false);

  return (
    
      <div className="bg-gray-800 text-white p-4 rounded-lg mb-6 min-w-[800px] max-w-[45vw]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={user.image}
              alt={user.name}
              className="w-10 h-10 rounded-full mr-4"
            />
            <span>{user.name}</span>
          </div>
          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <FaEllipsisH className="cursor-pointer" />
            {hovered && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-700 text-center rounded-md shadow-lg p-2">
                More Options
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-1">
              <FaHeart className="text-red-500" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-1">
              <FaComment />
              <span>{post.comments}</span>
            </button>
          </div>
          <button>
            <FaBookmark />
          </button>
        </div>
      </div>
    
  );
};

const Feed = () => {
  const data = [
    {
      user: {
        name: "Elena",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
      },
      post: {
        image: "https://via.placeholder.com/400x300",
        likes: 112,
        comments: 23,
      },
    },
    {
      user: {
        name: "Neil",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
      },
      post: {
        image: "https://via.placeholder.com/400x300",
        likes: 98,
        comments: 34,
      },
    },
    {
      user: {
        name: "Karen",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
      },
      post: {
        image: "https://via.placeholder.com/400x300",
        likes: 76,
        comments: 19,
      },
    },
  ];

  return (
    <div className="flex flex-col p-6 min-h-screen">
        <div className="text-2xl text-white">Feeds</div>
      {data.map((item, index) => (
        <Card key={index} user={item.user} post={item.post} />
      ))}
    </div>
  );
};

export default Feed;
