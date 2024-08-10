import React from 'react'
import { LuGithub, LuLink } from "react-icons/lu";

const ProjectList = ({ name, image, liveLink, githubLink, stack }) => {
    return (
        <div>
            <div class="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
                <div class="h-48 bg-gray-700 rounded-xl">
                    <img src={image} alt={name} />
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col justify-between">
                        <div className='flex flex-row justify-between'>
                            <span class="text-2xl font-bold">{name}</span>
                            <div class="flex flex-row p-2">
                                <a class="text-lg text-gray-700 underline" href={liveLink} target='_black'><LuLink size="30" /></a>
                                <a class="text-lg text-gray-700 underline" href={githubLink} target='_black'><LuGithub size="30" /></a>
                            </div>
                        </div>
                        <span class="font-medium  text-red-600 bg-gray-300 rounded-md p-3">stack: {stack}</span>
                    </div>
                    {/* <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">{githubLink}</button> */}
                </div>
            </div>
        </div>
    )
}

export default ProjectList
