import { HeroSection } from "@/app/(public)/blocks/hero-carousel";
import AboutMe from "./blocks/about-me";
import Categories from "./blocks/categories";
import PopularPost from "./blocks/popular-post";
import RecentPost from "./blocks/recent-post";
import Gear from "./blocks/gear";
import Product from "./blocks/product";
import GetinTouch from "./blocks/get-in-touch";
import TravelersGuide from "./blocks/travelers-guide";
import Places from "./blocks/places";
import Iframe from "./blocks/iframe";
import Purchase from "./blocks/purchase";
import PlaceGrid from "./blocks/place-grid";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-[50px] px-[50px] bg-[#f4f4f4]">
        <div className="flex flex-col gap-[50px] ">
          <AboutMe />
          <Categories />
          <PopularPost />
          <RecentPost />
          <Gear />
          <Product />
          <GetinTouch />
        </div>
        <div className="flex flex-col gap-[40px]">
          <TravelersGuide />
          <Places />
          <Iframe />
          <Purchase />
          <PlaceGrid />
        </div>
      </div>

      <div></div>
    </div>
  );
}
