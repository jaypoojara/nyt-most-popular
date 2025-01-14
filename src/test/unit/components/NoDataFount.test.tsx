import NoDataFound from "../../../components/ui/no-data-found";
import { render, screen } from "../../TestUtils";

describe("NoDataFound Component", () => {
  it("renders the No Data Found message", () => {
    render(<NoDataFound />);

    // Assert that the No Data Found message is displayed
    expect(screen.getByText("No Data Found")).toBeInTheDocument();
  });
});
