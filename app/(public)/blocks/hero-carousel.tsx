"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const heroImages = [
    "/icons/hero1.svg",
    "/icons/hero1.svg",
    "/icons/hero1.svg",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-screen"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-screen">
        {heroImages.map((src, index) => (
          <CarouselItem key={index} className="h-full">
            <div className="z-10 absolute text-black w-full h-[80vh] flex justify-center items-center">
              <div className="flex flex-col items-center gap-[30px] w-[60%]">
                <p className="font-[700px] text-[30px] text-white">
                  THE COUNTER: <span className="text-secondary-color">70</span>{" "}
                  Countries <span className="text-secondary-color">1036</span>{" "}
                  Cities
                </p>

                <p className="font-[800] text-[64px] text-white  text-center leading-[69px]">
                  Leave your mark on all over the world
                </p>

                <Button variant={"blueBtn"} size={"blueBtn"}>
                  Read More
                </Button>
              </div>
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
      <CarouselPrevious className="left-4" />
      // <CarouselNext className="right-4" />
    </Carousel>
  );
}
