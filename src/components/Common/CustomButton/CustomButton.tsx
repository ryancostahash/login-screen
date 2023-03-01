import { Button } from "./style";

interface CustomButtonProps {
  name: "Opções" | "Acompanhar";
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <>
      <Button
        style={{
          padding: props.name === "Acompanhar" ? '8px 44px' : '8px 59px',
          backgroundColor: props.name === "Acompanhar" ? '#C346FF' : '#8E30BB',
        }}
      >
        {props.name}
      </Button>
    </>
  );
}
