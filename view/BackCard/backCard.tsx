import Image from "next/image";
import backCard from "@/images/bg-card-back.png";
import styles from "@/view/BackCard/backCard.module.scss";

interface Props {
  CVC: number;
}

export const BackCard = ({ CVC }: Props) => {
  return (
    <div className={styles.backCardContainer}>
      <div className={styles.backCardSubcontainer}>
        <Image className={styles.backCardBg} src={backCard} alt="back card" />
        <div className={styles.backCardCvc}>{CVC ?? "000"}</div>
      </div>
    </div>
  );
};
