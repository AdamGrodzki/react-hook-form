"use client";

import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import { Form } from "@/view/Form/form";
import Image from "next/image";
import styles from "@/app/page.module.scss";
import { useForm } from "react-hook-form";
import { formComplete } from "@/view/FormComplete/FormComplete";

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
    // defaultValues: { expDateMM: 0o0, expDateYY: 0o0},
  });

  return (
    <main className={styles.page}>
      <Image
        className={styles.backgroundMainDesktop}
        src={bgMainDesktop}
        alt=""
      />
      <div className={styles.frontCard}>
        <FrontCard
          name={watch("cardHolderName")}
          number={watch("cardNumber")}
          expMonth={watch("expDateMM")}
          expYear={watch("expDateYY")}
        />
      </div>
      <div className={styles.backCard}>
        <BackCard cvc={watch("cvc")} />
      </div>
      <div className={styles.form}>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
        />
      </div>
    </main>
  );
}
