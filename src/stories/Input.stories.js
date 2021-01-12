import React from "react";
import { Input } from "components";

export default {
  title: "Input",
  component: Input,
};

export const DefaultInput = () => (
  <Input
    label="First Name"
    type="text"
    name="first_name"
    onChange={() => null}
    placeholder="Enter first name"
  />
);
