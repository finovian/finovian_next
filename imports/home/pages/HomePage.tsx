import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedArticle from "../components/FeaturedArticle";
import LatestPosts from "../components/LatestPosts";
import CategoryHighlights from "../components/CategoryHighlights";


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedArticle />
      <LatestPosts />
      <CategoryHighlights />
    </>
  );
};

export default HomePage;
