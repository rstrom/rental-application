import * as React from "react";
import styled from "styled-components";
import { color, fontSize, fontWeight, space } from "styled-system";

export interface IProps {
  questions: Array<{
    label: string;
  }>;
  responses: {
    [index: string]: string;
  };
}

const Summary = styled.div.attrs({ className: "summary" })`
  display: flex;
  flex-direction: column;
`;

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${color}
`;

const Component: React.ComponentType<IProps> = ({ questions, responses }) => (
  <Summary>
    <Text fontSize="1.25em" fontWeight="bold" m="1rem 0">
      Thanks!
    </Text>
    <Text mb="2rem">Here are your responses:</Text>
    {questions.map(({ label }, i) => (
      <Text key={i} p="2rem" bg="#fff">
        <Text color="#aaa">{label}</Text>
        <Text>{responses[i]}</Text>
      </Text>
    ))}
  </Summary>
);

export default Component;
