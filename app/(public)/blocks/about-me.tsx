import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="px-[40px] shadow-xl py-[10px]">
      <div className="space-y-[10px]">
        <p className="font-[700] text-[29.39px] text-center">About Me</p>
        <div className="space-y-[10px]">
          <div className="w-full relative h-[300px]">
            <Image
              src={"/icons/me.svg"}
              fill
              alt="me"
              className="object-cover"
            />
          </div>
          <p className="font-[500] text-[16.38px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel
            massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget
            et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla
            amet suscipit sit lectus tortor. Dolor non eget suspendisse leo
            scelerisque sed d.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <Button variant={"blueBtn"} size={"blueBtn"}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}
