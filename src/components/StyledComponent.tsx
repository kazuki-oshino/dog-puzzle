import React from "react";
import styled from "styled-components";

export const StyledComponent: React.VFC = () => {
  return (
    <SContainer>
      <STitle>styled component</STitle>
      <SButton>ボタン</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 1px #aaa;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  width: 300px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const STitle = styled.p`
  margin: 0;
  color: #aaa;
`;

const SButton = styled.button`
  background-color: #ddd;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: rgb(70, 12, 12);
    color: red;
    cursor: grabbing;
  }
`;
