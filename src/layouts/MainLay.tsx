import React from 'react';
import SidebarLeft from '../components/sidebar/SidebarLeft';
import SidebarRight from '../components/sidebar/SidebarRight';
import { Outlet } from 'react-router-dom';

const MainLay = () => {
    return (
        <div className='w-[100%]'>
            <div className='w-[98%] mx-auto md:grid-cols-7 grid'>
                <div className='grid-cols-1'>
                    <SidebarLeft></SidebarLeft>
                </div>
                <div className='grid-cols-4 w-[100%]'>
                    <Outlet></Outlet>
                </div>
                <div className='grid-cols-2'>
                    <SidebarRight></SidebarRight>
                </div>
            </div>
        </div>
    );
};

export default MainLay;