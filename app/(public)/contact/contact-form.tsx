import { Button } from "@/components/ui/button";
import { ContactInput, Input } from "@/components/ui/input";

export default function ContactForm() {
  return (
    <div className="space-y-[100px]">
      <p className="font-[500] text-[16px] text-center">
        PLEASE, FEEL YOURSELF COMFORTABLE TO FILL IN OUR CONTACT FORM
      </p>

      <form className="w-[70%] mx-auto space-y-[50px]" action="">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-[50px]">
          <ContactInput placeholder="First Name" />

          <ContactInput placeholder="Last Name" />

          <ContactInput placeholder="Email" />

          <ContactInput placeholder="Subject" />
        </div>

        <div>
          <textarea
            placeholder="Message"
            className="
    w-full h-[212px] p-[20px]
    border border-gray-300
    rounded-[10px]
    placeholder:font-[400]
    placeholder:text-[16px]
    placeholder:text-[#6E7191]
    focus:outline-none
    focus:border-primary-color
  "
          />
        </div>

        <div className="flex justify-center items-center">
          <Button variant={"blueBtn"} size={"blueBtn"}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
