"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const links = [
  { name: "About", id: 0, ref: "/about" },
  { name: "Blog", id: 1, ref: "/blog" },
  { name: "Contacts", id: 2, ref: "/contacts" },
  { name: "Dashboard", id: 3, ref: "/dashboard" },
  { name: "Portfolio", id: 4, ref: "/portfolio" },
];
const Nav = () => {
  const [Id, setId] = useState(null);
  const handelclick = (tati, e) => {
    //  e.preventDefault();
    setId(tati);
  };
  const session = useSession();
  const route = useRouter();
  return (
    <>
      <nav className="flex fixed left-0 top-0 z-100 px-60 bg-black w-full py-10 items-center justify-between text-[rgba(255,255,255,0.7)]">
        <Link className="font-semibold text-2xl" href={"/"}>
          lamamia
        </Link>
        <ul className="flex space-x-3 items-center">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                onClick={() => handelclick(index)}
                href={link.ref}
                className={`${Id === index ? "text-[#F87171]" : "text-white"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {session.status === "authenticated" && (
            <button
              className="cursor-pointer rounded-sm px-3 py-1 bg-[#61b586]"
              onClick={() => signOut({ callbackUrl: "/dashboard/login" })}
            >
              LogOut
            </button>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
