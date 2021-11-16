import React from 'react';
import { useHistory } from 'react-router-dom';

function Signin() {
  const history = useHistory();

  const onSignup = () => {
    history.push('/signup');
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // history.push('/dashboard');
  };
  return (
    <div className="flex flex-row bg-white min-h-screen">
      <div className="flex-1 text-white sign-left-panel">
        <div className="flex flex-col">
          <div className="m-5 mb-3 flex flex-row-reverse items-center text-xs">
            <button className="bg-white hover:bg-gray-300 text-blue-600 transition duration-100 w-1/6 p-1" onClick={() => onSignup()}>Sign Up</button>
            <span className="pr-3">Not a user? </span>
          </div>

          <div className="flex-1 m-10 mt-0">
            <img className="my-auto w-1/12 h-1/12" src="../assets/logo.png" alt="Fix" />
          </div>
          <div className="flex-1 text-left ml-10 mt-6 mb-6 hidden md:block">
            <p className="text-lg font-bold">Welcome Back</p>
            <p className="text-sm"> Login your Fix account to begin</p>
          </div>
          <div className="flex-1 flex-grow mt-3 md:mt-12">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div className="my-5 md:my-3">
                  <span>Email Address</span>
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="Enter your email address" />
                </div>
                <div className="my-5 md:my-3">
                  <span>Password</span>
                  <input className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" name="password" placeholder="Enter your password" />
                </div>
                <div className="flex justify-between my-5 md:my-3">
                  <div>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1"> Remember Me</label>
                  </div>
                  <span className="text-sm hover:underline cursor-pointer">Forgot password?</span>
                </div>

                <div className="">
                  <button className="mt-4 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100 rounded-md" onClick={(e) => onSubmit(e)}>Sign in</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 my-auto hidden md:block">
        <svg width="100" height="100">
          <polygon points="0, 0, 30, 30, 0, 60" fill="#0070c0" />
        </svg>
      </div>
    </div>
  );
}

export default Signin;
