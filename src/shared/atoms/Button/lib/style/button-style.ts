import styled from "styled-components";

export const ButtonStyle = {
  Button: styled.button`
    border: none;
    padding: 5px 10px;
    background-color: #246037;
    transition: background-color 0.3s ease;
    border-radius: 5px;
    color: white;
    &:hover {
      background-color: #762e2e;
    }
  `,
};
