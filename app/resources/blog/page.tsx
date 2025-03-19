import BlogContent from "@/components/Blogs/BlogContent";
import Breadcrumb from "@/components/Breadcrumb";
import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col gap-[0.5rem] ">
      <div className="pt-[3rem] flex flex-col gap-[0.5rem] px-[5rem] overflow-hidden">
        <div className="breadcrumb flex items-center justify-center mb-[4rem]">
          <Breadcrumb />
        </div>
        <section className="hero-section relative flex flex-col gap-[0.5rem] text-center ">
          <h1 className="text-[4rem]/[6.25rem] li font-normal text-[#050505]">
            Blog <span className="text-custom-green">FOSO</span> - <br /> Cập
            Nhật Tin Tức <span className="text-custom">Mới Nhất</span>
          </h1>
          <p className="text-[1.125rem] font-medium text-[#33404A]">
            Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
          </p>
          <div className="saly absolute top-center left-[-5rem]">
            <img src="/images/Saly-42.png" alt="" />
          </div>
          <div className="saly absolute top-center right-[-5rem]">
            <img src="/images/Saly-25.png" alt="" />
          </div>
        </section>
      </div>
      <section className="blog-content w-full pt-[6rem]">
        <BlogContent />
      </section>
    </div>
  );
};

export default Blog;
