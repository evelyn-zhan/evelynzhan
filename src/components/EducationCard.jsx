import React from 'react';

export default function EducationCard({ image, name, info, date, grade, desc, darkMode }) {
    return (
        <div className="flex flex-row gap-x-4 lg:gap-x-6">
            <img src={image} alt="" className={`mt-2 w-12 h-12 lg:w-16 lg:h-16 border-solid border-[1px] rounded-md ${darkMode ? 'border-dark-mode' : 'border-darker-grey'}`} />
            <div className="flex flex-col gap-y-3">
                <div>
                    <h3 className={`text-lg font-bold ${darkMode ? 'text-primary' : 'text-darker'}`}>{name}</h3>
                    <p className="text-base font-semibold">{info}</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-grey' : 'text-darker-grey'}`}>{date}</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-grey' : 'text-darker-grey'}`}>{grade}</p>
                </div>
                <p>{desc}</p>
            </div>
        </div>
    )
}