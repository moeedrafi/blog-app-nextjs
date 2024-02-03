import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import React from "react";

const BlogDetailPage = () => {
  return (
    <>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post One</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-400">Post One Content</p>
    </>
  );
};

export default BlogDetailPage;
