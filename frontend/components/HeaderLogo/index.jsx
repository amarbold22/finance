import React from 'react'

const Logo = () => {
  return (
    <>
        <div className='flex flex-row gap-3 items-center'>
                <svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path id="Vector" d="M16.1292 8.02654V0.248779H8.18207V8.02654H0.234863V15.9737H8.18207V23.7515H16.1292V15.9737H24.0764V8.02654H16.1292ZM16.1292 15.8043H8.18207V8.19719H16.1292V15.8043Z" fill="#0166FF"/>
                </svg>
                <p className='text-2xl font-bold drop-shadow-md'>Geld</p>
        </div>
    </>
  )
}

export default Logo