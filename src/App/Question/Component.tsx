import * as React from "react";
import styled, { keyframes } from "styled-components";
import { color, fontSize, fontWeight, space } from "styled-system";
import Button from "../../Inputs/Button";

export interface IProps {
  match: {
    params: {
      pageNumber: string;
    };
  };
  questions: Array<{
    label: string;
  }>;
  question: {
    label: string;
  };
  responses: object;
  handleBack(): void;
  handleNext(): void;
}

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const ProgressBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 0.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.05);
  ${color};
`;

const ProgressBar = styled.div<{ width: number; bg: string }>`
  height: 0.25rem;
  width: ${p => p.width * 100}%;
  ${color};
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.1);
  ${space};
  ${color};
  animation: ${fadeIn} 0.35s ease-out;
`;

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${color}
`;

const Component: React.ComponentType<IProps> = ({
  children,
  handleBack,
  handleNext,
  match: {
    params: { pageNumber }
  },
  questions,
  responses
}) => (
  <Wrapper>
    <ProgressBackground bg="black">
      <ProgressBar
        bg="blue"
        width={0.1 + (0.9 * (Number(pageNumber) - 1)) / questions.length}
      />
    </ProgressBackground>
    <Button className="back" onClick={handleBack}>
      Back
    </Button>
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!!responses[Number(pageNumber) - 1]) {
          handleNext();
        }
      }}
    >
      <Question
        key={pageNumber}
        bg="#fff"
        m="1rem 0"
        p="1rem"
        width={[1, 1 / 2, 1 / 4]}
      >
        <Text mb="1rem" fontSize="0.875em" fontWeight={300} color="gray">
          {pageNumber} of {questions.length}
        </Text>
        {children}
        <Button
          mt="1rem"
          flex="0 0 auto"
          alignSelf="flex-end"
          bg="white"
          borderColor="blue"
          border="2px solid"
          className="next"
          disabled={!responses[Number(pageNumber) - 1]}
        >
          Next
        </Button>
      </Question>
    </form>
  </Wrapper>
);

export default Component;
