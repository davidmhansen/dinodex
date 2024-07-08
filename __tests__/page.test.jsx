import { render } from "@testing-library/react";
import Home from "../app/page";

describe("Index page", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
