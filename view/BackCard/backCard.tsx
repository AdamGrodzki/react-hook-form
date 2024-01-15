import styles from "@/view/BackCard/backCard.module.scss";

interface Props {
  cvc: number | string;
}

export const BackCard = ({ cvc }: Props) => {
  return (
    <div className={styles.containerBackCard}>
      <div className={styles.backCard}>
        <div className={styles.backCardCvc}>{cvc ? cvc : "000"}</div>
      </div>
    </div>
  );
};
