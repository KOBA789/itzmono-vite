import React from "react";
import { Button, H1 } from "@blueprintjs/core";
import init, { greet } from "./crates/hello/pkg";

init();

export const App: React.FC = () => {
  return <>
    <H1>Hello</H1>
    <Button onClick={() => greet()}>Say hello</Button>
  </>;
};
