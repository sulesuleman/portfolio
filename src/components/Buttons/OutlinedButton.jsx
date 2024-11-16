import React from "react";
import styled from "styled-components";

export const StyledButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  // height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  margin-top: 10px;
  width: 150px;
  padding: 5px 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const OutlinedButton = ({ link, children, onClick }) => {
  return (
    <StyledButton
      href={link}
      target="_blank"
    >
      {children}
    </StyledButton>
  );
};

export default OutlinedButton;
