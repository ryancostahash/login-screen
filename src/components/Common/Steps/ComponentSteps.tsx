import { Buttons, Steps } from "./style";

interface ComponentStepsProps {
    onClick: () => void;
}

export default function ComponentSteps(props: ComponentStepsProps) {
  
  return (
    <>
      <Steps>
        <div></div>
        <div></div>
        <div></div>
      </Steps>
      <Buttons>
        <button>Cancelar</button>
        <button onClick={props.onClick}>Continuar</button>
      </Buttons>
    </>
  );
}
