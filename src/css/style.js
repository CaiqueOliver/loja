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
    border: 1px solid rgb(194, 193, 193);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const Button = styled.button`
  button {
    font-size: 20px;
    backgroud: transparent;
    border: none;
    color: crimson;
  }
`;

export const HeaderArea = styled.header`
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
