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
  setValue: any;
  setFormSubmitted: (value: boolean) => void;
}

export const Form = ({
  register,
  handleSubmit,
  errors,
  isValid,
  setValue,
  setFormSubmitted,
}: Props) => {
  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault();
    console.log(data);
    setFormSubmitted(true);
  };

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
            required: "Can't be blank",
            pattern: {
              value: /[a-zA-Z]/g,
              message: "name can not contain numbers",
            },
          })}
        />
        {errors.cardHolderName && (
          <p className={styles.error}>{errors.cardHolderName.message}</p>
        )}
        <label className={styles.labelCardNumber}>Card Number</label>
        <input
          inputMode="numeric"
          maxLength={19}
          placeholder="e.g. 1234 5678 9123 0000"
          onKeyDown={(e) => {
            const backspacePressed = e.key !== "Backspace";
            const currentValue = e.currentTarget.value;
            if (backspacePressed) {
              const lengthNoSpaces = currentValue.replace(/ /g, "").length;
              if (
                lengthNoSpaces !== 0 &&
                lengthNoSpaces % 4 === 0 &&
                currentValue.length < 17
              ) {
                setValue("cardNumber", currentValue + " ");
              }
            } else {
              if (currentValue[currentValue.length - 2] === " ") {
                setValue(
                  "cardNumber",
                  currentValue.substr(0, currentValue.length - 1)
                );
              }
            }
          }}
          className={cx(styles.inputCardNumber, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("cardNumber", {
            required: "Can't be blank",
            minLength: {
              value: 19,
              message: "Incomplete card number",
            },
            pattern: {
              value: /^[\d+\s]*$/,
              message: "Wrong format, numbers only",
            },
          })}
        />
        {errors.cardNumber && (
          <p className={styles.error}>{errors.cardNumber.message}</p>
        )}
        <div className={styles.wrapper}>
          <label className={styles.expDate}>Exp. Date (MM/YY) </label>
          <input
            inputMode="numeric"
            min={1}
            max={12}
            maxLength={2}
            placeholder="MM"
            className={cx(styles.expMM, {
              [styles.invalid]: errors.cardHolderName,
            })}
            {...register("expDateMM", {
              min: { value: 1, message: "Invalid date" },
              max: { value: 12, message: "Invalid date" },
              required: "Can't be blank",
            })}
          />
          <input
            inputMode="numeric"
            maxLength={2}
            placeholder="YY"
            className={cx(styles.expYY, {
              [styles.invalid]: errors.cardHolderName,
            })}
            {...register("expDateYY", {
              required: "Can't be blank",
              min: {
                value: new Date().getFullYear() % 2000,
                message: "Invalid date",
              },
              max: {
                value: 99,
                message: "Invalid date",
              },
            })}
          />
          {(errors.expDateMM && (
            <p className={styles.error}>{errors.expDateMM.message}</p>
          )) ||
            (errors.expDateYY && (
              <p className={styles.error}>{errors.expDateYY.message}</p>
            ))}
          <label className={styles.labelCVC}>CVC</label>
          <input
            type="numeric"
            min={0}
            maxLength={3}
            placeholder="e.g. 123"
            className={cx(styles.inputCVC, {
              [styles.invalid]: errors.cardHolderName && (
                <div className="error">{errors.cardHolderName.message}</div>
              ),
            })}
            {...register("cvc", {
              required: "Can't be blank",
              pattern: {
                value: /[0-9]{3}/,
                message: "Must contains 3 numbers",
              },
            })}
          />
          {errors.cvc && <p className={styles.error}>{errors.cvc.message}</p>}
        </div>
        <button className={styles.btnSubmit} type="submit">
          Confirm
        </button>
      </form>
    </>
  );
};
