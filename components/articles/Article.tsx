import React from "react";
import CategaryHeading from "../common/CategaryHeading";
import BlogCard from "../common/BlogCard";

const Article = () => {
  return (
    <div className="flex flex-col ">
      <CategaryHeading />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
};

export default Article;
