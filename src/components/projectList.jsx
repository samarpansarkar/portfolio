import React from 'react'
import { LuGithub, LuLink } from "react-icons/lu";

const ProjectList = ({ name, image, liveLink, githubLink, stack }) => {
    return (
        <div>
            <div className="w-80 h-auto bg-gradient-to-r from-[#c2a1eccb] to-[#371b75] p-3 flex flex-col gap-4 rounded-2xl mb-6">
                <div className=" bg-gray-700 rounded-xl">
                    <img src={image} alt={name} className='md:hover:scale-110 rounded-md' />
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col justify-between">
                        <div className='flex flex-row justify-between'>
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#20532fcb] to-[#07d111] bg-clip-text text-transparent hover:scale-105">{name}</span>
                            <div className="flex flex-row p-2 gap-2">
                                <a className=" text-green-400 hover:scale-105 hover:animate-pulse hover:text-red-500" href={liveLink} target='_black'><LuLink size="30" /></a>
                                <a className=" text-indigo-500 hover:scale-105 hover:animate-pulse hover:text-red-500" href={githubLink} target='_black'><LuGithub size="30" /></a>
                            </div>
                        </div>
                        <p className="font-medium  text-red-600 bg-gray-300 rounded-md p-3"><span className=''>stack:</span>{stack}</p>
                    </div>
                    {/* <button className="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">{githubLink}</button> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectList
