import styled from "styled-components";

export const Container = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  padding: 68px 70px 42px 59px;
  background: white;
  margin: 44px;
  border-radius: 8px;

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
        color: #0F123F;
        font-family: 'Hind', sans-serif;
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
            background: #5C197C;
            border: none;
            outline: none;
            border-radius: 8px;
            
            font-family: 'Poppins', sans-serif;
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

  .box-data {
    display: flex;
    flex-direction: column;
    /* background: black; */

    p {
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        font-family: 'Poppins', sans-serif;
    }

    .box-input-data {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }

    label {
        color: #877F7F;
        font-weight: 600;
        font-size: 14px;
        line-height: 28px;
        font-family: 'Poppins', sans-serif;
    }

    input {
        background: #F1F1F1;
        border: 1px solid #D8CBCB;
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

            input:nth-child(2){
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
                background: #F1F1F1;
                border: 1px solid #D8CBCB;
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
            justify-content: center;;

            div {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background: #5C197C;
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
                border: 1px solid #5C197C;
                outline: none;
                color: #5C197C;
                background: white;
                font-weight: 400;
                font-size: 16px;
            }

            button:nth-child(2) {
                width: 355px;
                height: 48px;
                background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #5C197C;
                border-radius: 7px;
                border: none;
                color: white;
                outline: none;
            }
        }
    }   

  }

  


  
`;
