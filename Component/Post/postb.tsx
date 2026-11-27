"use client";
import React, { useState } from "react";
interface watch {
  con: boolean;
  mesg: string;
}
const PostB = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<watch>();
  async function HandelPost(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formdata = e.currentTarget;
    const data = new FormData(formdata);
    const title = data.get("title").toString().trim();
    const img = data.get("path").toString().trim();
    const des = data.get("des").toString().trim();
    setLoading(true);
    formdata.reset();
    try {
      const res = await fetch("/api/postb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, des }),
      });
      if (!res.ok) {
        throw new Error("unable to send");
      }
      setError({ con: true, mesg: "Post Submited" });
    } catch (e) {
      const err = e.message;
      setError(err || "can't post some is wrong");
    } finally {
      setLoading(false);
    }
  }
  return (
    <section className="mt-[30vh] max-w-100 mx-auto ">
      <form onSubmit={HandelPost} className="flex flex-col space-y-7">
        {error && (
          <p
            className={`${error.con ? "text-green-400" : "text-red-400"} text-sm text-center`}
          >
            {error.mesg}
          </p>
        )}
        <input
          name="title"
          placeholder="title"
          className="border-2 border-white focus:outline-none rounded-xl px-3 h-12"
          type="text"
        />
        <input
          name="path"
          placeholder="image url"
          className="border-2 border-white focus:outline-none rounded-xl px-3 h-12"
          type="text"
        />
        <textarea
          className="border-2 border-white min-h-40 focus:outline-none rounded-xl p-3 "
          name="des"
          id=""
        ></textarea>
        <button className="bg-white px-9 cursor-pointer text-black text-lg py-3">
          {loading ? "Submiting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default PostB;
