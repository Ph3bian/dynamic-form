import React from "react";
import { axe, toHaveNoViolations } from "jest-axe";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../components";

describe("The <Input /> component", () => {
  expect.extend(toHaveNoViolations);

  const defaultProps = {
    type: "text",
    onChange: jest.fn(),
    label: "First Name",
    placeholder: "Enter first name",
    name: "firstName",
  };

  test("Should render input correctly", () => {
    const { asFragment } = render(<Input {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render input label correctly", () => {
    const { getByText } = render(<Input {...defaultProps} />);
    expect(getByText(/First Name/)).toBeInTheDocument();
  });

  test("Should call the onChange handler when it is provided", () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);
    const defaultField = getByPlaceholderText(defaultProps.placeholder);
    const inputValue = "Anwuli";

    fireEvent.change(defaultField, { target: { value: inputValue } });
    expect(defaultField.value).toBe(inputValue);
  });

  test("Should not fail any accessibility tests", async () => {
    const { container } = render(<Input {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
