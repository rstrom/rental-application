import * as React from "react";
import styled from "styled-components";

export interface IProps {
  defaultValue: string;
  onChange(value: string): void;
}

const Wrapper = styled.div`
  padding: 4px 10px;
  border: 1px solid #e7e6e5;
  border-radius: 3px;
`;

const TextField = styled.input.attrs({ className: "text-field", type: "text" })`
  flex: 1 0 auto;
  font-size: 1em;
  border: none;

  &:focus {
    outline: 0;
  }
`;

const Component: React.ComponentType<IProps> = ({ onChange, defaultValue }) => (
  <Wrapper>
    <TextField
      innerRef={ref => ref && ref.focus()}
      onChange={e => onChange(e.target.value)}
      defaultValue={defaultValue}
    />
  </Wrapper>
);

export default Component;
