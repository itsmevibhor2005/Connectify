import SearchBar from "./searchbar";
import Stories from "./stories";
import Feed from "./feeds";

import React from 'react'

const Mid = () => {
  return (
    <div className="w-[50vw]">
      <div className='bg-slate-950 h-screen'>
        
        <SearchBar/>
        <div className='flex flex-col h-[88vh] my-2 items-center scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-slate-950 overflow-y-scroll'>

        <Stories/>
        <Feed/>
        </div>
      </div>
    </div>
  )
}

export default Mid
