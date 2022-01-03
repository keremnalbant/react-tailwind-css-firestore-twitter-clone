import React from 'react'

const UserBox = () => {
    return (
        <div className='flex justify-between items-center mb-4 -ml-3 mr-5 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200'>
            <img src="https://i.hizliresim.com/grns1v9.jpeg" alt="Profile Picture" className='w-11 h-11 rounded-full' />
            <div className='flex flex-col'>
                <span className='pr-10 font-bold text-md text-black'>Kerem Nalbant</span>
                <span className='text-sm text-gray-dark'>@keremnalbant</span>
            </div>
            <div className='flex space-x-0.5'>
                <div className='w-1 h-1 bg-gray-600 rounded-full'/>
                <div className='w-1 h-1 bg-gray-600 rounded-full'/>
                <div className='w-1 h-1 bg-gray-600 rounded-full'/>
            </div>



        </div>
    )
}

export default UserBox
