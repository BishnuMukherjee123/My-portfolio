import React from 'react'

function Logo({loc,pname}) {
  return (
    <>
      <div className='max-w-20 justify-self-center'>
        <img className='mx-auto max-w-[64px] max-h-[64px]' src={loc} alt="" />
        <p className='text-[#4B5563] dark:text-[#D1D5DB]'>{pname}</p>
      </div>
    </>
  )
}

export default Logo
