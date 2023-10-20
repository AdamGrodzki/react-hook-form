import Image from "next/image";
import backCard from "@/images/bg-card-back.png";
import styles from "@/view/BackCard/backCard.module.scss";

export const BackCard = () => {
  const cardCVCDefault = "000";

  return (
    <div className={styles.backCardContainer}>
      <div>
        <Image className={styles.backCardBg} src={backCard} alt="back card" />
        <div className={styles.backCardCvc}>{cardCVCDefault}</div>
      </div>
    </div>
  );
};
