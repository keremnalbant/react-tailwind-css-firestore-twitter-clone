import React from 'react'
import { SearchIcon } from "../icons/Icon"
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <aside className='w-80 ml-8'>
            <div className='fill-gray-dark text-gray-dark flex items-center space-x-4 p-2.5 mt-1 rounded-full bg-gray-200 focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:fill-primary-base'>
                <SearchIcon className="h-5 w-5 scale-90" />
                <input className='placeholder-gray-dark bg-transparent focus:outline-none' type="text" placeholder='Search Twitter' name="" id="" />
            </div>

            <div className='mt-6'>

                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'TwitterDev'
                    }}
                    options={{
                        height: '2000'
                    }}
                />

            </div>




        </aside>
    )
}

export default Widgets
