import React, { useContext } from 'react'
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { AppContext } from '../App';

const Footer = () => {

    const { setRoute } = useContext(AppContext);

    return (
        <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
            <div className='bg-sky-200 text-3xl p-2 rounded-full 
            text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute("home")}>
                <FaHome />
            </div>
            <div className='bg-sky-200 text-3xl p-2 rounded-full 
            text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute("shopping")}>
                <FaShoppingCart />
            </div>
            <div className='bg-sky-200 text-3xl p-2 rounded-full 
            text-pink-500 cursor-pointer hover:bg-sky-50 transition' onClick={() => setRoute("tasklist")}>
                <BsList  />
            </div>
        </footer>
    )
}

export default Footer