import { Button } from "@/components/ui/button";
import { SubscribeInput } from "@/components/ui/input";

export default function Subscribe() {
  return (
    <div className="bg-white px-[200px]  py-[50px] flex justify-center items-center">
      <div className="flex justify-between  w-full">
        <div className="w-[50%] flex items-center">
          <p className="font-[700] text-[30px]">
            Join <span className="text-primary-color"> 98,641</span> Monthly
            Readers. Subscribe Today!
          </p>
        </div>
        <div className="flex items-center w-[50%] gap-[20px]">
          <SubscribeInput placeholder="Email Address" />{" "}
          <Button variant={"blueBtn"} size={"blueBtn"}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
