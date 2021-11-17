import React from 'react';
import { useHistory } from 'react-router-dom';

function Getstarted() {
  const history = useHistory();

  const onNext = () => {
    history.push('/checkout');
  };

  const onPrev = () => {
    history.push('/signin');
  };

  return (
    <div className="flex flex-row left-panel min-h-screen">
      <div className="flex-1 text-left ml-10 mt-32">
        <div className="ml-10">
          <p className="text-lg font-bold text-white mb-10">Goodyear partners with Fix <br />for seamless payments</p>
          <span className="text-white text-xs prev-p" onClick={() => onPrev()}> ← Return to Goodyear</span>
          <div className="text-white left-panel-footer">
            <p>Powered by <span className="text-lg font-bold">Fix</span> | Change Language</p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-white main-panel">
        <svg className="left-triangle" width="100" height="100">
          <polygon points="0, 30, 30, 0, 30, 60" fill="white" />
        </svg>
        <div className="flex flex-col">
          <div className="flex-1 text-left ml-10 mt-24">
            <p className="text-lg font-bold">Get Started with Fix</p>
            <p className="text-sm text-gray-900">Please have the owner of this business or someone with significant management responsibility complete this form</p>
          </div>
          <div className="flex-1 flex-grow mt-3 w-4/5">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div className="my-3">
                  <span>Email</span>
                  <input className="px-4 w-full border-2 py-2 mt-2 rounded-md text-sm outline-none" type="email" name="email" placeholder="joe@yourcompany.com" />
                </div>
                <div className="">
                  <button className="mt-10 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100 rounded-md" onClick={() => onNext()}>Next →</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
