import React from "react";
import { Button, H1 } from "@blueprintjs/core";

export const App: React.FC = () => {
  const greet = () => {
    window.alert("Hello, world!");
  };

  return (
    <>
      <H1>Hello</H1>
      <Button onClick={() => greet()}>Say hello</Button>
    </>
  );
};
