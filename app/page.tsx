"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import { Form } from "@/view/Form/form";
import Image from "next/image";
import { useContext } from "react";
import DataContext from "@/components/data/dataContext";

export default function Home() {
  const { windowWidth } = useContext(DataContext);

  return (
    <>
      {windowWidth > 1000 ? (
        <Image src={bgMainDesktop} alt="background main desktop" />
      ) : (
        <Image src={bgMainMobile} alt="background main mobile" />
      )}
      <FrontCard />
      <div>
        <Form />
      </div>
    </>
  );
}
