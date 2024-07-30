import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';

export default function App() {
    const [ darkMode, setDarkMode ] = useState(() => {
        const savedDarkMode = localStorage.getItem('dark-mode');
        if(savedDarkMode !== null) {
            return JSON.parse(savedDarkMode);
        }
        return true;
    });
    
    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(darkMode));
    })

    const body = document.querySelector('body');

    if(darkMode) {
        body.classList.add('bg-dark-mode');
        body.classList.add('text-white');
    } else {
        body.classList.remove('bg-dark-mode');
        body.classList.remove('text-white');
    }

    function changeMode() {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <Header darkMode={darkMode} changeMode={changeMode} />
            <Routes>
                <Route path="/" element={<></>} />
                <Route path="/project" element={<></>} />
                <Route path="/contact" element={<></>} />
            </Routes>
        </>
    )
}