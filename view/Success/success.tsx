"use client";

import styles from "./success.module.scss";
import Image from "next/image";
import logoSuccess from "@/images/icon-complete.svg";

const handleExit = () => {
  window.location.reload();
};


export const Success = () => {
  return (
    <div className={styles.successContainer}>
      <Image src={logoSuccess} alt="logo-success" height={80} width={80} />

      <header className={styles.header}>
        <h3 className={styles.heading}>Thank You!</h3>
        <p className={styles.successParagraph}>
          {" "}
          We&apos;ve added your card details
        </p>
      </header>
      <button type="submit" className={styles.continueBtn} onClick={handleExit}>
        Continue
      </button>
    </div>
  );
};
