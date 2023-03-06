import styled from "styled-components";

export const Steps = styled.div`
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
`;
export const Buttons = styled.div`
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
    cursor: pointer;
  }

  button:nth-child(2) {
    width: 355px;
    height: 48px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #5c197c;
    border-radius: 7px;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;

  }
`;
