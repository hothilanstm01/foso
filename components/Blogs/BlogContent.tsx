"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "../Pagination";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Catalogs from "./Catalogs";
import BannerAside from "./BannerAside";
import ButtonTag from "../common/ButtonTag";

interface BlogItem {
  id: string | number;
  name: string;
}
//fakedata
const posts = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Tại sao BOM quan trọng trong quản lý sản xuất?`,
}));
const BlogContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 6;

  const startIndex = (page - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleDetail = (item: BlogItem) => {
    router.push(
      `/resources/blog/detail?slug=${item?.id}&name=${encodeURIComponent(
        item?.name
      )}`
    );
  };

  return (
    <div className="">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[auto_22.875rem] gap-8 mb-[4.5rem]">
        {/* MAIN CONTENT */}
        <main>
          <h2 className="text-[2.25rem]/[4.5rem] font-bold mb-[1.5rem]">
            Tất Cả Bài Viết
          </h2>

          {/* Banner */}
          <div className="bg-gradient-blue relative w-full  mx-auto  overflow-hidden  text-white pl-[3.69rem] pt-[3.79rem]  flex items-center rounded-[2.5rem] mb-12">
            <div className="flex-shrink-0 w-[23.5rem] h-auto pb-[3.09rem]">
              <h2 className="text-[2.25rem] font-bold">
                Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
              </h2>
              <button
                className={`group  flex items-center gap-8 px-6 py-2
                 text-white font-bold text-[0.875rem]/[1.3125rem] 
                 button rounded-[2.5rem] border-2
                  border-[#fff] mt-8 border-solid transition-all duration-300`}
              >
                <span>Tham Gia Ngay</span>
                <span className="transition-transform duration-300 group-hover:rotate-45">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className=""
                  >
                    <path
                      d="M14.344 4.50012V11.8126C14.344 12.0364 14.2551 12.251 14.0968 12.4092C13.9386 12.5675 13.724 12.6564 13.5002 12.6564C13.2764 12.6564 13.0618 12.5675 12.9036 12.4092C12.7454 12.251 12.6565 12.0364 12.6565 11.8126V6.53918L5.09717 14.0971C4.93866 14.2556 4.72368 14.3446 4.49951 14.3446C4.27535 14.3446 4.06036 14.2556 3.90185 14.0971C3.74335 13.9386 3.6543 13.7236 3.6543 13.4994C3.6543 13.2753 3.74335 13.0603 3.90185 12.9018L11.4612 5.34387H6.18771C5.96394 5.34387 5.74933 5.25498 5.59109 5.09674C5.43286 4.93851 5.34396 4.7239 5.34396 4.50012C5.34396 4.27635 5.43286 4.06173 5.59109 3.9035C5.74933 3.74527 5.96394 3.65637 6.18771 3.65637H13.5002C13.724 3.65637 13.9386 3.74527 14.0968 3.9035C14.2551 4.06173 14.344 4.27635 14.344 4.50012Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div className="w-1/2 absolute right-0 bottom-0">
              <img
                src="/images/image-cut.png"
                alt="Community"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* list blog */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 ">
            {currentPosts.map((_, index) => (
              <div
                key={index}
                className="cursor-pointer "
                onClick={() => handleDetail(_)}
              >
                <Image
                  src="/images/image.png"
                  alt="BOM là gì?"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
                <div className="mt-6 item-content flex flex-col gap-5">
                  <ButtonTag
                    text="Quản lý sản xuất"
                    color="blue"
                    background="primary"
                  />
                  <h3 className="text-2xl font-bold text-[#33404A] cursor-pointer hover:text-blue-500">
                    {_.name}
                  </h3>
                  <div className="flex items-center gap-3 text-[#667F93] text-[1rem]/[1.5rem] font-medium">
                    <div className="flex items-center gap-2">
                      <img src="/icons/CalendarBlank.svg" alt="" />{" "}
                      <span>17/11/2022</span>
                    </div>

                    <div className="w-px h-4 bg-gray-300"></div>

                    <div className="flex items-center gap-2">
                      <img src="/icons/Clock.svg" alt="" />{" "}
                      <span>10 phút đọc</span>
                    </div>
                  </div>
                  <Link href="#">
                    <div className="group flex items-center gap-4 text-[#667F93] text-[1.125rem]/[1.6875rem] font-semibold transition-colors duration-300 hover:text-blue-600">
                      <span className=""> Khám phá thêm</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M20.7806 12.9407L14.0306 19.6907C13.8899 19.8314 13.699 19.9105 13.5 19.9105C13.301 19.9105 13.1101 19.8314 12.9694 19.6907C12.8286 19.55 12.7496 19.3591 12.7496 19.1601C12.7496 18.9611 12.8286 18.7702 12.9694 18.6295L18.4397 13.1601H3.75C3.55109 13.1601 3.36032 13.0811 3.21967 12.9404C3.07902 12.7998 3 12.609 3 12.4101C3 12.2112 3.07902 12.0204 3.21967 11.8798C3.36032 11.7391 3.55109 11.6601 3.75 11.6601H18.4397L12.9694 6.19071C12.8286 6.04998 12.7496 5.85911 12.7496 5.66008C12.7496 5.46106 12.8286 5.27019 12.9694 5.12946C13.1101 4.98873 13.301 4.90967 13.5 4.90967C13.699 4.90967 13.8899 4.98873 14.0306 5.12946L20.7806 11.8795C20.8504 11.9491 20.9057 12.0318 20.9434 12.1229C20.9812 12.2139 21.0006 12.3115 21.0006 12.4101C21.0006 12.5086 20.9812 12.6062 20.9434 12.6973C20.9057 12.7883 20.8504 12.8711 20.7806 12.9407Z"
                          fill="#667F93"
                          className="transition-colors duration-300 group-hover:fill-blue-600"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* 🔹 SIDEBAR */}
        <aside className="">
          <h2 className="text-2xl font-bold mb-[1.5rem]">Tìm kiếm</h2>
          {/* search*/}
          <div className="flex items-center rounded-xl bg-white shadow-[0px_12px_24px_-4px_rgba(145,158,171,0.16)] px-6 py-3 ">
            <input
              type="text"
              placeholder="Tìm kiếm bài viết"
              className="flex-1 text-[1rem] bg-transparent font-medium outline-none placeholder-[#ACB3C7]"
            />
            <button className=" p-3 flex items-center justify-center bg-[#15AA7A] text-white rounded-xl">
              <img src="/icons/MagnifyingGlass.svg" alt="" />
            </button>
          </div>

          {/* catalog */}
          <div className="mt-8">
            <Catalogs />
          </div>

          {/* 📢 Banner */}
          <BannerAside />
        </aside>
      </div>
      <Suspense fallback={<div>Đang tải...</div>}>
        <Pagination totalItems={posts.length} itemsPerPage={itemsPerPage} />
      </Suspense>
    </div>
  );
};

export default BlogContent;
