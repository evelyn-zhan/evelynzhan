import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ darkMode, changeMode }) {
    const currentPath = useLocation()

    return (
        <header className="px-3.5 lg:px-24 py-4 block sticky top-0 backdrop-blur">
            <nav className="flex flex-row justify-end items-center gap-x-7 lg:gap-x-10 text-base lg:text-lg font-medium">
                <Link to="/" className={`${currentPath.pathname === "/" || currentPath.pathname === "/about/overview" || currentPath.pathname === "/about/education" || currentPath.pathname === "/about/experience" || currentPath.pathname === "/about/achievements" || currentPath.pathname === "/about/certification" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>About</Link>
                <Link to="/project" className={`${currentPath.pathname === "/project" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>Projects</Link>
                <Link to="/contact" className={`${currentPath.pathname === "/contact" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>Contact</Link>
                {
                    darkMode === false
                    ?   <div className="cursor-pointer px-2 py-1 bg-white rounded-md border-solid border-[1.5px] border-darker text-darker hover:bg-darker hover:text-white transition-all ease-in-out duration-600" onClick={changeMode}>
                            <i className="ri-moon-line cursor-pointer"></i>
                        </div>
                    :   <div className="cursor-pointer px-2 py-1 bg-darker rounded-md border-solid border-[1.5px] border-darker text-white hover:bg-white hover:border-white hover:text-darker transition-all ease-in-out duration-600" onClick={changeMode}>
                            <i className="ri-sun-line cursor-pointer"></i>
                        </div>
                }
            </nav>
        </header>
    )
}