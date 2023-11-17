import Image from "next/image";
import CompleteIcon from "@/images/icon-complete.svg";

interface Props {
  resetInput: () => void;
}

export const formComplete = ({ resetInput }: Props) => {
  return (
    <>
      <h1>Thank you</h1>
      <button onClick={resetInput} type="submit">
        Continue
      </button>
    </>
  );
};
