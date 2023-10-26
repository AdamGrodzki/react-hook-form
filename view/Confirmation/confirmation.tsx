"use client";

import Image from "next/image";
import ConfirmationIcon from "@/images/icon-complete.svg";
import { useFormContext } from "react-hook-form";

export const Confirmation = () => {
  const {
    setConfirmed,
    setCvc,
    setName,
    setCardNumber,
    setExpMonth,
    setExpYear,
  } = useFormContext();

  const handleContinue = () => {
    setName(""),
      setCardNumber(""),
      setExpMonth(0o0),
      setExpYear(0o0),
      setCvc(0o0);
    setConfirmed(false);
  };

  return (
    <div>
      <div>
        <Image src={ConfirmationIcon} alt="confirm" />
        <h1>Thank You</h1>
        <h2>We&apos;ve added your card details</h2>
      </div>
      <button onClick={handleContinue} className="btn">
        Continue
      </button>
    </div>
  );
};
