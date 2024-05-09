import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {


    return (

        <header className="header bg-primary">
            <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
                <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
                    <div
                        className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <a href="#"
                               className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Frontend
                                UI</a>
                        </div>
                        <nav className="flex flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                            <NavLink to={'/playground'}
                                     className={({isActive}) => `px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${isActive ? 'text-gray-900 bg-gray-200' : ''}`}>Playground</NavLink>
                            <NavLink to={'/clients'}
                                     className={({isActive}) => `px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${isActive ? 'text-gray-900 bg-gray-200' : ''}`}>Clients</NavLink>
                            <NavLink to={'/magento'}
                                     className={({isActive}) => `px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline ${isActive ? 'text-gray-900 bg-gray-200' : ''}`}>Magento</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )

}
