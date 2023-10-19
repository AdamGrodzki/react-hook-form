"use client";

import bgCardBack from "@/images/bg-card-back.png";
import bgCardFront from "@/images/bg-card-front.png";
import cardLogo from "@/images/card-logo.svg";
import iconComplete from "@/images/icon-complete.svg";
import Image from "next/image";
import styles from "@/view/Form/form.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const [name, setName] = useState("Jane Appleseed");
  const [number, setNumber] = useState("0000 0000 0000 0000");
  const [cvc, setCvc] = useState("000");
  const [expMonth, setExpMonth] = useState("00");
  const [expYear, setExpYear] = useState("00");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  const injectSpaces = (str) => {
    let groupOf4 = [];

    for (let i = 0; i < str.length; i += 4) {
      let group = str.slice(i, i + 4);
      groupOf4.push(group);
    }
    return groupOf4.join(" ");
  };

  const handleLettersChange = (event) => {
    const lettersResult = event.target.value.replace(/[^a-z]/gi, "");

    setName(lettersResult);
  };

  const handleNumbersResult = (event) => {
    const numberResult = event.target.value.replace(/[^1-9]/gi, "");

    setNumber(numberResult);
  };
  const handleMonthChange = (event) => {
    const numberResult = event.target.value.replace(/[^1-9]/gi, "");

    setExpMonth(numberResult);
  };
  const handleYearChange = (event) => {
    const numberResult = event.target.value.replace(/[^1-9]/gi, "");

    setExpYear(numberResult);
  };

  const handleCvcChange = (event) => {
    const numberResult = event.target.value.replace(/[^1-9]/gi, "");

    setCvc(numberResult);
  };

  return (
    <>
      <div className="form">
        <Image
          className={styles.rounded}
          src={bgCardBack}
          alt="cardBackground"
        />
      </div>
      <p className={styles.absoluteTop}>{cvc}</p>
      <div>
        <Image src={bgCardFront} alt="cardBackground" />
      </div>
      <p>{injectSpaces(number)}</p>
      <p>{name}</p>
      <p>
        {expMonth} / {expYear}
      </p>
      <div>
        <Image className={styles.cardLogo} src={cardLogo} alt="cardLogo" />
      </div>
      {!isSubmitSuccessful && (
        <div>
          <Image
            className={styles.iconComplete}
            src={iconComplete}
            alt="iconComplete"
          />
          <h1>THANK YOU!</h1>
          <h2>We added your card details</h2>
          <button
            className={styles.btn}
            onClick={() => {
              reset();
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
}
