import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center dark:bg-black-600 lg:text-lg p-4 '>
        <NavbarItem title={'Trending'} param="fetchTrending"/>
        <NavbarItem title={'Top rated'} param="fetchTopRated"/>
    </div>
  )
}

export default Navbar