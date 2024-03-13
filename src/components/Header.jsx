import React, { useContext } from 'react'
import { IoLogoFirebase } from "react-icons/io5";
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();

const Header = () => {

    const { setRoute, user, setUser } = useContext(AppContext);

    const hazLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setRoute("login")
            setUser(null);
            toast("Usuario ha hecho logout")
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8 fixed top-0">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setRoute("home")}>
                <IoLogoFirebase className="text-2xl text-pink-600"></IoLogoFirebase>
                <span className="text-xl font-semibold text-pink-600">FireShopping v2</span>
            </div>
            <div className='flex gap-2'>
                {
                    !user ?
                        <>
                            <button className="bg-sky-500 text-white py-1 px-3 rounded-full 
                            hover:bg-sky-700 transition" onClick={() => setRoute("login")}>Login</button>
                            <button onClick={() => setRoute("register")}>...o regístrate</button>
                        </> :
                        <>
                            <button onClick={hazLogout}>Logout</button>
                        </>

                }
            </div>
        </header>
    )
}

export default Header