import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function About({ darkMode }) {
    const location = useLocation();

    return (
        <>
            <div className="px-3.5 lg:px-16 py-6 lg:py-8 flex flex-col gap-y-2.5">
                <h1 className="text-2xl lg:text-3xl font-extrabold">Howdy! I am <span className={darkMode ? 'text-primary' : 'text-darker'}>Evelyn</span>.</h1>
                <div>
                    <p>💻 Computer Science '23</p>
                    <p>📍 Medan, Indonesia</p>
                    <p>☁️ A dreamer and an achiever</p>
                </div>

                <nav className="mt-6 flex flex-row gap-x-8 text-lg font-medium overflow-x-scroll lg:overflow-x-auto">
                    <Link to="/about/overview" className={`${location.pathname === "/" || location.pathname === "/about/overview" ? (darkMode ? 'text-primary font-bold' : 'text-darker font-bold') : (darkMode ? 'hover:text-primary' : 'hover:text-darker')} flex flex-row gap-x-2 items-center trasnition-all ease-in-out duration-600`}>
                        <i className="ri-search-line"></i>
                        <span>Overview</span>
                    </Link>

                    <Link to="/about/education" className={`${location.pathname === "/about/education" ? (darkMode ? 'text-primary font-bold' : 'text-darker font-bold') : (darkMode ? 'hover:text-primary' : 'hover:text-darker')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                        <i className="ri-graduation-cap-line"></i>
                        <span>Education</span>
                    </Link>

                    <Link to="/about/experience" className={`${location.pathname === "/about/experience" ? (darkMode ? 'text-primary font-bold' : 'text-darker font-bold') : (darkMode ? 'hover:text-primary' : 'hover:text-darker')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                        <i className="ri-briefcase-line"></i>
                        <span>Experience</span>
                    </Link>

                    <Link to="/about/achievements" className={`${location.pathname === "/about/achievements" ? (darkMode ? 'text-primary font-bold' : 'text-darker font-bold') : (darkMode ? 'hover:text-primary' : 'hover:text-darker')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                        <i className="ri-trophy-line"></i>
                        <span>Achievements</span>
                    </Link>

                    <Link to="/about/certification" className={`${location.pathname === "/about/certification" ? (darkMode ? 'text-primary font-bold' : 'text-darker font-bold') : (darkMode ? 'hover:text-primary' : 'hover:text-darker')} flex flex-row gap-x-2 items-center transition-all ease-in-out duration-600`}>
                        <i className="ri-award-line"></i>
                        <span>Certifications</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}