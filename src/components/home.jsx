import React from 'react'
import Left from './HomeComp/left'
import Mid from './HomeComp/mid'
import Right from './HomeComp/right'

const Home = () => {
  return (
    <div className='flex bg-slate-950'>
      <Left/>
      <Mid/>
      <Right/>
    </div>
  )
}

export default Home
