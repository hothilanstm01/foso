"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { menuList, MenuItem } from "@/data/menuData";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname.startsWith(path);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={` flex items-center justify-center 
        gap-x-16   transition-all duration-500 custom-box
        ${
          isScrolled
            ? "fixed z-50 h-24 w-full top-0"
            : "h-auto w-[80rem] px-[2.25rem] py-[0.75rem] rounded-[2.5rem] my-[1.5rem]"
        }`}
    >
      <div className="flex items-center">
        <div className="logo">
          <Link href="/">
            <img src="/icons/logo.svg" alt="logo" />
          </Link>
        </div>
      </div>

      <div className="flex space-x-6 text-[#25272A] font-medium gap-[0.5rem]">
        {menuList.map((item: MenuItem) => (
          <div
            key={item.key}
            className="relative group p-[0.5rem] outline 
            outline-1 outline-transparent 
            hover:outline-black  hover:bg-white hover:shadow-md 
            hover:shadow-gray-400 transition-all duration-300"
            onMouseEnter={() => setOpenDropdown(item.key)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.children && item.children.length > 0 ? (
              <div className="flex gap-[0.5rem]">
                <span
                  className={`flex items-center cursor-pointer ${
                    isActive(item.path)
                      ? `font-bold relative after:content-['']
                             after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:w-[6px] after:mt-[2px] after:rounded-full
                             after:h-[6px] after:bg-[#53B086]`
                      : ""
                  }`}
                >
                  {item.label}{" "}
                </span>
                <Image
                  src="/icons/CaretDown.svg"
                  alt="icon-down"
                  width={16}
                  height={16}
                  className="caret-icon transition-transform duration-300"
                />

                {/* Dropdown menu */}
                <ul
                  className={`absolute left-0 top-full  
                    min-w-full mt-0 w-52 bg-white 
                    shadow-xl rounded-lg border border-b-1 
                    border-[#53B086] transform transition-all 
                    duration-300 ease-in-out overflow-hidden 
                    ${
                      openDropdown === item.key
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }`}
                >
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={child.path}
                        className={`relative block px-6 py-2  after:content-['']
                             after:absolute after:left-0 after:bottom-0 after:w-0 
                             after:h-[2px] after:bg-[#53B086] after:transition-all 
                             after:duration-300 hover:after:w-full ${
                               pathname === child.path
                                 ? "text-[#53B086]"
                                 : "text-gray-700"
                             }`}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                href={item.path}
                className={` ${
                  pathname === item.path ? "bg-blue-500 text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-[0.5rem]">
        <button className="flex items-center justify-center gap-3 px-3 py-2 bg-gradient-grey rounded-[2.5rem]">
          <span>
            <img src="/icons/icon_country.svg" alt="" />
          </span>
          <p className="flex items-center text-[0.875rem] font-medium  gap-[0.25rem]">
            <span>VI</span>
            <span>
              <img src="/icons/CaretDown.svg" alt="" />
            </span>
          </p>
        </button>
        <button className="flex justify-center items-center gap-[0.75rem] bg-gradient-green px-[0.75rem] py-[0.5rem] border border-[#A3EED6] text-[#052B1E] rounded-[2.5rem] hover:bg-[#53B086]">
          <span className="text-[0.875rem] font-bold capitalize">
            Trở Thành Khách hàng
          </span>
          <div className="icon-button p-[0.25rem] rounded-full bg-[#000] flex items-center">
            <img src="/icons/ArrowUpRight.svg" alt="" />
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
