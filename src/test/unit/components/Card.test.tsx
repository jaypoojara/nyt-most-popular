import Card from "../../../components/ui/card";
import { render, screen } from "../../TestUtils";

// Mock Image type
const mockMedia = {
  url: "https://example.com/image.jpg",
  altText: "Example image",
  width: 200,
  height: 150,
};

describe("Card Component", () => {
  it("renders the Card component with the correct props", () => {
    // Mock props for the Card component
    const props = {
      title: "Sample Title",
      abstract: "Sample abstract content for the article.",
      media: mockMedia,
      byline: "Byline Text",
    };

    render(<Card {...props} />);

    // Check if the title is rendered correctly
    expect(screen.getByText("Sample Title")).toBeInTheDocument();

    // Check if the abstract is rendered correctly
    expect(
      screen.getByText("Sample abstract content for the article.")
    ).toBeInTheDocument();

    // Check if the byline is rendered correctly
    expect(screen.getByText("Byline Text")).toBeInTheDocument();

    // Check if the image is rendered with the correct src, alt, width, and height
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", mockMedia.url);
    expect(imgElement).toHaveAttribute("alt", mockMedia.altText);
    expect(imgElement).toHaveAttribute("width", String(mockMedia.width));
    expect(imgElement).toHaveAttribute("height", String(mockMedia.height));
  });
});
