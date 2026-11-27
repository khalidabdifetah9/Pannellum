"use client";
import React, { useState } from "react";
import { sendMessageToGemini, chatmessage } from "../../app/actions/chat";
import { setTimeout } from "timers";
const Chat = () => {
  const [chat, setChat] = useState<chatmessage[]>([]);
  const [err, setError] = useState("");
  const [c, setC] = useState("");
  const [loading, setLoading] = useState(false);

  async function HandleSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formdata = new FormData(form);
    const message = formdata.get("chat");
    if (typeof message !== "string") return;
    const input = message.trim();
    setChat([...chat, { role: "user", text: input }]);
    setLoading(true);
    form.reset();
    try {
      const reply = await sendMessageToGemini(message);
      setChat([...chat, { role: "model", text: reply }]);
    } catch (e) {
      const err = e.message;
      console.log(e);
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="min-h-screen w-full h-full flex">
      <div className="w-1/6 h-full min-h-screen border border-white bg-green-500"></div>
      <div className="w-5/6 flex flex-col h-full bg-yellow-500 min-h-screen">
        <div className="bg-blue-500  p-5 w-full min-h-[80vh]">
          {chat.map((c, index) => (
            <div
              key={index}
              className={`w-full flex ${c.role === "user" ? "justify-end" : "justify-start"} overflow-auto`}
            >
              <p className="max-w-100 text-xl">{c.text}</p>
            </div>
          ))}
          <div className={`w-full "justify-start" overflow-auto`}>
            {loading && <p className="max-w-300 text-xl">Thinking...</p>}
            {err && <p className="max-w-300 text-xl">{err}</p>}
          </div>
        </div>
        <div className="px-20 flex bg-red-500 justify-center min-h-[20vh] items-center">
          <form onSubmit={HandleSend} className="flex space-x-5 ">
            <input
              placeholder="Chat With Us We Tell"
              autoComplete="off"
              onChange={(e) => setC(e.target.value)}
              className="border border-white focus:outline-none text-xl min-w-[60vw] rounded-4xl w-full h-15 px-5 "
              name="chat"
              type="text"
            ></input>
            <button
              className={`px-10 py-3 rounded-lg cursor-pointer text-black ${c ? "opacity-100" : "opacity-50 pointer-events-none "} bg-white text-lg`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chat;
