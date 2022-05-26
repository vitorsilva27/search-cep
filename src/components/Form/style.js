import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: transparent;
  padding: 15px;
  margin: 34px;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px #000000;
`;

export const InputText = styled.input`
  background-color: transparent;
  border: 0;
  font-style: 20px;
  color: #fff;
  outline: none;
  margin-right: 8px;


  ::placeholder{
      color: #fff;
  }

`;

export const ButtonSearch = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.5s;

  :hover{
    transform: scale(1.3);
}
`;

export const ContainerModal = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 12px 46px;
  border-radius: 8px;

  @media (max-width: 800px) {
    width: 80%;
  }
`;
