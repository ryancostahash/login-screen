import AdressPaymentForm from "./AdressPayment/AdressPaymentForm";
import ProfileImageForm from "./ProfileImage/ProfileImageForm";
import DataForm from "./DataForm/DataForm";
import { Container, Form } from "./style";
import { useForm } from "../../hooks/useForm";
import { IconArrowDown } from "../Icons/icons";
import ComponentSteps from "../Common/Steps/ComponentSteps";

export default function Register() {
  const formComponents = [
    <DataForm />,
    <AdressPaymentForm />,
    <ProfileImageForm />,
  ];
  const { currentStep, currentComponent, changeStep } = useForm(formComponents);

  return (
    <Container>
      <Form onSubmit={(e) => changeStep(currentStep + 1, e )}>
        <div className="box-title">
          <p>Crie um novo Cadastro</p>
          <div>
            {currentStep < 1 ? (
              <>
                <p>Selecione o tipo de pessoa: {IconArrowDown}</p>
                <select name="" >
                  <option value="PJ">Pessoa Jurídica</option>
                  <option value="PF">Pessoa Física</option>
                </select>
              </>
            ) : (
              <>
                <select name="" disabled>
                  <option value="PJ">Pessoa Jurídica</option>
                  <option value="PF">Pessoa Física</option>
                </select>
              </>
            )}
            
          </div>
        </div>

        {currentComponent}
        <ComponentSteps onClick={() => changeStep(currentStep - 1)} />
      </Form>
    </Container>
  );
}
