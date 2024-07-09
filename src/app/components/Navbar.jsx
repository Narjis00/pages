import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
const navLinks =[
    {
        title : "About",
        path: "#about",
    },
   
    {
        title: "Blog",
        path: "#blog",
    }, 
    {
        title: "Contact",
        path: "#contact",
    },
  
]

const Navbar = () => {
    return(
<nav className="border-b border-gray-200">
    <div className="flex flex-wrap items-center justify-end mx-auto p-8 "> 
      <div className="menu hidden md:block md:w-auto" id="navbar">
        <ul className="flex p-4  md:p-0 md:flex-row space-x-8 ">
            {navLinks.map((link,index)=>(
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />

                </li>
            ))
            }
           
        </ul>
      </div>
    </div>
    </nav>
    );
};
export default Navbar