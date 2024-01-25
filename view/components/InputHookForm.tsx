import * as React from "react";
import { useForm, useController, UseControllerProps } from "react-hook-form";
import { IFormInput } from "@/app/page";



export function Input(props: UseControllerProps<IFormInput>) {
  const { field } = useController(props);

  return (
    <div>
      <input {...field} placeholder={props.name} />
    </div>
  );
}

// export default function InputHookForm() {
//   const { control } = useForm<IFormInput>({
//     defaultValues: {
//       cardHolderName: ""
//     },
//     mode: "onChange",
//   });


//   return (
//     <form >
//       <Input
//         control={control}
//         name="cardHolderName"
//         rules={{ required: true }} />
//     </form>
//   );
// }
