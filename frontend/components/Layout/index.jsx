import React from 'react'
import Logo from '../HeaderLogo'
import Steps from '../Steps'

const Layout = () => {
  return (
    <>
        <div className='flex flex-col items-center mt-8 gap-8'>
            <Logo/>
            <Steps/>
        </div>
    </>
  )
}

export default Layout