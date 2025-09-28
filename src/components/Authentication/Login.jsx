import React from "react";
import { IoClose } from "react-icons/io5";
function Login({ setlogin }) {
  return (
    <div className="mt-15 px-4 py-2 relative">
      <button
        onClick={() => setlogin(false)}
        className="-top-10 left-50 flex items-center justify-end hover:text-blue-600 absolute z-10"
      >
        <IoClose></IoClose>
        <div className="">close</div>
      </button>
      <form action="">
        <div className="flex flex-col items-center relative mb-5">
          <label htmlFor="" className="absolute text-xs -top-2.5  left-3">
            Name
          </label>
          <input
            type="text"
            placeholder=""
            className="bg-white px-2 py-1 border-none rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center relative mb-5">
          <label htmlFor="" className="absolute text-xs -top-2.5  left-3">
            Name
          </label>
          <input
            type="text"
            placeholder=""
            className="bg-white px-2 py-1 border-none rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center relative mb-5">
          <label htmlFor="" className="absolute text-xs -top-2.5  left-3">
            Name
          </label>
          <input
            type="text"
            placeholder=""
            className="bg-white px-2 py-1 border-none rounded-lg"
          />
        </div>
        <button className="px-2 py-1 rounded-lg bg-blue-300">Login</button>
      </form>
    </div>
  );
}

export default Login;
