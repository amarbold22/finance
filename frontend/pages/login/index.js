import React, { useContext } from 'react'
import { UserContext } from '@/context/UserProvider';
import { useRouter } from "next/router";
import Link from 'next/link';

const LogIn = () => {
    const { formUserData, changeFormUserData, login, signup } = useContext(UserContext);
    const router = useRouter(); 
  return (
    <>
    <main className='flex flex-row h-screen bg-white'>
      <div className='flex bg-white w-6/12 justify-center align-center m-auto'>
        <div className='flex flex-col gap-8 w-[384px] items-center'>
            <div className='flex flex-row gap-3 items-center p-2'>
                <svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector" d="M16.1292 8.02654V0.248779H8.18207V8.02654H0.234863V15.9737H8.18207V23.7515H16.1292V15.9737H24.0764V8.02654H16.1292ZM16.1292 15.8043H8.18207V8.19719H16.1292V15.8043Z" fill="#0166FF"/>
                </svg>
                <p className='text-2xl font-bold drop-shadow-md'>Geld</p>
            </div>
            <div className='flex flex-col gap-1 items-center'>
              <p className='text-2xl font-semibold'>Welcome Back</p>
              <p>Welcome back, Please enter your details</p>
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <input type="text" name="email" placeholder="Email" className='border-gray-300 pl-3 input' onChange={(e) => {
                changeFormUserData(e.target.name, e.target.value);
              }} value={formUserData.email}></input>
              <input type="password" name="password1" placeholder="Password" className='border-gray-300 pl-3 input' onChange={(e) => {
                changeFormUserData(e.target.name, e.target.value);
              }} value={formUserData.password1}></input>
              <button className='btn bg-blue-500 w-full' onClick={login}>Log In</button>
            </div>
            <div className='flex flex-row items-center'>
              <p className=''>Don't have account?</p>
              <Link href='/signup'>
                  <button className='btn btn-active btn-link text-blue-500' onClick={signup}>Sign up</button>
              </Link>
            </div>
        </div>
      </div>
      <div className='hidden sm:flex bg-blue-500 w-6/12'></div>
    </main></>
  )
}

export default LogIn;