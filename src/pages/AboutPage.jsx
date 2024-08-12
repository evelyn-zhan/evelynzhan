import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../components/About.jsx';
import Overview from '../pages/Overview.jsx';
import Education from '../pages/Education.jsx';

export default function AboutPage({ darkMode }) {
    return (
        <div className="px-3.5 lg:px-24 py-6 lg:py-8">
            <About darkMode={darkMode} />
            <Routes>
                <Route path="/*" element={<Overview darkMode={darkMode} />} />
                <Route path="/about/education" element={<Education darkMode={darkMode} />} />
                <Route path="/about/experience" element={<></>} />
                <Route path="/about/achievements" element={<></>} />
                <Route path="/about/certification" element={<></>} />
            </Routes>
        </div>
    )
}