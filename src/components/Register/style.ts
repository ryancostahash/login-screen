import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 68px 70px 42px 59px;
  background: white;
  margin: 44px;
  border-radius: 8px;
`;

export const Form = styled.form`
  .box-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 37px;

    p {
      font-size: 32px;
      font-weight: 600;
      line-height: 28px;
      color: #0f123f;
      font-family: "Hind", sans-serif;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: end;

      p {
        font-size: 16px;
        line-height: 28px;
        font-weight: 500px;
        color: black;
        display: flex;
        align-items: center;
        gap: 7px;

        svg {
          margin-bottom: 4px;
        }
      }

      select {
        width: 148px;
        background: #5c197c;
        border: none;
        outline: none;
        border-radius: 8px;

        font-family: "Poppins", sans-serif;
        font-size: 16px;
        line-height: 28px;
        color: white;
        text-align: center;

        -webkit-appearance: none; /* Safari e Chrome */
        -moz-appearance: none; /* Firefox */
        appearance: none;

        option {
          width: 180px;
          height: 98px;
          padding: 15px 58px 15px 20px;
          background: white;
          color: black;
        }
      }
    }
  }
`
