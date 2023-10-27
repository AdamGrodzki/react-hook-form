"use client";

import styles from "@/view/Form/form.module.scss";

import cx from "clsx";

import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
  useFormContext,
} from "react-hook-form";

import { IFormInput } from "@/app/page";

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  errors: FieldErrors<IFormInput>;
  isValid: boolean;
}

export const Form = ({ register, handleSubmit, errors, isValid }: Props) => {
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelCardholderName}>Cardholder Name</label>
        <input
          maxLength={20}
          placeholder="e.g Jane Applessed"
          className={cx(styles.inputCardholderName, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("cardHolderName", {
            required: true,
            maxLength: 20,
          })}
        />
        <label className={styles.labelCardNumber}>Card Number</label>
        <input
          maxLength={19}
          placeholder="e.g. 1234 5678 9123 0000"
          className={cx(styles.inputCardNumber, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("cardNumber", {
            required: true,
            maxLength: 19,
          })}
        />
        <label className={styles.expDate}>Exp. Date (MM/YY) </label>
        <input
          type="number"
          min={1}
          max={12}
          placeholder="MM"
          className={cx(styles.expMM, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("expDateMM", {
            required: true,
            maxLength: 2,
            valueAsNumber: true,
          })}
        />
        <input
          type="nubmer"
          max={2}
          placeholder="YY"
          className={cx(styles.expYY, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("expDateYY", { required: true, maxLength: 2 })}
        />
        <label className={styles.labelCVC}>CVC</label>
        <input
          type="number"
          placeholder="e.g. 123"
          className={cx(styles.inputCVC, {
            [styles.invalid]: errors.cardHolderName,
          })}
          {...register("CVC", {
            required: true,
            maxLength: 3,
          })}
        />
        <button className={styles.btnSubmit} type="submit" disabled={!isValid}>
          Confirm
        </button>
      </form>
    </>
  );
};
