import React from 'react';
import { LuLightbulb } from "react-icons/lu";
import tailwind from './icons/tailwind.svg';
import mongo from './icons/mongodb.svg';
import { projectData } from './../projectData';
import ProjectList from './projectList';
import sideImg from './icons/manWithAComputer.gif'


const skills = () => {
    return (
        <div className='md:p-22 md:pt-24  md:pb-22 md:px-40 md:h-full md:flex-row  md:mt-0 p-8 flex flex-col justify-between select-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] mt-6 pt-16'>
            <div className=''>
                <div className='md:w-6/12'>
                    <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5 mb-6'>
                        <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22} />
                        <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Skills</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-poppins lg:text-4xl text-3xl font-medium'>My <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Technical</span><br className='md:block hidden' /> Experience/<span className='md:hidden block'> </span><span>Skills.</span></h1>
                    <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
                </div>
                <div>
                    <div>
                        <h1 className='md:font-semibold font-bold md:text-2xl md:pt-2 md:inline-block md:mr-5 md:mb-0 mb-1'>Web Dev</h1>
                        <img src="https://skillicons.dev/icons?i=react" alt="react" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-2 md:mb-0 mb-2 md:mt-0 mt-2 hover:scale-110' />
                        <img src="https://skillicons.dev/icons?i=next" alt="next" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-2 md:mb-0 mb-2 md:mt-0 mt-2 hover:scale-110' />
                        <img src={tailwind} alt="tailwind" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2 hover:scale-110' />
                        <img src={mongo} alt="mongodb" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-0.5 mr-2 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=html' alt="html5" style={{ width: 45, height: 45 }} className='mr-2 inline md:pb-3 md:mr-1 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=nodejs' alt="html5" style={{ width: 45, height: 45 }} className='mr-2 inline md:pb-3 md:mr-1 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=js' alt="js" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1 md:mt-0 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=mysql' alt="mysql" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1 md:mt-0 hover:scale-110' />
                    </div>
                    <div>
                        <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2.5 md:mt-0 mt-2'>Languages</h1>
                        <img src='https://skillicons.dev/icons?i=c' alt="c" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=python&theme=dark' alt="python" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=java&theme=light' alt="java" style={{ width: 45, height: 45 }} className='inline md:pb-3 mr-2 md:mr-1 hover:scale-110' />
                    </div>
                    <div>
                        <h1 className='md:font-semibold font-bold md:text-2xl md:pt-1.5 md:inline-block md:mr-5 md:mb-0 mb-2 md:mt-0 mt-2'>Others Skills</h1>
                        <img src='https://skillicons.dev/icons?i=git' alt="git" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2 hover:scale-110' />
                        <img src='https://skillicons.dev/icons?i=github' alt="github" style={{ width: 45, height: 45 }} className='inline md:pb-3 md:mr-1 mr-2 hover:scale-110' />
                    </div>
                    <div className='hidden md:block w-96'>
                        <img src={sideImg} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center gap-8 mt-10 md:mt-0 md:block'>
                <div className='md:w-28 md:h-7 rounded-full w-20 h-5 bg-black md:px-1 space-x-3.5'>
                    <LuLightbulb className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={22} />
                    <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-0 md:-top-0 -top-1 md:pb-0'>My Projects</span>
                </div>
                <h1 className='font-poppins lg:text-4xl text-2xl font-medium'>My <span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Projects</span></h1>
                <hr className='md:w-44 w-32 md:mb-0 mb-4 h-3 mt-3 md:ml-0 lg:mt-4 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
                <div className='flex justify-center items-center'>
                    <div className='xl:grid xl:grid-cols-3 xl:gap-9  gap-4 mt-2'>
                        {projectData.map((item) => (
                            // <ProjectList name={item.name} image={item.image} liveLink={item.liveLink} githubLink={item.githubLink} stack={item.stack} />
                            <div className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
                                <div className="w-full h-[200px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                                    <img src={item.image} alt={item.name}
                                        className="h-full w-full object-contain" />
                                </div>
                                <div className="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
                                    <div className="text-center">
                                        <h3 className="font-bold text-blue-600 text-2xl">{item.name}</h3>
                                        <h4 className="text-lg text-gray-600 font-bold mt-2">{item.stack}</h4>
                                        <div className="border py-3 px-2">
                                            <a href={item.liveLink} target="_blank" className="inline-block text-white font-semibold mr-2 bg-[#833be7cb] p-2 rounded-md">Live Demo</a>
                                            <a href={item.githubLink} target="_blank" className="inline-block text-white font-semibold mr-2 bg-[#833be7cb] p-2 rounded-md">github repo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
export default skills;