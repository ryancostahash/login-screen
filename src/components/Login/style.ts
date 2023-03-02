import styled, { css } from 'styled-components'

export const Container = styled.div`
    width:  100vw;
    height: 100vh;
    display: flex;

    @media screen and (max-width: 1200px) {
        width:  100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;

export const Banner = styled.div`
    width:  50%;
    height: 100%;
    padding: 64px 0 96px 0;
    background-color: #5C197C;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;


    @media (max-width: 1200px) {
        display: none;
    }
`;

export const BoxTitle = styled.div`
    height: 332px;
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 128px;
    font-weight: 500;
    color: #FFFFFF;
`;

export const Content = styled.div`
    width:  50%;
    height: 100%;


    @media screen and (max-width: 1200px) {
        width: 100%;
        height: 100%;
        padding: 50px;
        display: flex;
        justify-content: center;
    }

    @media screen and (min-width: 1200px) {
        padding: 264px 120px 24px 120px;
    }
`;

export const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    
    p {
        font-size: 36px;
        font-weight: 300;
    }

    @media screen and (max-width: 1200px) {
        padding-top: 48px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
    }
    
    @media screen and (min-width: 1200px) {
        max-width: 500px;
        display: flex;
        flex-direction: column;
    }
`;

export const BoxInputs = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0 12px 0;

`;

export const Label = styled.label`
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 8px;
`; 

export const Input = styled.input`
    height: 48px;
    padding: 15px 14px;
    font-size: 16px;
    outline: none;
    border: 1px solid #d6d6d6;
    color: #A5A5A5;
    border-radius: 6px;
`; 


export const Button = styled.button`
    width: 100%;
    background-color: rgba(92, 25, 124, 1);
    color: white;
    padding: 15px 0;
    margin-top: 32px;
    border: none;
    border-radius: 7px;
    outline: none;
    cursor: pointer;

    &:hover {
    background-color: rgba(92, 25, 124, 0.9);

    }
`; 

export const CopyRight = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: start;
    align-items: end;

    p {
        font-size: 16px;
        color: #7c7f80;
    }


    @media screen and (max-width: 1200px) {
        margin-bottom: -32px;
        justify-content: center;
        display: flex;
        align-items: end;

        p {
            font-size: 12px;
        }
    }
`;
 




