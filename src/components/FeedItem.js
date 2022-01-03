import React from 'react'
import {ReplyIcon,
    RetweetIcon,
    LikeIcon,
    ShareIcon,
} from "../icons/Icon"

const FeedItem = ({ avatar, content, displayName, image, timestamp, username,
}) => {
    return (
        <article className='flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer'>
            <img src={avatar} alt="Profile Picture" className='w-11 h-11 rounded-full' />
            <div className='flex-1'>
                <div className='flex items-center text-sm'>
                    <h4 className='font-bold'>{displayName}</h4>
                    <span className='ml-2 text-gray-dark'>{username}</span>
                    <div className='mx-2 bg-gray-dark h-1 w-1 border rounded-full'></div>
                    <span className='text-gray-dark'>
                        {timestamp?.toDate().toLocaleTimeString("tr-TR")}
                    </span>
                </div>

                <p className='mt-2 text-gray-900 text-sm'>{content}</p>
                {image && <img src={image} className='my-2 rounded-xl max-h-96'/>}
                
                <ul className='flex justify-between max-w-md -ml-1 mt-3'>
                    <li className='mt-2 flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-primary-light'>
                            <ReplyIcon className="h-7 w-7 fill-gray-dark group-hover:fill-primary-base"/>
                        </div>
                        <span className='group-hover:text-primary-base'>
                            78
                        </span>
                    </li>


                    <li className='mt-2 flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200'>
                            <RetweetIcon className="h-7 w-7 fill-gray-dark group-hover:fill-green-400"/>
                        </div>
                        <span className='group-hover:text-primary-base'>
                            78
                        </span>
                    </li>


                    <li className='mt-2 flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200'>
                            <LikeIcon className="h-7 w-7 fill-gray-dark group-hover:fill-pink-400"/>
                        </div>
                        <span className='group-hover:text-primary-base'>
                            78
                        </span>
                    </li>


                    <li className='mt-2 flex items-center space-x-3 text-gray-dark text-sm group'>
                        <div className='flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-blue-200'>
                            <ShareIcon className="h-7 w-7 fill-gray-dark group-hover:fill-blue-400"/>
                        </div>
                    </li>


                </ul>

            </div>

        </article>
    )
}

export default FeedItem
