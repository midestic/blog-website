import SectionOne from "./section-one";

export default function page() {
  return (
    <div className="space-y-[50px]">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/icons/travel-hero.svg')" }}
      >
        <p className="font-[800] text-[64px] text-white">Travel Tips</p>
      </div>

      <div className="px-[100px] space-y-[50px]">
        <SectionOne />
      </div>
    </div>
  );
}
