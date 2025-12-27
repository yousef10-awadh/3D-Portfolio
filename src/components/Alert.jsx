import React from 'react'

function Alert({Type,Text}) {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
        <div className={`
        ${Type === 'danger' ? 'bg-red-800' : 'bg-blue-800'}
        p-2 text-indigo-100
        leading-none lg:rounded-full 
        flex lg:inline-flex items-center`} role="alert"
        >
          <span className={`${Type === 'danger' ? 'bg-red-500' : 'bg-blue-500'} 
          flex rounded-full uppercase
          px-2 py-1 font-semibold mr-3 text-xs`}>{Type === 'danger' ? 'Error' : 'Success'}</span>
          <p className='mr-2 text-left'>{Text}</p>
        </div>
    </div>
  )
}

export default Alert