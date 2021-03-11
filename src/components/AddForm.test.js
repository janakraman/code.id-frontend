import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import AddForm from "./AddForm";

describe("Testing AddForm component", () => {
  it("Should render AddForm component correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AddForm />
      </Provider>
    );
    const labelFirstName = getByText("First name");
    expect(labelFirstName).toBeInTheDocument();
    const labelLastName = getByText("Last name");
    expect(labelLastName).toBeInTheDocument();
    const labelAge = getByText("Age");
    expect(labelAge).toBeInTheDocument();
    const labelPhoto = getByText("Photo");
    expect(labelPhoto).toBeInTheDocument();
  });

  it("Should allow user to fill the form", () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <AddForm />
      </Provider>
    );

    const inputFirstName = getByPlaceholderText("Input first name");
    fireEvent.change(inputFirstName, { target: { value: "Firstname" } });
    expect(inputFirstName.value).toBe("Firstname");

    const inputLastName = getByPlaceholderText("Input last name");
    fireEvent.change(inputLastName, { target: { value: "Lastname" } });
    expect(inputLastName.value).toBe("Lastname");

    const inputAge = getByPlaceholderText("Input age");
    fireEvent.change(inputAge, { target: { value: "string" } });
    expect(inputAge.value).toBe("");

    fireEvent.change(inputAge, { target: { value: 25 } });
    expect(inputAge.value).toBe("25");

    const inputPhoto = getByPlaceholderText("Input photo URL");
    fireEvent.change(inputPhoto, { target: { value: "test.jpg" } });
    expect(inputPhoto.value).toBe("test.jpg");
  });
});
