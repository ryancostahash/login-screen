import styled from "styled-components";

export const Aside = styled.nav`
  background-color: #5c197c;
  width: 100px;
  /* display: flex; */
  /* flex-direction: column; */
  transition: 2s ease;
  

  &:hover {
    width: 250px;
    /* justify-content: center; */
    overflow: hidden;
  }

  &:hover li a {
    opacity: 1;
    color: #fff;
  }
  
  img {
    /* margin-top: 24px;
    margin-bottom: 60px; */
  }

  ul {
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 40px; */
    /* list-style: none; */
    /* padding: 20px 12px; */
    /* flex-grow: 1; */
    /* margin-top: 24px; */
  }

`;

export const Logo = styled.div``;
