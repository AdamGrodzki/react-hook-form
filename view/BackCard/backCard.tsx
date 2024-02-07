import { IFormInput } from "@/app/page";
import styles from "@/view/BackCard/backCard.module.scss";
import { useFormContext } from "react-hook-form";

export const BackCard = () => {
  const { watch } = useFormContext<IFormInput>();
  const watchCvc = watch("cvc");

  return (
    <div className={styles.containerBackCard}>
      <div className={styles.backCard}>
        <div className={styles.backCardCvc}>{watchCvc ? watchCvc : "000"}</div>
      </div>
    </div>
  );
};
