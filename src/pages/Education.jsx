import React from 'react';

import { education } from '../utils/data';
import EducationCard from '../components/EducationCard.jsx';

export default function Education({ darkMode }) {
    return (
        <div>
            <h2 className={`text-xl lg:text-2xl font-bold ${darkMode ? 'text-primary' : 'text-darker'}`}>Formal Education 📖</h2>
            <div className="mt-6 lg:mt-8 flex flex-col gap-y-8 lg:gap-y-10">
                {
                    education.map(edu => {
                        return <EducationCard key={edu.id} {...edu} darkMode={darkMode} />
                    })
                }
            </div>
        </div>
    )
}