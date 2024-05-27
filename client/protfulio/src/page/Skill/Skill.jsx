import React from 'react';

import { Progress } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const SkillsProgressBar = () => {
    const skills = [
        {
            name: 'HTML',
            percentage: 20
        },
        {
            name: 'CSS',
            percentage: 30
        },
        {
            name: 'JS',
            percentage: 40
        },
        {
            name: 'DATA STRUCTURE',
            percentage: 50
        },
        {
            name: 'CSS',
            percentage: 30
        },
        {
            name: 'JS',
            percentage: 40
        },
        {
            name: 'DATA STRUCTURE',
            percentage: 50
        }
    ];

    return (
        <div>
            <h3 className='text-center mt-10 mb-10 font-serif font-semibold text-4xl'>Skills</h3>
            <div className='md:flex justify-between'>
                <div className=' md:w-6/12'>
                    {skills.map((skill, index) => (
                        <div key={index} className="progress-container">
                            <div className="text-lg font-medium dark:text-white">{skill.name}</div>
                            <Progress progress={skill.percentage} size="lg" color="red" />
                        </div>
                    ))}
                </div>
                <div className='grid grid-cols-4 gap-3'>
                    {skills.map((skill, index) => (
                        <div key={index} className="progress-container ">
                            
                            <CircularProgressbar className='w-20' value={skill.percentage} text={`${skill.percentage}%`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsProgressBar;
