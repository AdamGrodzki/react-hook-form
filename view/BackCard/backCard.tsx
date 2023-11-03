import Image from "next/image";
import backCard from "@/images/bg-card-back.png";
import styles from "@/view/BackCard/backCard.module.scss";

interface Props {
  cvc: number;
}

export const BackCard = ({ cvc }: Props) => {
  return (
    
      <div className={styles.backCardSubcontainer}>
        <Image
          className={styles.backCardBg}
          src={backCard}
          alt="back card"
          priority={true}
        />
        <div className={styles.backCardCvc}>{cvc ?? "000"}</div>
      </div>
    
  );
};
