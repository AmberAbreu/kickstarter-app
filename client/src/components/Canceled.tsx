import React, { ReactElement } from "react";

interface Props {}

export default function Canceled({}: Props): ReactElement {
  return (
    <div>
      <h1>Order failed.</h1>
    </div>
  );
}
