import styled from "styled-components";

export const FormData = styled.div`
    display: flex;
    flex-direction: column;

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      font-family: "Poppins", sans-serif;
    }

    .box-input-data {
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

    .box-input-cpf-cnpj {
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

    .box-company {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 20px;

      .box-company-data {
        display: flex;
        flex-direction: column;

        input:nth-child(2) {
          margin-bottom: 20px;
        }
      }

      .box-company-enrollment {
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
    }
`;
