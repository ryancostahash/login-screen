import styled from "styled-components";

export const FormAdress = styled.div`
    display: flex;
    flex-direction: column;

    .subtitle {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      font-family: "Poppins", sans-serif;
    }

    .box-input-adress {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      div {
        display: flex;
        flex-direction: column;
      }
    }

    label {
      color: #877f7f;
      font-weight: 600;
      font-size: 14px;
      line-height: 28px;
      font-family: "Poppins", sans-serif;
    }

    input {
      background: #f1f1f1;
      border: 1px solid #d8cbcb;
      border-radius: 8px;
      padding: 10px;
      color: black;
      font-size: 14px;
      outline: none;
    }

    .box-input-number-cep {
      display: flex;
      width: 100%;
      gap: 20px;
      margin-top: 20px;

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    .box-city {
      display: flex;
      margin-top: 20px;
      flex-direction: column;
    }

    .box-payment {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;

      .box-payment-data {
        display: flex;
        gap: 20px;

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      }

      .box-company-product {
        display: flex;
        gap: 20px;

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
      }

      .box-company-tel {
        display: flex;
        gap: 20px;

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        select {
          background: #f1f1f1;
          border: 1px solid #d8cbcb;
          border-radius: 8px;
          padding: 10px;
          color: black;
          font-size: 14px;
          outline: none;
          -webkit-appearance: none; /* Safari e Chrome */
          -moz-appearance: none; /* Firefox */
          appearance: none;
        }
      }

      .steps {
        margin-top: 40px;
        margin-bottom: 28px;
        display: flex;
        gap: 20px;
        justify-content: center;

        div {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #5c197c;
        }
      }

      .buttons {
        display: flex;
        justify-content: center;
        gap: 20px;

        button:nth-child(1) {
          width: 355px;
          height: 48px;
          border-radius: 7px;
          border: 1px solid #5c197c;
          outline: none;
          color: #5c197c;
          background: white;
          font-weight: 400;
          font-size: 16px;
        }

        button:nth-child(2) {
          width: 355px;
          height: 48px;
          background: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.2),
              rgba(0, 0, 0, 0.2)
            ),
            #5c197c;
          border-radius: 7px;
          border: none;
          color: white;
          outline: none;
        }
      }
    }
`;
