import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { auth } from '../utils/firebase';
import { useEffect } from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])

    

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body