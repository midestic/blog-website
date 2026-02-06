import { Button } from "@/components/ui/button";
import { SubscribeInput } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <div className="bg-white px-[200px]  py-[50px] flex justify-center items-center max-md:p-[20px] ">
      <div className="flex justify-between  w-full max-md:flex-col max-md:gap-[20px]">
        <div className="w-[50%] flex items-center max-md:w-full">
          <p className="font-[700] text-[30px] max-md:text-center">
            Join <span className="text-primary-color"> 98,641</span> Monthly
            Readers. Subscribe Today!
          </p>
        </div>
        <div className="flex items-center w-[50%] gap-[20px] max-md:flex-col max-md:w-full">
          <SubscribeInput placeholder="Email Address" />{" "}
          <Button variant={"blueBtn"} size={"blueBtn"}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
