"use client";
import { HiMenuAlt4 } from "react-icons/hi";
import { CiPower } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Order from "./order.container";
import Container from "../ui/container.ui";

export default function Navbar() {
  const pathName = usePathname();
  const isHome = pathName === "/";
  return (
    <Container space={4} position={'start'}>
      <nav className={`w-full flex justify-between items-center p-4`}>
        <Container space={10}>
          <span>
            <button className="rounded-full p-2 text-2xl active:scale-95 duration-300 ease-in-out bg-white text-primary text-center">
              <HiMenuAlt4 />
            </button>
          </span>
          <span>Date</span>
          <span>Time</span>
        </Container>
        <button className="flex items-center gap-7 rounded-full p-2 bg-white text-third">
          <span className="font-semibold flex items-center">
            <BsDot className="text-4xl" /> Close Order
          </span>
          <CiPower className="text-4xl rounded-full bg-background p-2" />
        </button>
      </nav>
      {isHome && (
        <Order/>
      )}
    </Container>
  );
}
