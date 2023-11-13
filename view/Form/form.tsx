"use client";

import styles from "@/view/Form/form.module.scss";

import cx from "clsx";

import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

import { IFormInput } from "@/app/page";

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  errors: FieldErrors<IFormInput>;
  isValid: boolean;
}

export const spaceInCardNumber = (e: any) => {
  if (
    e.nativeEvent.inputType !== "deleteContentBackward" &&
    e.target.name === ""
  ) {
    if (e.target.value.length === 4) e.target.value = e.target.value + " ";
    else if (e.target.value.length === 9) e.target.value = e.target.value + " ";
    else if (e.target.value.length === 14)
      e.target.value = e.target.value + " ";
  } else if (e.nativeEvent.inputType === "deleteContentBackward") {
    if (e.target.value.length === 4)
      e.target.value = e.target.value.substring(0, 3);
    else if (e.target.value.length === 9)
      e.target.value = e.target.value.substring(0, 8);
    else if (e.target.value.length === 14)
      e.target.value = e.target.value.substring(0, 13);
  }
};

export const Form = ({ register, handleSubmit, errors, isValid }: Props) => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelCardholderName}>Cardholder Name</label>
        <input
          type="text"
          maxLength={20}
          placeholder="e.g Jane Applessed"
          className={cx(styles.inputCardholderName, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("cardHolderName", {
            required: {
              value: true,
              message: "Can't be blank",
            },
            maxLength: 20,
          })}
        />
        <label className={styles.labelCardNumber}>Card Number</label>
        <input
          placeholder="e.g. 1234 5678 9123 0000"
          className={cx(styles.inputCardNumber, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("cardNumber", {
            required: "Can't be blank",
            minLength: {
              value: 19,
              message: "The minimum value is 19 charackters",
            },
            maxLength: {
              value: 19,
              message: "The maximum value is 19 charackters",
            },
            pattern: {
              value: /(\d{4} ){3}\d{4}/,
              message: "Wrong format, numbers only",
            },
            onChange: (e) => {
              spaceInCardNumber(e);
            },
          })}
        />
        <div className={styles.wrapper}>
          <label className={styles.expDate}>Exp. Date (MM/YY) </label>
          <input
            type="number"
            step={12}
            max={12}
            maxLength={2}
            placeholder="MM"
            className={cx(styles.expMM, {
              [styles.invalid]: errors.cardHolderName,
            })}
            {...register("expDateMM", {
              required: true,
              maxLength: 2,
              max: 12,
              valueAsNumber: true,
              minLength: {
                value: 2,
                message: "min length is 2",
              },
            })}
          />
          <input
            type="number"
            min={0}
            placeholder="YY"
            className={cx(styles.expYY, {
              [styles.invalid]: errors.cardHolderName,
            })}
            {...register("expDateYY", {
              required: true,
              valueAsNumber: true,
              maxLength: 2,
              minLength: {
                value: 2,
                message: "min length is 2",
              },
            })}
          />
          <label className={styles.labelCVC}>CVC</label>
          <input
            type="number"
            placeholder="e.g. 123"
            className={cx(styles.inputCVC, {
              [styles.invalid]: errors.cardHolderName && (
                <div className="error">{errors.cardHolderName.message}</div>
              ),
            })}
            {...register("cvc", {
              required: true,
              // valueAsNumber: true,
              maxLength: 3,
              minLength: { value: 3, message: "min length is 3" },
            })}
          />
        </div>
        <button className={styles.btnSubmit} type="submit" disabled={!isValid}>
          Confirm
        </button>
      </form>
    </>
  );
};
