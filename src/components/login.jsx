import React from 'react'
import { CgLogIn } from "react-icons/cg";
const Login = () => {
    return (
        <a className='w-36 border border-black h-12 z-10 fixed bottom-20 md:bottom-32 rounded-r-full -left-1 flex justify-start hover:bg-[#3d373d] hover:text-[#ffffff] transition-all duration-200 active:bg-zinc-300' href="/login">
            <div className='h-fit p-2.5 pt-3'>
                <CgLogIn size={24} />
            </div>
            <div>
                <h1 className='text-left align-middle text-2xl font-semibold font-rubix py-1.5 relative top-0.5'>Admin</h1>
            </div>
        </a>
    )
}

export default Login