"use client";

import Image from "next/image";
import styles from "@/view/Form/form.module.scss";

import cx from "clsx";

import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";

interface IFormInput {
  cardHolderName: string;
  cardNumber: number;
  expDateMM: number;
  expDateYY: number;
  CVC: number;
}

interface Props {
  register: UseFormRegister<IFormInput>;
  handleSubmit: UseFormHandleSubmit<IFormInput>;
  errors: FieldErrors<IFormInput>;
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  console.log(watch("cardHolderName"));
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.labelCardholderName}>CARDHOLDER NAME</label>
        <input
          className={cx(styles.inputCardholderName, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="e.g. Jane Aplleseed"
          {...register("cardHolderName", { required: true })}
        />
        <label className={styles.labelCardNumber}>CARD NUMBER</label>
        <input
          className={cx(styles.inputCardNumber, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardNumber", { required: true })}
        />
        <label className={styles.expDate}>EXP.DATE(MM/YY) </label>
        <input
          className={cx(styles.expMM, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="MM"
          {...register("expDateMM", { required: true })}
        />
        <input
          className={cx(styles.expYY, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="YY"
          {...register("expDateYY", { required: true })}
        />
        <label className={styles.labelCVC}>CVC</label>
        <input
          className={cx(styles.inputCVC, {
            [styles.invalid]: errors.cardHolderName,
          })}
          placeholder="e.g. 123"
          {...register("CVC", { required: true })}
        />
        <button className={styles.btnSubmit} type="submit">
          Confirm
        </button>
      </form>
    </>
  );
};
