import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../components/About.jsx';
import Overview from '../pages/Overview.jsx';

export default function AboutPage({ darkMode }) {
    return (
        <div className="px-3.5 lg:px-20 py-6 lg:py-8 flex flex-col gap-y-8">
            <About darkMode={darkMode} />
            <Routes>
                <Route path="/*" element={<Overview />} />
            </Routes>
        </div>
    )
}