import React from 'react';
import Link from 'next/link';
const MenuItem = ({ title, address, Icon}) => {
    return (
        <>
        <Link href={address} className="mx-4 lg:mx-7 hover:text-amber-600">
            <Icon className="text-3xl sm:hidden mx-3" />
            <span className='hidden sm:inline my-2 text-sm'>{title}</span>

        </Link>
        </>
    )
}
export default MenuItem