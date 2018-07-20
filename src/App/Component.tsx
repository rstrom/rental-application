import * as React from "react";
import { Route } from "react-router-dom";
import styled, { injectGlobal } from "styled-components";
import { color, fontSize, space, width } from "styled-system";
import Question from "./Question";
import Start from "./Start";
import Summary from "./Summary";

export interface IProps {
  questions: Array<{
    component: string;
  }>;
}

/* tslint:disable */
injectGlobal`
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`;
/* tslint:enable */

const App = styled.div`
  display: flex;
  font-family: Helvetica;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  ${color};
  ${fontSize};

  & * {
    transition: all 0.25s linear;
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  ${width};
  ${space};
  ${color};
`;

const Component: React.ComponentType<IProps> = ({ questions }) => (
  <App bg="white" fontSize={["1rem", "1rem", "1.25rem"]}>
    <Page p={["2rem", "2rem", "1rem"]} width={[1, 3 / 5, 3 / 7]}>
      <Route exact={true} path="/" component={Start} />
      <Route path="/page/:pageNumber" component={Question} />
      <Route exact={true} path="/summary" component={Summary} />
    </Page>
  </App>
);

export default Component;
