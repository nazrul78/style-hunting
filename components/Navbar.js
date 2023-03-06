import React from "react"
import Image from 'next/image'
import Link from "next/link"
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2">
            <div className="logo mx-5">
                <Image src='/homeimg.jpg' alt='' height={5} width={50}></Image>
            </div>
            <div className="nev">
                <ul className="flex space-x-2 font-bold md:text-xl">
                    <Link href={'/'}><li>Tshirts</li></Link>
                    <Link href={'/'}><li>Hoodies</li></Link>
                    <Link href={'/'}><li>Stcikers</li></Link>
                    <Link href={'/'}><li>Mugs</li></Link>
                </ul>
            </div>

            <div className="cart absolute right-0 top-2 mx-5">
                <AiOutlineShoppingCart className=" text-xl md:text-3xl" />
            </div>
        </div>
    )

}
export default Navbar