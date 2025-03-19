"use client";
import React from "react";

const categories = [
  { name: "Tất cả", count: 108 },
  { name: "Thiết Kế Website", count: 36 },
  { name: "Thiết Kế App Mobile", count: 13 },
  { name: "Quản Lý Sản Xuất", count: 25 },
  { name: "Quản Lý Bán Hàng", count: 22 },
  { name: "Báo Chí Nói Về FOSO", count: 7 },
  { name: "Tin Tức FOSO", count: 5 },
];
function Catalogs() {
  return (
    <div className="mb-8">
      <h2 className="text-[#050505] text-2xl font-bold mb-6 capitalize">
        Danh Mục
      </h2>
      <ul className="mt-4 space-y-4">
        {categories.map((category, index) => (
          <li key={index} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-[1.125rem] font-medium text-[#33404A]  hover:text-[#15AA7A] cursor-pointer">
              <span>{category.name}</span>
              <span className="text-[#667F93]">{category.count}</span>
            </div>
            {index !== categories.length - 1 && (
              <hr className="border-[#F1F5F7]" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Catalogs;
