
  
import React from "react";
import { render, fireEvent, findByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import '@testing-library/jest-dom/extend-expect'

// Write up the two tests here and make sure they are testing what the title shows
// types of tests: arrange, act, and assert 

test("form header renders", () => {
    const {getByText}= render(<CheckoutForm/>)
    const header = getByText(/Checkout form/i)
    expect(header).toBeInTheDocument
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm/>);
   const successMessage = findByTestId(/successmessage/i)
    expect(successMessage).toBeTruthy;

});
