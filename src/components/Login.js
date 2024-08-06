import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm)
  };


  return (
    <div>
      <Header />
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/43af842f-13d1-4986-bb16-10ba7e3c3de1/PK-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_4d951114-b858-42cf-9ed4-fb06ad9ee502_medium.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <div className="relative flex items-center justify-center min-h-screen">
          <form className="w-full max-w-md p-8 bg-black rounded-lg shadow-lg z-10 bg-opacity-70">
            <h1 className="mb-8 text-3xl font-bold text-white">{isSignInForm? "Sign in":"Sign up" }</h1>
            <div className="mb-4">
             {!isSignInForm && <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            }
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 text-gray-400 bg-gray-900 rounded"
              />
            </div>
            <button className="w-full p-3 text-xl font-semibold text-white bg-red-600 rounded hover:bg-red-700 cursor-pointer">
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