import styled from "styled-components";

export const ProductsArea = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  margin-top: 30px;
  div {
    height: 320px;
    width: 230px;
    border: 2px solid rgb(194, 193, 193);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const Container = styled.span`
  button {
    border-radius: 10px;
    border: none;
    margin: 10px;
  }
`;

export const Button = styled.button`
  button {
    font-size: 20px;
    backgroud: transparent;
    border: none;
    color: crimson;
    display: flex;
    justify-content: space-between;
  }
`;

export const HeaderArea = styled.header`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  background-color: black;
  padding: 20px 50px;
  margin-bottom: 70px;
  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Footer = styled.footer`
  footer {
    font-size: 14px;
    color: white;
    font-family: "Roboto", sans-serif;
    align-items: center;
    background-color: #a9a9a9;
    // padding: 0.3px;
    width: 100%;
    // height: 100px;
    position: auto;
    bottom: 0;
  }
`;

export const LoginArea = styled.div`
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;
  justify-content: center;
  span {
    font-size: 70px;
  }
  input {
    background-color: #8080805f;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid gray;
    padding: 10px;
    width: 15%;
    outline: none;
  }
  button {
    &:disabled {
      opacity: 0.3;
    }
    padding: 10px 40px;
    border: 2px solid red;
    border-radius: 20px;
    color: red;
    font-weight: 800;
    background-color: white;
    &:not(:disabled) {
      &:hover {
        background-color: red;
        color: white;
        cursor: pointer;
      }
    }
  }
`;
