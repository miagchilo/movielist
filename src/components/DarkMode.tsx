"use client"
import React, {useState, useEffect} from 'react'
import { useTheme } from "next-themes"
import {SiDarkreader} from "react-icons/si"
import {MdLightMode} from "react-icons/md"


const DarkMode = () => {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mount, setMount] = useState(false);
    const currenttheme = theme === "system" ? systemTheme : theme; 
    useEffect(()=> setMount(true),[])
  return (
    <>
    {mount && currenttheme === 'dark' ? (
        <MdLightMode onClick={()=> setTheme("light")} className="cursor-pointer text-xl hover:text-amber-500"/>

    ) : (<SiDarkreader onClick={()=> setTheme("dark")} className="cursor-pointer text-xl hover:text-amber-500"/>
   
  )} </>
  )
}


export default DarkMode