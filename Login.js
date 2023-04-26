import React from 'react';
import Intro2 from './img/Intro2.png';
import { FiMail } from 'react-icons/fi';
import { RiRotateLockFill } from 'react-icons/ri';
import './Login.css';
function Login() 
{
    return (
        <>
        <main>
<div className='container'>
<div className='left'>
    <img src={Intro2} alt='intro2'/>
</div>
<div className='right mt-28 ml-10'>

<form className='border-2 border-gray-400 px-7 py-7 rounded-2xl'>

    <h1 className='font-display'>Login to your account</h1>

    <p className='font-display m-3 text-black-200'>Hello !</p>

    <h3 className='font-display my-5'>Email ID</h3>

    <div className='wrapper'>
    <FiMail size={25} color='grey' className='absolute ml-96  mt-2 pointer-events-none'/>
    <input  type='text' placeholder='Enter your email address' class="box-content font-display  h-2 w-96 rounded-lg p-4 border-2 ..."/>
    </div>

    <h3 className='font-display my-5'>Password</h3>
    <RiRotateLockFill size={25} color='grey' className='absolute ml-96  mt-2 pointer-events-none'/>
    <input  type='text' placeholder='Enter your password' class="box-content font-display rounded-lg h-2 w-96 p-4 px-5 border-2 ..."/>
    {/* <p>Forgot password? Reset here</p> */}

    <div className='flex justify-end ...'> <p className='inline-block font-display text-sm'>Forgot password?</p> <p className='text-blue-500 inline-block font-display text-sm'>Reset here</p></div>
    
    <button type="button" className='h-10 w-96 text-white bg-sky-700 rounded-full font-display mt-3'>Login</button>
    
    <p className='font-display my-3 flex justify-center ...'>(Or)  Don't have account ?</p>
    
    <button className='h-10 w-96  text-blue-700  border-2 border-sky-700 rounded-full font-display my-2'>Register/Sign-up</button>
</form>
</div>
</div>
</main>
        </>
    );
}

export default Login;