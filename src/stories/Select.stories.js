import React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "components";

const options = ["Nigeria", "Ghana", "Kenya"];

storiesOf("Select", module)
  .add("Default Select", () => <Select label="Country" defaultValue="" options={options} />)

