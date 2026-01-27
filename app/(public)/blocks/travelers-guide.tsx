import { travelGuide } from "@/components/mock-data/travelers-guide";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function TravelersGuide() {
  return (
    <div className="w-full shadow-2xl pb-[20px]">
      <div className="h-[453px] relative">
        <Image
          src={"/icons/t-guide.svg"}
          fill
          alt="travelers"
          className="object-cover"
        />
      </div>
      <div className="pt-[10px] space-y-[20px] ">
        <div className="flex items-center gap-[20px]">
          <div className="w-[8px] h-[32px] bg-secondary-color"></div>{" "}
          <p className="font-[500] text-[18px]">{travelGuide[0].date}</p>
        </div>

        <div className="space-y-[30px] px-[20px] ">
          <p className="font-[600] text-[31.64px]">{travelGuide[0].title}</p>
          <p className="font-[500] text-[24px]">{travelGuide[0].desc}</p>

          <div className="flex justify-between items-center">
            <span className="flex items-center gap-[10px]">
              <Image
                src={"/icons/location.svg"}
                width={18.75}
                height={25}
                alt="location-icon"
              />{" "}
              <p className="font-[500] text-[18px]">
                {travelGuide[0].location}
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
                Comments {travelGuide[0].coments}
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
