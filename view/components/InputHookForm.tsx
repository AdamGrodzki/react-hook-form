import * as React from "react";
import {
  useForm,
  useController,
  UseControllerProps,
  Controller,
} from "react-hook-form";
import { IFormInput } from "@/app/page";

import styles from "@/view/components/InputHookForm.module.scss";

interface OwnProps {
  label?: string;
  placeholderText?: string;
}

type InputProps = UseControllerProps<IFormInput> & OwnProps;

export function Input(props: InputProps) {
  const { placeholderText, label, name, control, rules } = props;
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <>
      <div>
        <label className={styles.labelsForm}>{label}</label>
        <input
          {...field}
          className={styles.inputsForm}
          placeholder={placeholderText}
          // {...(fieldState.error && <p>{fieldState.error.message}</p>)}
        />
        {/* <p>{fieldState.isTouched && "Touched"}</p>
        <p>{fieldState.isDirty && "Dirty"}</p>
        <p>{fieldState.invalid ? "invalid" : "valid"}</p> */}
        <p className={styles.error}>{fieldState.error?.message}</p>
      </div>
    </>
  );
}
