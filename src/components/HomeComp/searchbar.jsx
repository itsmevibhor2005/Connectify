import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      
        <div className="mt-5 min-w-[800px] max-w-[45vw] bg-[rgb(53,46,59)] h-[6vh] flex rounded-lg">
          <div className="w-[5vw] h-[6vh] flex justify-center items-center">

          <svg
            className="h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              fillRule="evenodd"
              d="M12.9 14.32a8 8 0 111.42-1.42l4.35 4.34a1 1 0 01-1.42 1.42l-4.35-4.34zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
              clipRule="evenodd"
              ></path>
          </svg>
              </div>
          <input type="text" className="h-[6vh] w-[40vw] mr-2 bg-[rgb(53,46,59)] placeholder-gray-300 text-gray-300 outline-none" placeholder="Search" />
        </div>
      
    </div>
  );
};

export default SearchBar;
