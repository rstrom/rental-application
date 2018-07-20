import { array, func, object } from "prop-types";
import { compose, lifecycle, withContext, withStateHandlers } from "recompose";
import Component, { IProps } from "./Component";

const responsesOnReload = JSON.parse(
  String(sessionStorage.getItem("responses"))
);

export default compose<{}, IProps>(
  lifecycle({}),
  withStateHandlers(() => ({ responses: responsesOnReload || {} }), {
    respond: state => (index, value) => {
      const responses = {
        ...state.responses,
        [index]: value
      };
      sessionStorage.setItem("responses", JSON.stringify(responses));
      return {
        responses
      };
    }
  }),
  withContext(
    {
      questions: array,
      respond: func,
      responses: object
    },
    props => props
  )
)(Component);
