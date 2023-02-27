import styled from 'styled-components'

export const Container = styled.div`
    width:  100wh;
    height: 100vh;
    display: flex;
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
    /* background-color: gray; */
    padding: 264px 200px 24px 200px;
`;

export const BoxContent = styled.div`
    width: 100%;
    height: 100%;

    p {
        font-size: 36px;
        font-weight: 300;
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
    padding: 15px 204px;
    margin-top: 32px;
    border: none;
    border-radius: 7px;
    outline: none;
    cursor: pointer;

    :hover {
    background-color: rgba(92, 25, 124, 0.9);

    }
`; 

export const CopyRight = styled.p`
    position: absolute;
    bottom: 24px;
    font-size: 16px;
    color: #7c7f80;
`;
 




