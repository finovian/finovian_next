import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturedArticle from "../components/FeaturedArticle";
import LatestPosts from "../components/LatestPosts";
import CategoryHighlights from "../components/CategoryHighlights";
import Subscribe from "../components/Subscribe";
import SiteAbout from "../components/SiteAbout";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedArticle />
      <LatestPosts />
      <CategoryHighlights />
      <Subscribe />
      <SiteAbout />
    </>
  );
};

export default HomePage;
