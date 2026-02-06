import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Purchase() {
  return (
    <div>
      <div className="absolute h-[350px] z-1 w-[60%] flex flex-col justify-between items-center max-md:w-full">
        <div className="p-[40px]">
          <p className="font-[700] text-[40px] text-white max-md:text-[24px]">
            Want <span className="text-secondary-color">Me to Purchase</span>{" "}
            Something For You That isn’t available in your Country?
          </p>
        </div>
        <Button variant={"blueBtn"} size={"blueBtn"}>
          View Details
        </Button>
      </div>
      <div className="w-full h-[425px] relative">
        <Image
          src={"/icons/purchase.svg"}
          fill
          className="object-cover"
          alt="puirchase"
        />
      </div>
    </div>
  );
}
