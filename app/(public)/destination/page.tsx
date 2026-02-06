import {
  DestinationTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SouthAmerica from "./south-america";
import NorthAmerica from "./north-america";
import Europe from "./europe";
import Africa from "./africa";
import Australia from "./australia";
import Asia from "./asia";

export default function page() {
  return (
    <div className="space-y-[50px]">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{ backgroundImage: "url('/icons/destination-hero.svg')" }}
      >
        <p className="font-[800] text-[64px] text-white">Destination</p>
      </div>

      <div className="py-[100px] flex justify-between items-center px-[124px] max-md:flex-col max-md:px-[20px]">
        <div className="w-[50%] max-md:w-full">
          <p className="font-[400] text-[40px] text-[#4E4B66]">
            <span className="text-secondary-color">Where do</span>
            you want to go?
          </p>
        </div>
        <div className="w-[50%] max-md:w-full">
          <p className="font-[700] text-[18px]">
            Bala blu umbreleda eba tia-tia youths down-payment recruit our pdapc
            transmission eneme different recruit blu army eba eneme bala symbol
            bala mpower bala 50million umbreleda symbol eneme umbreleda super
            transmission eneme pdapc down-payment bala broooom blu eba highway
            agbado eba from blu blu recruit electricty super super blu our blu
          </p>
        </div>
      </div>

      <div className="w-full px-[124px] max-md:px-[20px]">
        <Tabs defaultValue="south" className="w-full ">
          <TabsList className="flex justify-between w-full bg-white  ">
            <div className="max-md:overflow-x-scroll w-full flex justify-between">
              <DestinationTrigger value="south">
                South America
              </DestinationTrigger>
              <DestinationTrigger value="north">
                North America
              </DestinationTrigger>
              <DestinationTrigger value="europe">Europe</DestinationTrigger>
              <DestinationTrigger value="africa">Africa</DestinationTrigger>
              <DestinationTrigger value="australia">
                Australia
              </DestinationTrigger>
              <DestinationTrigger value="asia">Asia</DestinationTrigger>
            </div>
          </TabsList>

          <div className="mt-[100px]">
            <TabsContent value="south">
              <SouthAmerica />
            </TabsContent>

            <TabsContent value="north">
              <NorthAmerica />
            </TabsContent>

            <TabsContent value="europe">
              <Europe />
            </TabsContent>

            <TabsContent value="africa">
              <Africa />
            </TabsContent>

            <TabsContent value="australia">
              <Australia />
            </TabsContent>

            <TabsContent value="asia">
              <Asia />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
