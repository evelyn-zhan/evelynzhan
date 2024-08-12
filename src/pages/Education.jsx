import React from 'react';

import { education } from '../utils/data';
import EducationComponent from '../components/EducationComponent.jsx';

export default function Education({ darkMode }) {
    return (
        <div>
            <h2 className={`text-xl lg:text-2xl font-extrabold ${darkMode ? 'text-primary' : 'text-darker'}`}>Formal Education 📖</h2>
            <div className="mt-6 lg:mt-8 flex flex-col gap-y-8">
                {
                    education.map(edu => {
                        return <EducationComponent key={edu.id} {...edu} darkMode={darkMode} />
                    })
                }
            </div>
        </div>
    )
}