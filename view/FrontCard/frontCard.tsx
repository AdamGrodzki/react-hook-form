"use client";

import styles from "@/view/FrontCard/frontCard.module.scss";

interface Props {
  number: number;
  name: string;
  expMonth: number;
  expYear: number;
}

export const FrontCard = ({ number, name, expMonth, expYear }: Props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.logo}></div>
      <div className={styles.frontCardNumber}>
        {number || "0000 0000 0000 0000"}
      </div>
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
