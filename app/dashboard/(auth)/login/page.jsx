"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
const Login = () => {
  const HandelCick = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };
const [error,setError] = useState(null);
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const resutl = await signIn("credentials",{email,password,callbackUrl:"/dashboard"})
    if(resutl?.error){setError(resutl.error)}
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col w-full max-w-xl mx-auto mt-30 space-y-5"
        action=""
        >
         <p className="text-sm h-5 text-red-500">{error !== null ? error :""}</p>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-5  h-15 outline-none rounded-lg border-2 border-gray-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5  h-15 outline-none rounded-lg border-2 border-gray-400"
        />
        <button className="px-8 cursor-pointer py-3 bg-[#61b586] rounded-lg">
         Login
        </button>
      </form>
      <button onClick={HandelCick}>Login With Google</button>
    </div>
  );
};

export default Login;
