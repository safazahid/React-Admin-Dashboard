import React from 'react'

const Header = ({title}) => {
  return (
    <header className=' flex flex-row bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 g:px-8'>
        <h1 className='text-2xl font-semibold ext-gray-100'>
          {title}
        </h1>
      </div>
    </header>
  )
}

export default Header
