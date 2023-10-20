import { BackCard } from "@/view/BackCard/backCard";
import { FrontCard } from "@/view/FrontCard/frontCard";
import { Form } from "@/view/Form/form";

export default function Home() {
  return (
    <>
      <Form />
      <FrontCard />
      <BackCard />
    </>
  );
}
