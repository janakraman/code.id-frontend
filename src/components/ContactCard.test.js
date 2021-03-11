import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import ContactCard from "./ContactCard";

describe("Testing ContactCard component", () => {
  it("Should render ContactCard component correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <ContactCard />
        </Router>
      </Provider>
    );
    const contactImage = getByTestId("contactImage");
    expect(contactImage).toBeInTheDocument();

    const detailsButton = getByTestId("detailsButton");
    expect(detailsButton).toBeInTheDocument();

    const deleteButton = getByTestId("deleteButton");
    expect(deleteButton).toBeInTheDocument();

    const fullName = getByTestId("fullName")
    expect(fullName).toBeInTheDocument()

    const age = getByTestId("age")
    expect(age).toBeInTheDocument()
  });
});
