import React from 'react';

import ErrorImg from '../assets/error-404.png'
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div  className='flex flex-col justify-center items-center my-5'>
            <img src={ErrorImg} alt="" />
            <h1 className='text-4xl font-semibold mt-5'>Oops, page not found!</h1>
            <p className='text-[#627382] mt-3'>The page you are looking for is not available</p>
            
            <button onClick={()=>navigate(-1)} className='hover:cursor-pointer px-7 py-2 text-white mt-3 rounded-md  from-[#632ee3] to-[#9f62f2]'>Go Back</button>
            
        </div>
    );
};

export default ErrorPage;