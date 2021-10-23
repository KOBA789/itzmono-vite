import React from "react";
import { Button, H1 } from "@blueprintjs/core";
import init, { greet } from "@crate/hello/pkg";

init();

export const App: React.FC = () => {
  return (
    <>
      <H1>Hello</H1>
      <Button onClick={() => greet()}>Say hello</Button>
    </>
  );
};
