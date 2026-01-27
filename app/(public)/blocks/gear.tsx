import { Button } from "@/components/ui/button";

export default function Gear() {
  return (
    <div className="bg-white shadow-xl flex flex-col  p-[40px]">
      <div className="space-y-[20px]">
        <p className="font-[700] text-[29.65px] text-center">Gear I Use</p>
        <p className="font-[700] text-[29.65px] text-center">
          What's in My Bag??
        </p>
        <p className="font-[300] text-[24px] text-[#0B0A0A] text-center">
          Unfortunately, there is no “one-size-fits-all” when it comes to travel
          packing lists.
        </p>
      </div>

      <Button
        variant={"blueBtn"}
        size={"blueBtn"}
        className="w-fit mx-auto mt-[20px]"
      >
        View Details
      </Button>
    </div>
  );
}
