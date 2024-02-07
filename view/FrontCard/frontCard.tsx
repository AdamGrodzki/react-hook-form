"use client";

import { FormProvider, useFormContext } from "react-hook-form";

import styles from "@/view/FrontCard/frontCard.module.scss";

interface Props {
  name: string;
  number: string;
  expMonth: string;
  expYear: string;
}

function displayCardNumber(number: string) {
  let newCardNumber = number + "0000000000000000";
  newCardNumber = newCardNumber.slice(0, 16);
  return `${newCardNumber.slice(0, 4)} ${newCardNumber.slice(4, 8)} 
  ${newCardNumber.slice(8, 12)} ${newCardNumber.slice(12, 16)}`;
}

export const FrontCard = ({ number, name, expMonth, expYear }: Props) => {

  

  return (
    <div className={styles.containerFrontCard}>
      <div className={styles.logo}></div>
      <div className={styles.frontCardNumber}>{displayCardNumber(number)}</div>
      <div className={styles.bottomCard}>
        <p className={styles.frontCardName}>
          {name?.toUpperCase() || "JANE APPLESEED"}
        </p>
        <p className={styles.frontCardExp}>
          {expMonth || "00"} / {expYear || "00"}
        </p>
      </div>
    </div>
  );
};
