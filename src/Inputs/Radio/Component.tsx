import * as React from "react";
import styled from "styled-components";

export interface IProps {
  values: string[];
  defaultValue: string;
  onChange(value: string): void;
}

const Radio = styled.div.attrs({ className: "radio" })`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  & label {
    flex: 1 0 auto;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  & input {
    margin-right: 1rem;
  }
`;

const Component: React.ComponentType<IProps> = ({
  values,
  defaultValue,
  onChange
}) => (
  <Radio onChange={e => onChange((e.target as HTMLInputElement).value)}>
    {values.map((value, i) => (
      <label key={i}>
        <input
          value={value}
          type="radio"
          name="group"
          ref={ref => (value === defaultValue || i === 0) && ref && ref.focus()}
          defaultChecked={value === defaultValue}
        />
        {value}
      </label>
    ))}
  </Radio>
);

export default Component;
