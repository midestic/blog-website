export default function SectionOne() {
  return (
    <div className="space-y-[50px]">
      <div className="py-[100px] flex justify-between items-center max-md:flex-col">
        <div className="w-[50%] max-md:w-full">
          <p className="font-[400] text-[40px] text-[#4E4B66]">
            Hey, We are the Red Explorers Brief History{" "}
            <span className="text-secondary-color">About Us</span> .
          </p>
        </div>
        <div className="w-[50%] max-md:w-full">
          <p className="font-[700] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor
            mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas
            magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam
            elementum at velit viverra mattis. Eleifend enim, praesent eu, leo
            semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus
            morbi volutpat ante. Adipiscing mauris
          </p>
        </div>
      </div>

      <div className="space-y-[20px]">
        <div
          style={{ backgroundImage: "url('/icons/happy.svg')" }}
          className="w-full h-[472px] bg-cover bg-center bg-no-repeat"
        ></div>

        <p className="font-[700] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut
          natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In
          libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus
          lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae
          rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque
          nibh duis ultrices. Senectus sagittis id ullamcorper mi eget
          pellentesque egestas. In ut sollicitudin ut orci volutpat egestas
          fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae.
          Praesent enim augue tellus vitae placerat purus pretium at massa.
          Aliquet a malesuada eget posuere. Pellentesque euismod nulla praesent
          rhoncus.
        </p>
      </div>
    </div>
  );
}
