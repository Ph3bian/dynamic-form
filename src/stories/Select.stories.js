// import React from "react";
// import { Select } from "components";
// import { action } from "@storybook/addon-actions";
// export default {
//   title: "Example/Select",
//   component: Select,
// };

// const Template = (args) => <Select {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   label: "Country",
//   name: "country",
//   onChange: action("select change"),
//   defaultValue: "",
//   placeholder: "Select Country",
//   options: ["Nigeria", "Ghana", "Kenya"],
// };

import React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "components";

const options = ["Nigeria", "Ghana", "Kenya"];

storiesOf("Select", module)
  .add("Simple usage", () => <Select label="Country" options={options} />)

