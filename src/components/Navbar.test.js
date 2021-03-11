import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import Navbar from "./Navbar";

describe("Testing Navbar component", () => {
  it("Should render Navbar component correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <Navbar />
        </Router>
      </Provider>
    );
    const mainLogo = getByTestId("mainLogo");
    expect(mainLogo).toBeInTheDocument();
    const addContactLink = getByText("Add Contact");
    expect(addContactLink).toBeInTheDocument();
  });
});
