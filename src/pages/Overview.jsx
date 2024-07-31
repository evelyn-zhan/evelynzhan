import React from 'react';

import skills from '../utils/data.js';
import SkillCard from '../components/SkillCard.jsx';

export default function Overview({ darkMode }) {
    return (
        <div className="text-justify">
            <p>Hi, there! I'm <span className="font-bold">Evelyn</span>.</p>
            <p className="mt-7">
                I am an <span className="font-bold">undergraduate student</span> at <span className="font-bold">Universitas Mikroskil</span>, majoring
                in <span className="font-bold">Computer Science</span>, and I am currently in my <span className="font-bold">third semester</span>.
                I have a great passion for technology, especially <span className="font-bold">Web Development</span>. In my spare time, I
                do <span className="font-bold">Competitive Programming</span> to hone my <span className="font-bold">problem solving</span> skill,
                as well as to enhance my knowledge in <span className="font-bold">Algorithms and Data Structure</span>. I also join
                various <span className="font-bold">contests</span> on Competitive Programming to <span className="font-bold">challenge</span> myself.
            </p>
            <p className="mt-7">
                I am currently working part-time as a <span className="font-bold">Mathematics and Science Tutor</span>. I teach Indonesian Mathematics,
                Physics, and Chemistry curriculum, Singapore Mathematics and Science curriculum, O Level, and also Singapore Mathematics Olympiad curriculum
                to prepare students to join mathematics olympiads, such as SEAMO, WMI, SIMOC, and many more.
            </p>

            <div className="mt-10">
                <h2 className={`text-xl lg:text-2xl font-extrabold ${darkMode ? 'text-primary' : 'text-darker'}`}>Skills and Technology</h2>
                <div className="mt-5 flex flex-row flex-wrap items-center gap-4 lg:text-lg">
                    {
                        skills.map(skill => {
                            return <SkillCard key={skill.id} logo={skill.logo} colorCode={skill.colorCode} skill={skill.name} darkMode={darkMode} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}