import * as React from "react";
import styled from "styled-components";
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
  height: 1rem;
  width: 100%;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.05);
  ${color};
`;

const ProgressBar = styled.div<{ width: number; bg: string }>`
  height: 1rem;
  width: ${p => p.width * 100}%;
  ${color};
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(127, 127, 127, 0.1);
  ${space};
  ${color};
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
  question,
  responses
}) => (
  <Wrapper
    onKeyPress={e =>
      e.key === "Enter" && !!responses[Number(pageNumber) - 1] && handleNext()
    }
  >
    <ProgressBackground bg="black">
      <ProgressBar
        bg="blue"
        width={0.1 + (0.9 * (Number(pageNumber) - 1)) / questions.length}
      />
    </ProgressBackground>
    <Button
      className="back"
      onClick={handleBack}
      disabled={!responses[Number(pageNumber) - 1]}
    >
      Back
    </Button>
    <Question bg="#fff" m="1rem 0" p="1rem" width={[1, 1 / 2, 1 / 4]}>
      <Text mb="1rem" fontSize="0.875em" color="gray">
        Question {pageNumber} of {questions.length}
      </Text>
      <Text mb="2rem" fontWeight="600">
        {question.label}
      </Text>
      {children}
      <Button
        mt="1rem"
        flex="0 0 auto"
        alignSelf="flex-end"
        bg="white"
        borderColor="blue"
        border="1px solid"
        className="next"
        onClick={handleNext}
        disabled={!responses[Number(pageNumber) - 1]}
      >
        Next
      </Button>
    </Question>
  </Wrapper>
);

export default Component;
