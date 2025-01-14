import Layout from "../../../components/Layout";
import { fireEvent, render, screen, Wrapper } from "../../TestUtils";

describe("Layout Component", () => {
  it("renders the header and navigation links", () => {
    render(<Layout />, { wrapper: Wrapper });

    // Check if the "New York Times" link is rendered and clickable
    const nyTimesLink = screen.getByText("New york times");
    expect(nyTimesLink).toBeInTheDocument();

    // Check if the "Most Popular Lists" link is rendered and href is correct
    const mostPopularLink = screen.getByText("Most Popular Lists");
    expect(mostPopularLink).toBeInTheDocument();
  });

  it("navigates to the root when the 'New York Times' link is clicked", () => {
    render(<Layout />, { wrapper: Wrapper });

    // Click on "New York Times" link
    const nyTimesLink = screen.getByText("New york times");
    fireEvent.click(nyTimesLink);

    // Check if the URL changes to "/"
    expect(window.location.pathname).toBe("/");
  });

  it("renders the Outlet component", () => {
    render(<Layout />, { wrapper: Wrapper });

    // Check if the Outlet component exists in the document
    const outlet = screen.getByTestId("outlet");
    expect(outlet).toBeInTheDocument();
  });
});
