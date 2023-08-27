import React from 'react';
import { createBrowserRouter} from 'react-router-dom'
import MainLay from '../../layouts/MainLay';
import Home from '../../pages/home/Home';
 

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLay></MainLay>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
 ])

export default router;