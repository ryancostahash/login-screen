import styled from 'styled-components';

export const BoxIcon = styled.li`
    display: flex;
    align-items: center; 
    gap: 12px;
    flex-wrap: nowrap;
    /* width: 66px;
    height: 66px; 
    justify-content: center;
    border-radius: 8px;
    transition: width 0.2s ease; */

    &:hover {
        cursor: pointer;
        background-color: rgba(164, 64, 211, 1);
        /* width: 200px; */
    }

    &:active {
        background-color: rgba(164, 64, 211, 1);
    }	

    a {
        opacity: 0;
        transition: 2s ease;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }

    span {
        /* left: 104px; */
        /* margin-left: 44px;
        position: relative;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: 500;
        color: white; */
    }
`;