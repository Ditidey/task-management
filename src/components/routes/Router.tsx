import React from 'react';
import { createBrowserRouter} from 'react-router-dom'
import MainLay from '../../layouts/MainLay';
import Home from '../../pages/home/Home';
import Registration from '../../pages/Registration';
 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLay></MainLay>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            }
        ]
    }
 ])

export default router;