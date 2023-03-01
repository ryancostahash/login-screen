import { IconExclamationMark, IconNotification, IconSettings } from "../Icons/icons";
import {
  BoxCalendar,
  BoxClient,
  BoxMarks,
  BoxNewTicket,
  BoxProgressTicket,
  BoxService,
  BoxWelcome,
  Container,
  Hr,
  BoxNotification,
  BoxWarnings,
} from "./style";
import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import CustomButton from "../Common/CustomButton/CustomButton";

export default function Homepage() {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <h1 style={{ marginBottom: "24px" }}>Home</h1>
      <div style={{ display: "flex", gap: "52px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <BoxWelcome>
            <h3>
              Seja bem vindo, <span>Lorem Ipsum!</span>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </BoxWelcome>
          <div style={{ display: "flex", gap: "31px" }}>
            <BoxNewTicket>
              <h4>
                Abrir novo
                <br />
                Ticket
              </h4>
            </BoxNewTicket>
            <BoxProgressTicket>
              <h4>Andamento Ticket</h4>
              <p>Processando</p>
            </BoxProgressTicket>
          </div>
          <BoxService>
            <h3>Seus serviços</h3>
            <table>
              <thead>
                <tr>
                  <th>Nome do projeto</th>
                  <th>Tipo do serviço</th>
                  <th>Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Lorem Ipsun</td>
                  <td>Segurança</td>
                  <td>Concluído</td>
                  <td>
                    <CustomButton name="Opções" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem Ipsun</td>
                  <td>Segurança</td>
                  <td>Concluído</td>
                  <td>
                    <CustomButton name="Acompanhar" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem Ipsun</td>
                  <td>Segurança</td>
                  <td>Concluído</td>
                  <td>
                    <CustomButton name="Opções" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem Ipsun</td>
                  <td>Segurança</td>
                  <td>Concluído</td>
                  <td>
                    <CustomButton name="Acompanhar" />
                  </td>
                </tr>
                <tr>
                  <td>Lorem Ipsun</td>
                  <td>Segurança</td>
                  <td>Concluído</td>
                  <td>
                    <CustomButton name="Opções" />
                  </td>
                </tr>
              </tbody>
            </table>
          </BoxService>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "27px" }}>
          <BoxClient>
            <div>
              <h3>Lorem Ipsum</h3>
              <p>Client</p>
            </div>
            {IconSettings}
          </BoxClient>
          <BoxCalendar>
            <Calendar onChange={onChange} value={value} />
            <BoxMarks>
              <div style={{ backgroundColor: "red" }}></div>
              <p>08 e 18 Report Semanal</p>
            </BoxMarks>
            <Hr></Hr>
            <BoxMarks>
              <div style={{ backgroundColor: "green" }}></div>
              <p>12 e 21 · Pagamento da Fatura</p>
            </BoxMarks>
          </BoxCalendar>
          <BoxNotification>
              <div>
                <span>{IconNotification}</span>
                <h6>Notifications</h6>
              </div>
              <BoxWarnings>
                <div>
                  <span>{IconExclamationMark}</span>
                  <h6>Houve uma nova atualização no seu projeto</h6>
                </div>
                <Hr></Hr>
                <div>
                  <span>{IconExclamationMark}</span>
                  <h6>Seu Ticket está em andamento, aguarde para mais atualizações</h6>
                </div>
                <Hr></Hr>
                <div>
                  <span>{IconExclamationMark}</span>
                  <h6>O dia do pagamento da fatura está chegando</h6>
                </div>
                <Hr></Hr>
                <div>
                  <span>{IconExclamationMark}</span>
                  <h6>Lorem Ipsum remarcou o Report Semanal</h6>
                </div>
                
              </BoxWarnings>
          </BoxNotification>
        </div>
      </div>
    </Container>
  );
}
