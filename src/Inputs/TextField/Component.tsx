import * as React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

export interface IProps {
  label?: string;
  defaultValue: string;
  type?: string;
  pattern?: string;
  placeholder?: string;
  onChange(value: string): void;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column-reverse;

  & label {
    pointer-events: none;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  & input:placeholder-shown + label {
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: text;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.25);
  }

  & input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }

  & ::-webkit-input-placeholder {
    transition: all 0.15s linear;
    opacity: 0;
  }

  & input:focus::-webkit-input-placeholder {
    opacity: 1;
  }
`;

const TextField = styled.input.attrs({
  className: "text-field"
})`
  flex: 1 0 auto;
  font-size: 1.25em;
  padding: 0.25em 0;
  border: 0;
  border-bottom: 1px solid black;

  &:focus {
    outline: 0;
  }

  &:valid {
    border-bottom: 1px solid ${themeGet("colors.success")};
  }

  &:invalid:focus:not(:placeholder-shown) {
    border-bottom: 1px solid ${themeGet("colors.warning")};
  }
`;

const Component: React.ComponentType<IProps> = ({
  label,
  onChange,
  defaultValue,
  type,
  pattern,
  placeholder
}) => (
  <Wrapper>
    <TextField
      innerRef={ref => ref && ref.focus()}
      onChange={e => onChange(e.target.value)}
      defaultValue={defaultValue}
      type={type || "text"}
      pattern={pattern}
      placeholder={placeholder || " "}
      required={true}
    />
    <label>{label}</label>
  </Wrapper>
);

export default Component;
