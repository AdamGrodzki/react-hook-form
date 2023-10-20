"use client";

import Image from "next/image";
import frontCard from "@/images/bg-card-front.png";
import styles from "@/view/FrontCard/frontCard.module.scss";
import { useFormContext } from "react-hook-form";

export const FrontCard = () => {
  //   const { cardNumber, cardName, cardMonthExp, cardYearExp };

  const cardNumberDefault = "0000 0000 0000 0000";
  const cardNameDefault = "Jane Appleseed";
  const cardMonthExpDefault = "00";
  const cardYearExpDefault = "00";

  const format = (n: number | string) => (Number(n) > 9 ? n : `0${Number(n)}`);

  return (
    <div className={styles.frontCardContainer}>
      <Image className={styles.frontCardBg} src={frontCard} alt="front card" />
      <p className={styles.frontCardNumber}>{cardNumberDefault}</p>
      <p className={styles.frontCardName}>{cardNameDefault}</p>
      <p className={styles.frontCardExp}>
        {cardMonthExpDefault} / {cardYearExpDefault}
      </p>
    </div>
  );
};
