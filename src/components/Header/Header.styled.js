import styled from "styled-components";

export const HeaderWrapper = styled.div`
    border-bottom: #001E50 2px solid;
    display: flex;
    width: 100%;
`;

export const BurgerMenu = styled.div`
    display: flex;
    align-items: center;
`;

const BurgerButton = styled.button`
  //background: url("") no-repeat center;
  background-size: cover;
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

export default function MyComponent() {
  return <BurgerButton onClick={() => alert("Clicked!")} />;
};

export const BurgerText = styled.div`
    color: #001E50;
`;
