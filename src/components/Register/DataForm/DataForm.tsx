import ComponentSteps from "@/components/Common/Steps/ComponentSteps";
import { FormData } from "./style";

export default function DataForm() {
  return (
        <FormData>
          <p>Dados:</p>
          <div className="box-input-data">
            <div className="box-first-inputs">
              <label htmlFor="">Nome:</label>
              <input type="text" />
            </div>
            <div className="box-first-inputs">
              <label htmlFor="">E-mail</label>
              <input type="text" />
            </div>
          </div>
          <div className="box-input-cpf-cnpj">
            <div>
              <label htmlFor="">CPF:</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">CNPJ:</label>
              <input type="number" />
            </div>
          </div>
          <div className="box-company">
            <div className="box-company-data">
                <label htmlFor="">Nome Fantasia:</label>
                <input type="text" />
                <label htmlFor="">Razão Social:</label>
                <input type="text" />
            </div>
            <div className="box-company-enrollment">
                <div>
                    <label htmlFor="">Inscrição:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Data de Contrato:</label>
                    <input type="text" />
                </div>
            </div>
            <div className="box-company-product">
                <div>
                    <label htmlFor="">Produto:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Serviço:</label>
                    <input type="text" />
                </div>
            </div>
            <div className="box-company-tel">
                <div>
                    <label htmlFor="">Telefone:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Celular:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Revenda:</label>
                    <select>
                        <option value="" selected>Sim</option>
                        <option value="">Não</option>
                    </select>
                </div>
            </div>
          </div>
        </FormData>
  );
}
