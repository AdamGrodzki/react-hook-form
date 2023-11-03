"use client";

import Image from "next/image";
import frontCard from "@/images/bg-card-front.png";
import logo from "@/images/card-logo.svg";
import styles from "@/view/FrontCard/frontCard.module.scss";

interface Props {
  number: number;
  name: string;
  expMonth: number;
  expYear: number;
}

export const FrontCard = ({ number, name, expMonth, expYear }: Props) => {
  return (
    <div className={styles.frontCardContainer}>
      <Image
        className={styles.frontCardBg}
        src={frontCard}
        alt="front card"
        priority={true}
      />
      <Image
        className={styles.logo}
        src={logo}
        alt="card logo"
        priority={true}
      />
      <p className={styles.frontCardNumber}>
        {number || "0000 0000 0000 0000"}
      </p>
      <p className={styles.frontCardName}>{name || "Jane Appleseed"}</p>
      <p className={styles.frontCardExp}>
        {expMonth || "00"} / {expYear || "00"}
      </p>
    </div>
  );
};
