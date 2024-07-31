import React from 'react';

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
                    <SkillCard logo="ri-html5-fill" colorCode="#FF5733" skill="HTML5" darkMode={darkMode} />
                    <SkillCard logo="ri-css3-fill" colorCode="#3C99DC" skill="CSS3" darkMode={darkMode} />
                    <SkillCard logo="ri-tailwind-css-fill" colorCode="#06b6d4" skill="TailwindCSS" darkMode={darkMode} />
                    <SkillCard logo="ri-javascript-fill" colorCode="#f7df1e" skill="JavaScript" darkMode={darkMode} />
                    <SkillCard logo="ri-reactjs-line" colorCode="#61DBFB" skill="ReactJS" darkMode={darkMode} />
                    <SkillCard logo="ri-nodejs-line" colorCode="#3c873a" skill="NodeJS" darkMode={darkMode} />
                </div>
            </div>
        </div>
    )
}