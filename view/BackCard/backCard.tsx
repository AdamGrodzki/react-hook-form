import Image from "next/image";
import backCard from "@/images/bg-card-back.png";
import styles from "@/view/BackCard/backCard.module.scss";

interface Props {
  cvc: number;
}

export const BackCard = ({ cvc }: Props) => {
  return (
    <>
      <div className={styles.backCardCvc}>{cvc ? cvc : "000"}</div>
      <Image
        className={styles.backCard}
        src={backCard}
        alt="backCard"
        priority={true}
      />
    </>
  );
};
