import React from "react";
import MenuItem from "./MenuItem";
import {FaHome, FaInfo} from "react-icons/fa";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = ()=> {
    return (
        <>
       
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <div className="flex">
                <MenuItem title={'HOME'} address={"/"} Icon={FaHome} />
                {/* <MenuItem title={'About'} address={"/about"} Icon={FaInfo} /> */}
            </div>
            <div className="flex items-center space-x-4"> 
              <DarkMode/>
                <Link href="/">
                 
                    <h2 className="text-2xl">
                        <span className="font-bold bg-amber-500 py-1 px -2 rounded-lg">TOP</span>
                        <span className="text-xl hidden sm:inline">250</span>
                    </h2>
                </Link>
            </div>
            </div>

        </>
    )
}
export default Header 