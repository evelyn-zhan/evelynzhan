import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../components/About.jsx';

export default function AboutPage({ darkMode }) {
    return (
        <>
            <About darkMode={darkMode} />
            <Routes>
                <Route path="/*" element={<></>} />
            </Routes>
        </>
    )
}