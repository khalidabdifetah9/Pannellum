"use client";
import React from "react";
import Linke from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Register = () => {
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState([false,""]);
  const router = useRouter();
  const SubmitHandler = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      setLoading(true);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      setLoading(false);
      const data = await res.json();
      console.log(data.message)
      res.status === 201 && router.push("/dashboard/login");
      
    } catch (e) {
        setError([true,e.message]);
    }
  };
  if(error[0]) return <p className="mt-60">{error[1]}</p>
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={SubmitHandler}
        className="flex flex-col w-full max-w-xl mx-auto mt-30 space-y-5"
        action=""
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full px-5  h-15 outline-none rounded-lg border-2 border-gray-400"
        />
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
          {loading? "Loading.." : "Register"}
        </button>
      </form>
      <Linke href={"/dashboard/login"}>Have An Account?</Linke>
    </div>
  );
};

export default Register;
