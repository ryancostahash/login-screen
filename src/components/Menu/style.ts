import styled from "styled-components";

export const Aside = styled.nav`
  background-color: #5c197c;
  width: 98px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 2s ease;
  position: absolute;
  z-index: 1;
  

  &:hover {
    width: 250px;
    overflow: hidden;
  }

  &:hover li p {
    opacity: 1;
    transition: 0.5s ease-in-out;
  }

  /* &:hover li a {
    justify-content: start;
  } */
  
  img {
    margin-top: 24px;
    margin-bottom: 60px;
  }

  // nav
  ul {
    display: flex;
    flex-direction: column;
    gap: 40px;
    list-style: none;
    padding: 0px 15px;
    flex-grow: 1;
  }

  // nav-item
  li {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: nowrap;
    border-radius: 8px;

    &:hover {
      background: #A440D3;
    }
    // img
    a {
      display: flex;
      width: 68px;
      height: 66px;
      align-items: center;
      position: relative;
    }

    // nav-link a
    p {
      transition: 0.5s ease-in-out;
      opacity: 0;
      color: #fff;
    }
    
  }

`;

export const Logo = styled.div``;
