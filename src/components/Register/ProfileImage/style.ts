import styled from "styled-components";

export const FormImage = styled.div`

  .box-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    /* .picture__image img {
      max-width: 100%;
      height: 100%;
      border-radius: 50%;
    } */

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 320px;
      height: 320px;
      background-color: #d9d9d9;
      border-radius: 50%;

      span img {
        max-width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }

    input {
      display: none;
    }

    button {
      display: flex;
      width: 178px;
      height: 53px;
      justify-content: center;
      align-items: center;
      padding: 15px 18px;
      gap: 10px;
      background-color: #5C197C;
      color: white;
      border-radius: 8px;
      border: none;
    }
  }

`;
