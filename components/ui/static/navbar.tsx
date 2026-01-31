"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/navigation-menu";
import { CircleAlertIcon } from "lucide-react";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "About Us",
    href: "/about-us",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Destination",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Tips",
    href: "/tips",
    description: "Visually or semantically separates content.",
  },

  {
    title: "Contacts",
    href: "/tips",
    description: "Visually or semantically separates content.",
  },
];

export function Navbar() {
  return (
    // <div className="z-10 flex justify-center fixed w-full">
    <div
      className="
  fixed z-10 w-full flex justify-center
  bg-white/10 backdrop-blur-lg
  border-b border-white/20
  shadow-sm
"
    >
      <NavigationMenu className=" w-full px-[100px] py-[10px] bg-transparent  max-w-[1620px] mx-auto  p-[30px] rounded-full">
        <div>
          <Image src={"/icons/Logo.svg"} width={133} height={55} alt="logo" />
        </div>

        <NavigationMenuList>
          {components.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
