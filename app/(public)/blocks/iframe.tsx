import { travelGuide } from "@/components/mock-data/travelers-guide";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Iframe() {
  return (
    <div className="w-full shadow-2xl pb-[20px]">
      <div className="h-[453px] ">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/IBMsZHck3uA?si=mO5NEvCbXLpJEyxf"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pt-[10px] space-y-[20px] ">
        <div className="flex items-center gap-[20px]">
          <div className="w-[8px] h-[32px] bg-secondary-color"></div>{" "}
          <p className="font-[500] text-[18px]">{travelGuide[3].date}</p>
        </div>

        <div className="space-y-[30px] px-[20px] ">
          <p className="font-[600] text-[31.64px]">{travelGuide[3].title}</p>
          <p className="font-[500] text-[24px]">{travelGuide[3].desc}</p>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-[10px]">
              <Image
                src={"/icons/location.svg"}
                width={18.75}
                height={25}
                alt="location-icon"
              />{" "}
              <p className="font-[500] text-[18px]">
                {travelGuide[3].location}
              </p>
            </span>

            <span className="flex items-center gap-[10px]">
              <Image
                src={"/icons/comment.svg"}
                width={18.75}
                height={25}
                alt="location-icon"
              />{" "}
              <p className="font-[500] text-[18px]">
                Comments {travelGuide[3].coments}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
