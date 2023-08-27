import React from 'react';
import {LiaFacebookMessenger, LiaUsersSolid} from 'react-icons/lia';
import {MdCollectionsBookmark, MdSettings} from 'react-icons/md';
import {RiAlarmWarningLine} from 'react-icons/ri';

const SidebarLeft = () => {
    return (
        <div className='md:mt-10 mt-4'>
            <button className='btn-side  '><MdCollectionsBookmark className='text-green-400 w-8 h-10'></MdCollectionsBookmark></button> <br />
            <button className='btn-side  '> <LiaFacebookMessenger className='text-blue-600 w-8 h-10'></LiaFacebookMessenger></button> <br />
            <button className='btn-side'> <RiAlarmWarningLine className='w-8 h-8'></RiAlarmWarningLine></button> <br />
            <button className='btn-side'><LiaUsersSolid className='text-white bg-blue-600 w-8 h-8'></LiaUsersSolid></button> <br />
            <button className='btn-side'><MdSettings className='  text-yellow-600 w-8 h-8'></MdSettings></button> <br />
        </div>
    );
};

export default SidebarLeft;