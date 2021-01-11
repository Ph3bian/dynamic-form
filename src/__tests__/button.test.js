import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

describe('The <Button/> component', () => {
  expect.extend(toHaveNoViolations);

  const defaultProps = {
    type: 'button',
    onClick: jest.fn(),
    text: 'Submit',
  };

  test('Should render button correctly', () => {
    const { asFragment } = render(<Button {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Should render button text correctly', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    expect(getByText(/Submit/)).toBeInTheDocument();
  });

  test('Should call the onClick handler when it is provided', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    fireEvent.click(getByText(defaultProps.text));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  test('Should not fail any accessibility tests', async () => {
    const { container } = render(<Button {...defaultProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
