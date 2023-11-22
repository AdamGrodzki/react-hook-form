"use client";

import styles from "./success.module.scss";
import Image from "next/image";
import logoSuccess from "@/images/icon-complete.svg";

export const Success = () => {
  return (
    <div className={styles.successContainer}>
      <Image src={logoSuccess} alt="logo-success" />

      <header className={styles.header}>
        <h3 className={styles.heading}>Thank You!</h3>
        <p> We&apos;ve added your card details</p>
      </header>
      <button type="submit" className={styles.continueBtn}>
        Continue
      </button>
    </div>
  );
};

