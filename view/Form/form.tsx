"use client";

import bgCardBack from "@/images/bg-card-back.png";
import bgCardFront from "@/images/bg-card-front.png";

import cardLogo from "@/images/card-logo.svg";
import iconComplete from "@/images/icon-complete.svg";

import bgMainDesktop from "@/images/bg-main-desktop.png";
import bgMainMobile from "@/images/bg-main-mobile.png";

import Image from "next/image";
import styles from "@/view/Form/form.module.scss";

import { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  return <Image src={bgMainDesktop} alt="background main desktop" />;
};
