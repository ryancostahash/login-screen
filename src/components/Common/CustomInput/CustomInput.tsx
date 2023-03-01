import { BoxInput, Input, SpanIcon } from "./style";

interface CustomInputProps {
    icon: any;
    type: "text" | "number" | "password";
}

export default function CustomInput(props: CustomInputProps){
   return (
    <BoxInput>
        <SpanIcon>
            {props.icon}
        </SpanIcon>
        <Input type={props.type} />
    </BoxInput>
   )
}