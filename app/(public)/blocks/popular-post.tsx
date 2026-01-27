"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Next,
  Previous,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PopularPost() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const heroImages = [
    "/icons/hero1.svg",
    "/icons/hero1.svg",
    "/icons/hero1.svg",
  ];
  return (
    <div className="space-y-[40px]">
      <div className="bg-white flex justify-center items-center p-[20px] h-[107px] shadow-xl">
        <p className="font-[700] text-[31.64px]">Popular Post</p>
      </div>

      <div className="">
        <Carousel
          plugins={[plugin.current]}
          className="w-full h-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="h-[400px]">
            {heroImages.map((src, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="z-10 absolute w-full space-y-[50px] p-[40px]">
                  <p className="font-[500] text-[24px] text-white ">
                    September 17, 2018 - Tips & Tricks
                  </p>

                  <p className="font-[700] text-[31.64px] text-white">
                    Finding Love & home in Tbilisi, Georgia
                  </p>
                </div>
                <div className="relative h-full p-1">
                  <Card className="h-full border-none shadow-none">
                    <CardContent className="relative flex h-full items-center justify-center p-0">
                      <Image
                        src={src}
                        alt={`Hero slide `}
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="">
            <Previous className="left-4 translate-y-[100px]" />
            <Next className="right-4 translate-y-[100px] translate-x-[-360px]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
