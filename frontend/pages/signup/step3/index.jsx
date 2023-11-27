import Layout from '@/components/Layout'
import React from 'react'
import Link from 'next/link'
import Finish from '@/components/Finish'

const Step3 = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white gap-16">
        <Layout/>
        <div className='flex flex-col justify-center items-center w-96'>
          <Finish/>
          <Link href="/dashboard" className='w-full'>
            <button className='btn bg-blue-500 text-white mt-6 w-full'>Go to Dashboard</button>
          </Link>
        </div>
    </div>
  )
}

export default Step3