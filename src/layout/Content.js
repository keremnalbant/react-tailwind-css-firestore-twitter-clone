import React, { useState } from 'react'
import { useEffect } from 'react'
import Divider from '../components/Divider'
import {
    PopularIcon,
    ImageIcon,
    GIFIcon,
    PollIcon,
    EmojiIcon,
    ScheduleIcon,
    ReplyIcon,
    RetweetIcon,
    LikeIcon,
    ShareIcon,
    SearchIcon
}
    from "../icons/Icon"
import db from "../firebase"
import firebase from "firebase/compat/app"
import FeedList from '../components/FeedList'

const Content = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        db.collection('feed')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    }, [])

    console.log(tweets);


    const [content, setContent] = useState('')

    const sendTweet = () => {
        if (content !== '') {
            db.collection('feed').add({
                displayName: "Kerem Nalbant",
                username: "@keremnalbant",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                image: "",
                avatar: "https://i.hizliresim.com/grns1v9.jpeg"
            })
            setContent('')

        }

    }

    return (
        <main className='px-3 flex-1 border'>
            <header className='sticky top-0 z-10 p-3 flex items-center justify-between bg-white bg-opacity-90'>
                <h1 className='font-bold text-xl'>Home</h1>
                <PopularIcon className="w-7 h-7 fill-primary-base" />
            </header>

            <div className='mt-3 pb-10 flex'>
                <img src="https://i.hizliresim.com/grns1v9.jpeg" alt="Profile Picture" className='w-12 h-12 rounded-full mr-4' />
                <textarea className='focus:outline-none text-justify resize-none overflow-hidden w-9/12 text-xl  placeholder-gray-dark' type="text" name="" id="" placeholder="What's happening?"
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
            </div>

            <div className='flex justify-between items-center mx-12 border-t'>
                <div className='flex mt-5 space-x-4'>
                    <ImageIcon className="w-7 h-7 fill-primary-base" />
                    <GIFIcon className="w-7 h-7 fill-primary-base" />
                    <PollIcon className="w-7 h-7 fill-primary-base" />
                    <EmojiIcon className="w-7 h-7 fill-primary-base" />
                    <ScheduleIcon className="w-7 h-7 fill-primary-base" />
                </div>
                <button className='font-bold bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full mt-2 h-10 w-20 transform transition-colors duration-200'
                    onClick={sendTweet}
                >Tweet
                </button>

            </div>

            <Divider />

            <FeedList tweets={tweets} />

        </main>
    )
}

export default Content
