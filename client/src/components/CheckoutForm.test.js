import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByLabelText, findAllByText } = render(<CheckoutForm />);
    const firstNameInput = getByLabelText(/first Name:/i);
    const lastNameInput = getByLabelText(/last Name:/i);
    const addressInput = getByLabelText(/address:/i);
    const cityInput = getByLabelText(/city:/i);
    const stateInput = getByLabelText(/state:/i);
    const zipInput = getByLabelText(/zip:/i);

    fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "Raymond" }
      });
      fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "TheCat" }
      });
      fireEvent.change(addressInput, {
        target: { name: "address", value: "123 Inthemiddle ofthesea" }
      });
      fireEvent.change(cityInput, {
        target: { name: "city", value: "Goldenrod Island" }
      });
      fireEvent.change(stateInput, {
        target: { name: "state", value: "GI" }
      });
      fireEvent.change(zipInput, {
        target: { name: "zip", value: "50697" }
      });
      findAllByText(/raymond/i);
});

test("form shows success message on submit with form details", () => {
    const{queryAllByText} = render (<CheckoutForm/>);
    const submitButton = queryAllByText(/Checkout/);

     fireEvent.click(submitButton[1]);
     
});
