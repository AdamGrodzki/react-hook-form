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
  onBlur?: any;
}

type InputProps = UseControllerProps<IFormInput> & OwnProps;

export function Input(props: InputProps) {
  const { label } = props;
  const { field: input } = useController(props);

  return (
    <>
      <div>
        <label className={styles.labelsForm}>{props.label}</label>
        <input
          {...input}
          className={styles.inputsForm}
          placeholder={props.placeholderText}
        />
      </div>
    </>
  );
}
