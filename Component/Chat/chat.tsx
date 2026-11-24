"use client";
import React, { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(
    "hskdjhfjksdhjfks hsdjkhfjksdh hfskjdhfjksdh fs jfhksjdhfjksdhf jksdhfksjd",
  );
  async function HandleSend(e:React.FormEvent<HTMLFormElement>) {
       e.preventDefault();
       const form = e.currentTarget
       const formdata = new FormData(form);
       const message = formdata.get("chat");
       if(typeof message !== "string") return
       setChat(message)
       form.reset();
}
  return (
    <section className="min-h-screen w-full h-full flex">
      <div className="w-1/6 h-full min-h-screen border border-white bg-green-500"></div>
      <div className="w-5/6 flex flex-col h-full bg-yellow-500 min-h-screen">
        <div className="bg-blue-500  p-5 w-full min-h-[80vh]">
          <div className="w-full flex justify-end overflow-auto">
            <p className="max-w-100 text-xl">{chat}</p>
          </div>
        </div>
        <div className="px-20 flex bg-red-500 justify-center min-h-[20vh] items-center">
          <form
           onSubmit={HandleSend}
          className="flex space-x-5 ">
            <input
              placeholder="Chat With Us We Tell"
              autoComplete="off"
              className="border border-white focus:outline-none text-xl min-w-[60vw] rounded-4xl w-full h-15 px-5 "
              name="chat"
              type="text"
            ></input>
            <button className="px-10 py-3 rounded-lg cursor-pointer text-black bg-white text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chat;
