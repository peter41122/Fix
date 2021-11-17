import React from 'react';
import { useHistory } from 'react-router-dom';

function Checkoutconfirm() {
  const history = useHistory();

  const onSubmit = () => {
    history.push('/');
  };

  return (
    <div className="flex flex-row left-panel min-h-screen">
      <div className="flex-1 text-left ml-10 mt-32">
      </div>
      <div className="flex-1 bg-white main-panel">
        <svg className="left-triangle" width="100" height="100">
          <polygon points="0, 30, 30, 0, 30, 60" fill="white" />
        </svg>
        <div className="flex flex-col">
          <div className="flex-1 text-left ml-10 mt-24">
            <p className="text-lg font-bold">Brand your payment checkout</p>
            <p className="text-sm text-gray-900">Customize your Fix one-click payment checkout</p>
          </div>
          <div className="flex-1 flex-grow mt-3 w-4/5">
            <div className=" flex flex-col text-left mx-10">
              <form>
                <div className="my-3">
                  <span>Full Name</span>
                  <input className="px-4 w-full border-2 py-2 mt-2 rounded-md text-sm outline-none" type="text" name="fullname" placeholder="Ajoke Adewole" />
                </div>
                <div className="my-3">
                  <span>Number</span>
                  <input className="px-4 w-full border-2 py-2 mt-2 rounded-md text-sm outline-none" type="number" name="number" placeholder="2345-1671-6718-1918-7164" />
                </div>
                <div className="mt-5 flex flex-row">
                  <div className="flex-1 pr-2">
                    <span>Exp. Date</span>
                    <input className="px-4 border-2 py-2 rounded-md text-sm outline-none w-full" type="text" name="expdate" placeholder="" />
                  </div>
                  <div className="flex-1 pl-2">
                    <span>CVC ?</span>
                    <input className="px-4 border-2 py-2 rounded-md text-sm outline-none w-full" type="text" name="cvc" placeholder="" />
                  </div>
                </div>
                <div className="">
                  <button className="mt-10 mb-3 w-full bg-black hover:bg-gray-800 text-white py-2 transition duration-100 rounded-md" onClick={() => onSubmit()}>Checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkoutconfirm;
