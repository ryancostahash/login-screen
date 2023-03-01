import styled from 'styled-components'


export const Button = styled.button`
    border-radius: 12px;
    color: white;
    border: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    transition: all 0.5s ease;

    &:hover {
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.5s ease;
    }
`;