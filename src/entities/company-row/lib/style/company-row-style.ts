import styled from "styled-components";

export const companyRowStyle = {
  Tr: styled.tr<{ $isActive: boolean }>`
    background-color: ${({ $isActive }) => ($isActive ? "#762e2e" : "#25b084")};
  `,
  Td: styled.td`
    padding: 10px;
  `,
};
