import React from "react";

import { render, fireEvent } from "@testing-library/react";
import { Select } from "../../components";

describe("The <Select /> component", () => {
  const defaultProps = {
    onChange: jest.fn(),
    name: "firstName",
    options: ["Phebian", "Anwuli"],
    label: "Name",
    defaultValue: "",
  };

  test("Should render select correctly", () => {
    const { asFragment } = render(<Select {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should call the onChange handler when it is provided", () => {
    const { getByTestId } = render(<Select {...defaultProps} />);
    const selectField = getByTestId("TextSelect");
    const inputValue = "Anwuli";

    fireEvent.change(selectField, { target: { value: inputValue } });
    expect(defaultProps.onChange).toHaveBeenCalled();
  });
});
