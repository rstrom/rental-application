import { History } from "history";
import { get } from "lodash";
import { array, func, object } from "prop-types";
import * as React from "react";
import { compose, getContext, mapProps } from "recompose";
import Radio from "../../Inputs/Radio";
import TextField from "../../Inputs/TextField";
import Component from "./Component";

interface IProps {
  history: History;
  responses: object;
  respond(index: number, value: string): void;
}

const InputComponents = {
  Radio,
  TextField
};

export default compose(
  getContext({
    questions: array,
    respond: func,
    responses: object
  }),
  mapProps<{}, IProps>(props => {
    const pageNumber = get(props, "match.params.pageNumber");
    const componentType = get(props, `questions.${pageNumber - 1}.component`);
    const InputComponent = get(InputComponents, componentType);
    const question = get(props, `questions.${pageNumber - 1}`);
    const response = props.responses[Number(pageNumber) - 1];
    return {
      ...props,
      children: (
        <InputComponent
          {...question}
          key={pageNumber}
          defaultValue={response}
          onChange={(value: string) =>
            props.respond(Number(pageNumber) - 1, value)
          }
        />
      ),
      handleBack: () => {
        if (pageNumber > 1) {
          props.history.push(`/page/${Number(pageNumber) - 1}`);
        } else {
          props.history.push("/");
        }
      },
      handleNext: () => {
        console.log("next", pageNumber);
        if (get(props, "questions.length") > pageNumber) {
          props.history.push(`/page/${Number(pageNumber) + 1}`);
        } else {
          props.history.push("/summary");
        }
      },
      question
    };
  })
)(Component);
