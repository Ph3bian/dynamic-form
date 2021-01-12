import React from "react";
import { Button } from "components";

export default {
  title: "Example/Button",
  component: Button,
 
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Button",
  type: "button",
  onClick:()=>alert("You clicked me")
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Neutral Button",
  variant: "neutral",
  type:"submit"
};
