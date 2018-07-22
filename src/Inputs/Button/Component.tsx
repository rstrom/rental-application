import styled from "styled-components";
import {
  alignSelf,
  borderColor,
  borders,
  color,
  flex,
  fontSize,
  justifySelf,
  space
} from "styled-system";

export default styled.button`
  ${flex};
  ${alignSelf};
  ${justifySelf};
  background-color: white;
  ${color};
  font-size: 0.875em;
  ${fontSize};
  border: none;
  ${borders};
  ${borderColor};
  padding: 6px 16px;
  ${space};
  border-radius: 3px;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.05);
  pointer-events: ${p => (p.disabled ? "none" : "auto")};
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
