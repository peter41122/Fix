import React from 'react';
import { useHistory } from 'react-router-dom';

function Signup() {
  const history = useHistory();

  const onSignin = () => {
    history.push('/signin');
  };

  return (
    <div className="flex flex-row sign-left-panel min-h-screen">
      <div className="flex-1 m-auto hidden md:block">
        <img className="m-auto object-bottom" src="../assets/logo.png" alt="Fix" />
      </div>
      <div className="flex-1 bg-white main-panel">
        <svg className="left-triangle" width="100" height="100">
          <polygon points="0, 30, 30, 0, 30, 60" fill="white" />
        </svg>
        <div className="flex flex-col">
          <div className="m-5 mb-10 flex flex-row-reverse items-center text-xs">
            <button className="bg-blue-500 hover:bg-blue-300 text-white transition duration-100 w-1/6 p-1" onClick={() => onSignin()}>Login</button>
            <span className="pr-3">Already member? </span>
          </div>
          <div className="flex-1 text-left ml-10 mt-3 hidden md:block">
            <p className="text-lg font-bold">Welcome to Fix</p>
            <p className="text-sm text-gray-300">Let's get you started. Create an account begin.</p>
          </div>
          <div className="flex-1 flex-grow mt-3 md:mt-8">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div className="mt-5 flex flex-row">
                  <div className="flex-1 pr-2">
                    <span>First Name</span>
                    <input className="px-4 border-2 py-2 rounded-md text-sm outline-none w-full" type="text" name="firstname" placeholder="Enter your first name" />
                  </div>
                  <div className="flex-1 pl-2">
                    <span>Last Name</span>
                    <input className="px-4 border-2 py-2 rounded-md text-sm outline-none w-full" type="text" name="lastname" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="my-3">
                  <span>Email Address</span>
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div className="my-3">
                  <span>Password</span>
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="my-3">
                  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label htmlFor="vehicle1"> By clicking on this checkbox, you agree to our <span className="cursor-pointer text-sm text-blue-600">Term of service</span> and <span className="cursor-pointer text-sm text-blue-600">Privacy Policy</span>.</label>
                </div>
                <div className="">
                  <button className="mt-4 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100 rounded-md" onClick={() => onSignin()}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
