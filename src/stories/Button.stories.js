import React from "react";
import { Button } from "components";

export default {
  title: "Button",
  component: Button,
};

export const PrimaryButton = () => (
  <Button
    onClick={() => alert("You clicked me")}
    variant="primary"
    text="Button"
    type="button"
  />
);
export const NeutralButton = () => (
  <Button
    onClick={() => alert("You clicked neutal button me")}
    variant="neutral"
    text="Button"
    type="button"
  />
);
