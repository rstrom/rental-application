import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontSize, fontWeight, space } from "styled-system";
import Button from "../../Inputs/Button";

export interface IProps {
  questions: Array<{
    type: string;
  }>;
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #fff;
  padding-bottom: 1rem;
`;

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${color}
`;

const Component: React.ComponentType<IProps> = ({ questions }) => (
  <Page>
    <Text p="1rem 0" fontSize="1.25em" fontWeight="600">
      Rental application form
    </Text>
    <Link to={"/page/1"}>
      <Button
        flex="0 0 auto"
        mt="2rem"
        bg="white"
        borderColor="blue"
        border="1px solid"
      >
        Begin
      </Button>
    </Link>
  </Page>
);

export default Component;
