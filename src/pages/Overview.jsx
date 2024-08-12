import React from 'react';

import { skills } from '../utils/data.js';
import SkillComponent from '../components/SkillComponent.jsx';

export default function Overview({ darkMode }) {
    return (
        <div className="text-justify">
            <p>Hi, there! I'm Evelyn.</p>
            <p className="mt-6">
                I am an undergraduate student at Universitas Mikroskil, majoring in Computer Science, and I am currently in my third semester.
                I have a great passion for technology, especially Web Development. In my spare time, I do Competitive Programming to hone my
                problem solving skill, as well as to enhance my knowledge in Algorithms and Data Structure. I also join various contests on
                Competitive Programming to challenge myself.
            </p>
            <p className="mt-6">
                I am currently working part-time as a Mathematics and Science Tutor. I teach Indonesian Mathematics, Physics, and Chemistry
                curriculum, Singapore Mathematics and Science curriculum, O Level, and also Singapore Mathematics Olympiad curriculum to
                prepare students to join mathematics olympiads, such as SEAMO, WMI, SIMOC, and many more.
            </p>

            <div className="mt-8 lg:mt-10">
                <h2 className={`text-xl lg:text-2xl font-bold ${darkMode ? 'text-primary' : 'text-darker'}`}>Skills and Technology</h2>
                <div className="mt-5 flex flex-row flex-wrap items-center gap-4 lg:text-lg">
                    {
                        skills.map(skill => {
                            return <SkillComponent key={skill.id} logo={skill.logo} colorCode={skill.colorCode} skill={skill.name} darkMode={darkMode} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}