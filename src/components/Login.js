import React from 'react'
import Header from './Header'
import { useState,useRef } from 'react';
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const [errMsg,setErrMsg]=useState(null);
  const dispatch = useDispatch();
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handleButtonClick=()=>{
    const message=validateData(email.current.value,password.current.value);
  
    setErrMsg(message);

    if(message) return;

    if(!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          }).then(() => {
            const {uid,email,displayName,photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          }).catch((error) => {
            setErrMsg(error.message)
          });
          
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMsg(errorMessage);
         
        });
    }
    else {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    }
  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  };


  return (
    <div>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/43af842f-13d1-4986-bb16-10ba7e3c3de1/PK-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4d951114-b858-42cf-9ed4-fb06ad9ee502_medium.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <div className="relative flex items-center justify-center min-h-screen">
          <form onSubmit={(e)=>e.preventDefault()} className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg z-10 bg-opacity-70">
            <h1 className="mb-8 text-3xl font-bold text-white">{isSignInForm? "Sign in":"Sign up" }</h1>
            <div className="mb-4">
             {!isSignInForm && <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            }
            </div>
            <div className="mb-4">
              <input
              ref={email}
                type="text"
                placeholder="Email or Phone"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            </div>
            <div className="mb-6">
              <input
              ref={password}
                type="password"
                placeholder="Password"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            </div>
            <p className="text-red-500 text-lg mb-4">{errMsg}</p>
            <button className="w-full p-3 text-xl font-semibold text-white bg-red-600 rounded hover:bg-red-700 cursor-pointer" onClick={handleButtonClick}>
            {isSignInForm? "Sign in":"Sign up" }
            </button>
            <div className="flex justify-between mt-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">Forgot your password?</a>
              <a href="#" className="hover:underline cursor-pointer" onClick={toggleSignInForm}>{isSignInForm? "New here? Sign up now!" :"All ready registered? Sign in now!" }</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;