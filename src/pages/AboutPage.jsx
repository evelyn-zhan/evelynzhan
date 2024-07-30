import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../components/About.jsx';
import Overview from '../pages/Overview.jsx';

export default function AboutPage({ darkMode }) {
    return (
        <>
            <About darkMode={darkMode} />
            <Routes>
                <Route path="/*" element={<Overview />} />
            </Routes>
        </>
    )
}