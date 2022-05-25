import styled from "styled-components";

export const Container = styled.main`
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
