import styled from "styled-components";

export const Aside = styled.nav`
  background-color: #5c197c;
  width: 98px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease;
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
  }

  ul:nth-child(2) {
    flex-grow: 1;
  }

  ul:nth-child(2) .home {
  }

  ul:nth-child(2) .service {
    margin-left: 0.5px;
  }

  ul:nth-child(2) .ticket {
    margin-left: 3px;
  }

  ul:nth-child(2) .invoicing {
    margin-left: 11px;
  }

  ul:nth-child(3) {
    margin-bottom: 28px;
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
