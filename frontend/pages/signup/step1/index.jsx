import Layout from '@/components/Layout'
import React from 'react'
import Currency from '@/components/Currency'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Step1 = () => {
  const pathname = usePathname();
  const lastChar = pathname.slice(-1);
  const pathnumber = parseInt(lastChar);
  return (
    <div className='flex flex-col justify-center items-center bg-white gap-16'>
        <Layout/> 
        <div className='flex flex-col justify-center items-center w-96'>
          <Currency/>
          <Link href="../signup/step2" className='w-full'>
            <button className='btn bg-blue-500 text-white mt-6 w-full'>Confirm</button>
          </Link>
        </div>
    </div>
  )
}

export default Step1