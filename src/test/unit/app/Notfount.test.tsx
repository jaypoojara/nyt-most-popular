import { render, screen } from "@testing-library/react";
import NotFound from "../../../app/ErrorPages/NotFound";

describe("NotFound Component", () => {
  it("renders the NotFound message", () => {
    render(<NotFound />);

    // Assert that the NotFound message is displayed
    expect(screen.getByText("Not Found")).toBeInTheDocument();
  });
});
