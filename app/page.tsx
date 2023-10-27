"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import { Form } from "@/view/Form/form";
import Image from "next/image";
import { useForm } from "react-hook-form";

export interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  CVC: number;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>();

  return (
    <>
      <main className="mainBackground">
        <Image className="" src={bgMainDesktop} alt="" />
        <div className="">
          <Image src={bgMainMobile} alt="" />
        </div>
      </main>
      <FrontCard
        name={watch("cardHolderName")}
        number={watch("cardNumber")}
        expMonth={watch("expDateMM")}
        expYear={watch("expDateYY")}
      />
      <BackCard CVC={watch("CVC")} />
      <div>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
        />
      </div>
    </>
  );
}
