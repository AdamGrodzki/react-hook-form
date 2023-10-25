"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import { Form } from "@/view/Form/form";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="a">
        <Image className="" src={bgMainDesktop} alt="" />
        <div className="">
          <Image src={bgMainMobile} alt="" />
        </div>
      </main>
      <FrontCard />
      <BackCard />
      <div>
        <Form />
      </div>
    </>
  );
}
