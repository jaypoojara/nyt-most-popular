import Loading from "../../../components/ui/loading";
import { render, screen } from "../../TestUtils";

describe("Loading Component", () => {
  it("renders the Loading spinner and the loading text", () => {
    render(<Loading />);

    // Check if the loading spinner is rendered using class name
    const spinner = screen.getByTestId("loading"); // Or you can use a role-based query
    expect(spinner).toBeInTheDocument();

    // Check if the loading text is rendered with correct accessibility attributes
    const loadingText = screen.getByTestId("loading");
    expect(loadingText).toHaveTextContent("Loading...");
  });

  it("applies additional className if provided", () => {
    const { container } = render(<Loading className="additional-class" />);

    // Ensure that the provided className is applied to the component
    expect(container.firstChild).toHaveClass("additional-class");
  });
});
