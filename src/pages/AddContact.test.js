import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import AddContact from "./AddContact";

describe("Testing AddContact component", () => {
  it("Should render AddContact component correctly", () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router>
          <AddContact />
        </Router>
      </Provider>
    );
    const title = getByText("Add New Contact");
    expect(title).toBeInTheDocument();
  });
});
