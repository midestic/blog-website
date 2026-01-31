import { travel } from "@/components/mock-data/travel-tips";
import Image from "next/image";

export default function TipsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[50px]">
      {travel.map((item, i) => (
        <div
          key={i}
          className="rounded-[32px] shadow-xl overflow-hidden pb-[10px]"
        >
          <div className="h-[221px] relative">
            <Image src={item.img} fill className="object-cover" alt="" />
          </div>
          <div className="py-[10px] px-[20px]">
            <p className="font-[700] text-[18px] text-[#6E7191]">{item.date}</p>
          </div>

          <div className="p-[20px] bg-primary-color">
            <p className="font-[900] text-[34px] text-white">{item.title}</p>
          </div>

          <div className="flex justify-between items-center py-[10px] px-[20px]">
            <div className="flex items-center gap-[5px]">
              <Image
                src={"/icons/tip-location.svg"}
                width={38}
                height={38}
                alt="icons"
              />

              <span className="font-[800] text-[14px] text-[#14142B]">
                {item.location}
              </span>
            </div>

            <div className="flex items-center gap-[5px]">
              <Image
                src={"/icons/tip-comment.svg"}
                width={38}
                height={38}
                alt="icons"
              />

              <span className="font-[800] text-[14px] text-[#14142B]">
                {item.comments} Comment
              </span>
            </div>

            <div className="flex items-center gap-[5px]">
              <Image
                src={"/icons/tip-comment.svg"}
                width={38}
                height={38}
                alt="icons"
              />

              <span className="font-[800] text-[14px] text-[#14142B] flex items-center">
                {item.rate} of 5
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
