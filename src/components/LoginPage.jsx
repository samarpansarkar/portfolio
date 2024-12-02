import React, { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";


const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ password, email });
    }
    return (
        <div className='md:p-0 md:pt-24 md:px-40 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white] p-8 md:mt-0 mt-6 pt-16'>
            <div className='md:w-28 md:h-7 rounded-full w-16 h-5 bg-black md:px-2 space-x-5 mb-6 md:mt-0 md:pt-0 relative lg:top-0 md:top-2 top-0'>
                <FaRegUserCircle className='md:inline-block text-white font-semibold relative md:left-1.5 hidden scale-50 md:scale-100 md:-top-px' size={20} />
                <span className='text-white font-poppins text-xs md:text-xs font-normal md:font-medium relative md:-left-0 -left-3 md:-top-0 -top-1 md:pb-0 '>Admin</span>
            </div>
            <div className='md:mb-0 relative md:-top-4'>
                <h1 className='md:text-4xl md:font-semibold font-semibold text-4xl'><span className='bg-gradient-to-r from-[#833be7cb] to-[#5521c5] bg-clip-text text-transparent'>Only For,</span> Samarpan</h1>
                <hr className='md:w-40 w-32 md:mb-0 mb-4 h-2 mt-3 md:ml-0 lg:mt-2 bg-gradient-to-r from-[#bf77eced] to-[#c580f0c8]'></hr>
            </div>
            <div className='flex justify-center relative lg:-top-8 pt-10'>
                <div className='p-4 border md:w-96 md:min-h-96 rounded-lg md:pt-5 md:pr-5 md:pl-5 md:pb-2 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] bg-[white]'>
                    <h1 className='md:font-medium md:text-2xl font-medium text-xl'>Login</h1>
                    <h1 className='text-sm text-[#64748be2] md:mt-1'>Once form is submit the fields will be reset.</h1>
                    <form className='md:mt-0 mt-4' onSubmit={handleSubmit}>
                        <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Email</h1>
                        <input placeholder="Enter your email" type='email' required className='border md:w-full rounded-lg md:h-10 md:pl-4 md:mb-0 mb-1 w-full px-3 h-8' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <h1 className='font-medium text-sm md:mt-3 md:mb-1.5 mb-2'>Your Password</h1>
                        <input placeholder="Enter your password" type='password' required className='border md:w-full rounded-lg md:h-10 md:pl-4 md:mb-0 mb-1 w-full px-3 h-8' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button className="text-white bg-[#0F172A] md:w-full w-full md:h-11 h-9 rounded-full active:scale-100 duration-300 transition-all hover:scale-105 mt-3" type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage