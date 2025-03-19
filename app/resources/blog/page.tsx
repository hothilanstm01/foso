"use client";
import BlogPage from "@/components/Blogs/BlogPage";
import React, { Suspense } from "react";

const Blog = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogPage />
    </Suspense>
  );
};

export default Blog;
