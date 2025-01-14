import Wrapper from "../../../components/ui/wrapper";
import { render, screen } from "../../TestUtils";

describe("Wrapper Component", () => {
  it("renders children correctly", () => {
    render(
      <Wrapper>
        <div>Test Content</div>
      </Wrapper>
    );

    // Check if the children are rendered
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const { container } = render(
      <Wrapper className="custom-class">
        <div>Test Content</div>
      </Wrapper>
    );

    // Check if the className is applied to the wrapper div
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
