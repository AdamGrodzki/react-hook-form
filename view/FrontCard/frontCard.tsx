"use client";

import { useFormContext } from "react-hook-form";

import styles from "@/view/FrontCard/frontCard.module.scss";
import { IFormInput } from "@/app/page";
import { array } from "yup";

function displayCardNumber(number: string) {
  let newCardNumber = number + "0000000000000000";
  newCardNumber = newCardNumber.slice(0, 16);
  return `${newCardNumber.slice(0, 4)} ${newCardNumber.slice(4, 8)} 
  ${newCardNumber.slice(8, 12)} ${newCardNumber.slice(12, 16)}`;
}

export const FrontCard = ({}) => {
  const { watch } = useFormContext<IFormInput>();
  const watchFrontCard = watch([
    "cardHolderName",
    "cardNumber",
    "expDateMM",
    "expDateYY",
  ]);
  return (
    <div className={styles.containerFrontCard}>
      <div className={styles.logo}></div>
      <div className={styles.frontCardNumber}>
        {displayCardNumber(watchFrontCard[1])}
      </div>
      <div className={styles.bottomCard}>
        <p className={styles.frontCardName}>
          {watchFrontCard[0].toUpperCase() || "JANE APPLESEED"}
        </p>
        <p className={styles.frontCardExp}>
          {watchFrontCard[2] || "00"} / {watchFrontCard[3] || "00"}
        </p>
      </div>
    </div>
  );
};
