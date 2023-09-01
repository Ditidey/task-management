import React, { useState } from 'react';
import cm from '../../../public/cm.png';
import { RiAlarmWarningLine, RiUserSearchFill } from 'react-icons/ri';
import Login from '../Login';

const Home = () => {
    const [logOpen, setLogOpen] = useState(false);

    return (
        <div className={`md:mt-10 mt-3 w-full my-3  `}>
            {/* for nav section */}
            <div onClick={()=>setLogOpen(!logOpen)} className={`flex justify-between ${logOpen ? 'blur-sm' : ''}`}>
                <div className='flex shadow-md p-3 items-center justify-center'>
                    <img src={cm} alt="" className='w-6 h-6 bg-yellow-500 me-2' />
                    <h2>Complete me</h2>
                </div>
                <div className='flex'>
                    <button onClick={()=>setLogOpen(!logOpen)}  className='btn-side'> <RiUserSearchFill className='w-6 h-6'></RiUserSearchFill></button>
                    <button  className='btn-side'> <RiAlarmWarningLine className='w-6 h-6'></RiAlarmWarningLine></button>
                    <button className='btn'>Add Tasks</button>
                </div>             
            </div>
            <Login open={logOpen} setOpen={setLogOpen}></Login>
        </div>
    );
};

export default Home;