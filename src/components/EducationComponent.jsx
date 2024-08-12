import React from 'react';

export default function EducationComponent({ image, name, info, date, grade, darkMode }) {
    return (
        <div className="flex flex-row gap-x-4 lg:gap-x-6">
            <img src={image} alt="" className={`mt-2 w-12 h-12 lg:w-16 lg:h-16 border-solid border-[1px] rounded-md ${darkMode ? 'border-dark-mode' : 'border-grey'}`} />
            <div className="flex flex-col gap-y-3">
                <div>
                    <h3 className={`text-lg lg:text-xl font-extrabold ${darkMode ? 'text-primary' : 'text-darker'}`}>{name}</h3>
                    <p className="text-sm lg:text-base font-semibold">{info}</p>
                    <p className="text-sm lg:text-base font-medium">{date}</p>
                    <p className="text-sm lg:text-base font-medium">{grade}</p>
                </div>
            </div>
        </div>
    )
}