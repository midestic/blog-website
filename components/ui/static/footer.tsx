import Slider from "@/app/(public)/blocks/slider";
import Subscribe from "@/app/(public)/blocks/subscribe";
import Image from "next/image";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="mt-[100px] space-y-[50px]">
      <div>
        <Slider />
        <Subscribe />
      </div>
      <div className="border border-b">
        <div className="py-[70px] px-[200px] flex justify-between bg-white max-md:flex-col">
          <div className="w-[30%] border max-md:w-full">
            <Image src={"/icons/Logo.svg"} width={149} height={63} alt="logo" />
          </div>
          <div className="w-[60%] flex justify-between items-center max-md:w-full max-md:flex-col max-md:gap-[50px] max-md:items-center">
            <div className="w-[20%] max-md:w-full">
              <span className="font-[700] text-[16px]">Body</span>
            </div>
            <div className="w-[20%] max-md:w-full">
              <span className="font-[700] text-[16px]">Travel</span>
            </div>
            <div className="w-[20%] max-md:w-full">
              <span className="font-[700] text-[16px]">Account</span>
            </div>
          </div>
        </div>
        <div className="py-[50px] px-[200px] bg-[#535353] flex justify-between pb-[100px] border border-b-white max-md:flex-col max-md:px-[20px]">
          <div className="w-[30%] space-y-[40px] max-md:w-full">
            <p className="font-[400] text-[16px] text-white">
              We are location independent bloggers, digital influencers, small
              group tour organizers and world travelers with a serious passion
              for the sun, the sea and adventure.
            </p>

            <p className="font-[400] text-[16px] text-white">
              We are location independent bloggers, digital influencers, small
              group tour organizers and world travelers with a serious passion
              for the sun, the sea and adventure. Eight years and 60-something
              countries later and we are still on the road.
            </p>
          </div>
          <div className="w-[60%] flex justify-between items-start font-[400] text-[16px] text-white max-md:w-full max-md:flex-col max-md:gap-[40px]">
            <div className="space-y-[40px] w-[20%] max-md:w-full">
              <p>Add: 221B John hope Street, Lekki, Lagos, Nigeria.</p>
              <p>T: +234 706 507 8544</p>
              <p>E: info@redexplorers.com</p>
              <p>W: www. redexplorers.com</p>
            </div>

            <div className="w-[20%] max-md:w-full">
              <ul className="space-y-[40px]">
                <li>My List</li>
                <li>My Requests</li>
                <li>My Credits</li>
                <li>My Info</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="w-[20%] max-md:w-full">
              <ul className="space-y-[40px]">
                <li>Travel</li>
                <li>Why Travel</li>
                <li>Become a Traveler</li>
                <li>How it Works</li>
                <li>Travelling FAQs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-[200px] py-[50px] bg-[#535353] flex justify-between items-center max-md:flex-col max-md:px-[20px] max-md:gap-[40px]">
          <Image
            src={"/icons/side-hustle.svg"}
            width={189}
            height={41}
            alt="footer-logo"
          />

          <div className="flex items-center gap-[20px]">
            {[
              "/icons/ff.svg",
              "/icons/ft.svg",
              "/icons/fg.svg",
              "/icons/fl.svg",
            ].map((img) => (
              <Image key={img} src={img} width={20} height={20} alt="socials" />
            ))}
          </div>

          <div className="font-[400] text-[16px] text-white">
            <p>
              © {year} RedExplorers. All rights reserved | Terms | Privacy |
              Site Map
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
