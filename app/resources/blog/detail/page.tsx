"use client";

import BlogDetailPage from "@/components/Blogs/BlogDetailPage";
import React, { Suspense } from "react";

const Detail = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BlogDetailPage />
    </Suspense>
  );
};

export default Detail;
