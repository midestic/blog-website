import { travelGuide } from "@/components/mock-data/travelers-guide";
import Image from "next/image";

export default function PlaceGrid() {
  return (
    <div className="w-full  bg-[#f4f4f4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
        {travelGuide.slice(4).map((place, i) => (
          <div key={i} className="bg-white pb-[20px] shadow-xl">
            <div className="h-[453px] relative">
              <Image
                src={place.img}
                fill
                alt="travelers"
                className="object-cover"
              />
            </div>
            <div className="pt-[10px] space-y-[20px] ">
              <div className="flex items-center gap-[20px]">
                <div className="w-[8px] h-[32px] bg-secondary-color"></div>{" "}
                <p className="font-[500] text-[18px]">{place.date}</p>
              </div>

              <div className="space-y-[100px] px-[20px] ">
                <p className="font-[600] text-[31.64px]">{place.title}</p>

                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-[10px]">
                    <Image
                      src={"/icons/location.svg"}
                      width={18.75}
                      height={25}
                      alt="location-icon"
                    />{" "}
                    <p className="font-[500] text-[18px]">{place.location}</p>
                  </span>

                  <span className="flex items-center gap-[10px]">
                    <Image
                      src={"/icons/comment.svg"}
                      width={18.75}
                      height={25}
                      alt="location-icon"
                    />{" "}
                    <p className="font-[500] text-[18px]">
                      Comments {place.coments}
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
