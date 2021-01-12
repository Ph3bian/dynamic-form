import React from "react";
import { Input } from "components";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "First Name",
  type: "text",
  name: "first_name",
  onChange: null,
  placeholder: "Enter first name",
};
