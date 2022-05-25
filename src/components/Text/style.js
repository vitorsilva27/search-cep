import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 56px;
  color: #fff;
  text-align: center;
  animation: flipTitle 2s;

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const H2 = styled.h2`
  margin: 16px 0px;
  font-size: 39px;

  @media (max-width: 800px) {
    font-size: 28px;
  }
`;

export const H3 = styled.h3`
  font-size: ${({ size }) => (size ? size : "1,2")}rem;
`;

export const Span = styled.span`
  margin-bottom: 16px;
  font-weight: bold;
`;

export const P = styled.p`
  font-size: ${({ size }) => (size ? size : "1")}rem;
`;
