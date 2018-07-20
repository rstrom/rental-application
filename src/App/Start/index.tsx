import { array } from "prop-types";
import { getContext } from "recompose";
import Component from "./Component";

export default getContext({
  questions: array
})(Component);
