import React from 'react';

export default function Education({ darkMode }) {
    return (
        <div>
            <h2 className={`text-xl lg:text-2xl font-extrabold ${darkMode ? 'text-primary' : 'text-darker'}`}>Formal Education 📖</h2>
            <div></div>
        </div>
    )
}