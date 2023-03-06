import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  font-family: "Hind", sans-serif;

  h1 {
    font-weight: 600;
    font-size: 28px;
    color: rgba(15, 18, 63, 1);
    line-height: 28px;
  }
`;

export const BoxWelcome = styled.div`
  width: 783px;
  height: 129px;
  background: rgba(142, 48, 187, 1);
  border-radius: 8px;
  padding: 32px 42px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  h3 {
    font-weight: 400;
    color: white;
    font-size: 28px;
    line-height: 34px;
  }

  span {
    font-weight: 600;
  }

  p {
    line-height: 24px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const BoxNewTicket = styled.div`
  width: 376px;
  height: 110px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: center;
  padding: 21px 60px;

  background: white;
  border: 1px solid rgba(75, 107, 235, 0.8);
  box-shadow: 0px 10px 70px rgba(86, 89, 146, 0.1);
  border-radius: 8px;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background: rgba(255, 235, 235, 0.6);
    transition: all 0.5s ease;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const BoxProgressTicket = styled.div`
  width: 376px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: center;
  padding: 24px 22px;
  
  background: white;
  border: 1px solid rgba(255, 23, 23, 0.6);
  border-radius: 8px;
  box-shadow: 0px 10px 70px rgba(86, 89, 146, 0.1);
  transition: all 0.5s ease;


  &:hover {
    cursor: pointer;
    background: rgba(255, 235, 235, 0.6);
    transition: all 0.5s ease;
  }

  h4 {
    font-weight: 400;
    font-size: 24px;
    line-height: 33px;
    color: rgba(0, 0, 0, 0.5);
  }

  p {
    color: rgba(255, 23, 23, 0.5);
    margin-left: 60px;
  }
`;

export const BoxService = styled.div`
  width: 783px;
  height: 595px;
  background-color: white;
  border-radius: 8px;
  padding: 28px 40px 43px 25px;
  margin-bottom: 62px;

  h3 {
    color: rgba(15, 18, 63, 1);
    font-weight: 600;
    font-size: 23px;
    line-height: 32px;
  }

  table {
    width: 100%;
    padding: 25px 0px 43px 0px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  table thead tr {
    display: grid;
    justify-items: start;
    grid-template-columns: repeat(4, 1fr);
    padding:  0 0 0 30px
  }

  table thead tr th {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
  }

  table tbody tr {
    height: 60px;
    padding: 12px 16px 12px 28px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    gap: 70px;
    margin-bottom: 25px;

    background: #ffffff;
    box-shadow: 0px 10px 70px rgba(86, 89, 146, 0.1);
    border-radius: 12px;
  }

  table tbody tr td {
    background: #ffffff;
    box-shadow: 0px 10px 70px rgba(86, 89, 146, 0.1);
  }
`;

export const BoxClient = styled.div`
  width: 285px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 19px 25px 19px 77px;

  div h3 {
    color: black;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  div p {
    color: black;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
`;

export const BoxCalendar = styled.div`
  width: 285px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px 13px 17px 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxMarks = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 9px;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  opacity: 0.1;
  margin-top: 20px;
`;

export const BoxNotification = styled.div`
  width: 285px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 18px;
    }

    h6 {
      font-weight: 500;
      font-size: 16px;
      line-height: 28px;
    }
  }
`;

export const BoxWarnings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div {
    h6 {
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      margin-top: 20px;
    }
  }
`;
