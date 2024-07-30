import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ darkMode, changeMode }) {
    const currentPath = useLocation()

    return (
        <header className="px-3.5 lg:px-16 py-5 lg:py-10">
            <nav className="flex flex-row justify-end items-center gap-x-7 lg:gap-x-10 text-lg lg:text-xl font-medium">
                <Link to="/" className={`${currentPath.pathname === "/" || currentPath.pathname === "/about/overview" || currentPath.pathname === "/about/education" || currentPath.pathname === "/about/experience" || currentPath.pathname === "/about/achievements" || currentPath.pathname === "/about/certification" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>About</Link>
                <Link to="/project" className={`${currentPath.pathname === "/project" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>Projects</Link>
                <Link to="/contact" className={`${currentPath.pathname === "/contact" ? (darkMode ? 'text-primary' : 'text-darker') : ''} hover:font-bold transition-all ease-in-out duration-600`}>Contact</Link>
                {
                    darkMode === false
                    ?   <div className="cursor-pointer px-2 lg:px-2.5 py-1 lg:py-1.5 bg-white rounded-md border-solid border-[1.5px] border-darker text-darker hover:bg-darker hover:text-white transition-all ease-in-out duration-600" onClick={changeMode}>
                            <i className="ri-moon-line cursor-pointer"></i>
                        </div>
                    :   <div className="cursor-pointer px-2 lg:px-2.5 py-1 lg:py-1.5 bg-darker rounded-md border-solid border-[1.5px] border-darker text-white hover:bg-white hover:border-white hover:text-darker transition-all ease-in-out duration-600" onClick={changeMode}>
                            <i className="ri-sun-line cursor-pointer"></i>
                        </div>
                }
            </nav>
        </header>
    )
}