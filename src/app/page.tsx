'use client'
import { Grid, Navbar } from '@/components'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col h-screen w-screen bg-[#131416]'>
      <Navbar />
      <Grid />
    </div>
  )
}

export default Home
