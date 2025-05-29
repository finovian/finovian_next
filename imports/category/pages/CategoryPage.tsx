import React from "react";
import CategoryTitle from "../components/CategoryTitle";
import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  return (
    <>
      <CategoryTitle />
      <ArticleList />
      <Pagination />
    </>
  );
};

export default CategoryPage;
