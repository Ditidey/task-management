import React from 'react';
import SidebarLeft from '../components/sidebar/SidebarLeft';
import SidebarRight from '../components/sidebar/SidebarRight';
import { Outlet } from 'react-router-dom';

const MainLay = () => {
    return (
        <div className='w-[100%] h-[100%]'>
            <div className='w-[95%] mx-auto grid md:grid-cols-7 gap-4 relative'>
                
                    <div className='grid-cols-1 md:static absolute bottom-0 flex'>
                        <SidebarLeft></SidebarLeft>
                          <div className='h-full border-l border-gray-300 mx-4'></div>
                    </div>
                    
                    <div className=' col-span-4 '>
                        <Outlet></Outlet>
                    </div>
               

                <div className='col-span-2 flex'>
                <div className='h-full border-l border-gray-300 mx-4'></div>
                    <SidebarRight></SidebarRight>
                </div>
            </div>
        </div>
    );
};

export default MainLay;