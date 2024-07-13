import styled from "styled-components";

 
export const EditableSpanStyle = {
  CheckboxContainer: styled.label`
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    background: #ffff;
    border-radius: 4px;
  `,

  HiddenCheckbox: styled.input.attrs({ type: "checkbox" })`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `,

  StyledCheckbox: styled.span<{ checked: boolean }>`
    display: inline-block;
    width: 16px;
    height: 16px;
    background: #ffff;
    border-radius: 4px;
    transition: all 150ms;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

    &::after {
      content: "";
      position: absolute;
      display: ${(props) => (props.checked ? "block" : "none")};
      left: 36%;
      top: 10%;
      width: 3px;
      height: 7px;
      border: solid red;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  `,
};
 
