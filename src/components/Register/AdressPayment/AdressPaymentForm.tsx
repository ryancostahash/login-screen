import ComponentSteps from "@/components/Common/Steps/ComponentSteps";
import { FormAdress } from "./style";

export default function AdressPaymentForm() {
  return (
        <FormAdress>
          <p className="subtitle">Endereço:</p>
          <div className="box-input-adress">
            <div className="box-first-inputs">
              <label htmlFor="">Rua:</label>
              <input type="text" />
            </div>
          </div>
          <div className="box-input-number-cep">
            <div>
              <label htmlFor="">CPF:</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">CNPJ:</label>
              <input type="number" />
            </div>
          </div>
          <div className="box-city">
              <label htmlFor="">Cidade:</label>
              <input type="text" />
          </div>
          <div className="box-payment">
            <p className="subtitle">Pagamento:</p>
            <div className="box-payment-data">
                <div>
                    <label htmlFor="">Valor Produto:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Fatura:</label>
                    <input type="text" />
                </div>
            </div>
            <div className="box-company-tel">
                <div>
                    <label htmlFor="">Valor Fatura:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Data de Vencimento:</label>
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
        </FormAdress>
  );
}
