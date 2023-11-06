"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import { Form } from "@/view/Form/form";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { useForm } from "react-hook-form";

export interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  cvc: number;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<IFormInput>({
    defaultValues: { expDateMM: 0o0, expDateYY: 0o0 },
  });

  //defaultValue not a number higher in brackets

  return (
    <>
      <main className="flex flex-col lg:flex-row lg:w-[1440px]  lg:h-[900px] w-[375px] h-[704px] bg-dark">
        <Image
          className={styles.backgroundMainDesktop}
          src={bgMainDesktop}
          alt=""
          priority={true}
        />
      </main>
      <FrontCard
        name={watch("cardHolderName")}
        number={watch("cardNumber")}
        expMonth={watch("expDateMM")}
        expYear={watch("expDateYY")}
      />
      <BackCard cvc={watch("cvc")} />
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
