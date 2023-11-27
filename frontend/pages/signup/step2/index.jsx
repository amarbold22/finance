import React from 'react'
import Layout from '@/components/Layout'
import Balance from '@/components/Balance'
import Link from 'next/link'

const Step2 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-16">
        <Layout/>
        <div className='flex flex-col justify-center items-center w-96'>
          <Balance/>
          <Link href="../signup/step3" className='w-full'>
            <button className='btn bg-blue-500 text-white mt-6 w-full'>Confirm</button>
          </Link>
        </div>
    </div>
  )
}

export default Step2