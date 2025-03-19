"use client";
import ResourcesPage from "@/components/ResourcesPage";
import React, { Suspense } from "react";

const Resources = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResourcesPage />
    </Suspense>
  );
};

export default Resources;
