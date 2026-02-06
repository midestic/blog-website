import Slider from "../blocks/slider";
import GridOne from "./grid-one";
import GridTwo from "./grid-two";
import SectionFive from "./section-five";
import SectionOne from "./section-one";
import SectionSix from "./section-six";
import Sponsors from "./sponsors";

export default function page() {
  return (
    <div className="space-y-[100px]">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/icons/about-hero.svg')" }}
      >
        <p className="font-[800] text-[64px] text-white">About us</p>
      </div>

      <div className="px-[50px] max-md:px-[20px]">
        <SectionOne />

        <div className="mt-[100px] grid grid-cols-1 sm:grid-cols-2 gap-[100px]">
          <div>
            <GridOne />
          </div>
          <div>
            <GridTwo />
          </div>
        </div>
      </div>

      <div className="py-[50px] bg-[#EDEDED]">
        <Sponsors />
      </div>

      <div>
        <SectionFive />
      </div>

      <div>
        <SectionSix />
      </div>
    </div>
  );
}
