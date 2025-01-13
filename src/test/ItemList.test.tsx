import { delay, http, HttpResponse } from "msw";
import { render, screen } from "./TestUtils";
import { mockedServer } from "./mock/mockServer";

const Listing = () => {
  fetch("https://abc.com/mostpopular");
  return (
    <div>
      <p data-testid="loading">loading...</p>
    </div>
  );
};
describe("GIVEN the ItemList", () => {
  test.only("renders loading state", async () => {
    mockedServer.use(
      http.get("*/mostpopular", () => {
        delay(1000);
        return HttpResponse.json({ results: [] }, { status: 200 });
      })
    );

    render(<Listing />);

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  //   describe.only("WHEN endpoint returns items", () => {
  //     it("THEN the list should be displayed as expected", async () => {
  //       setup(<MostPopularNewsListing />);

  //       const listElement = screen.getByTestId("list");
  //       const firstItem = listElement.querySelectorAll("a")[0];

  //       expect(firstItem).toHaveTextContent("Testing Title");
  //       expect(firstItem).toHaveTextContent("Artist Test");
  //     });
  //   });

  //   describe("WHEN endpoint returns status 400", () => {
  //     it("SHOULD display an error message", async () => {
  //       // to override the query result you can set this code
  //       // at the top of your test
  //       mockedServer.use(
  //         http.get(
  //           "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json",
  //           () => {
  //             return HttpResponse.json(null, { status: 400 });
  //           }
  //         )
  //       );

  //       setup(<MostPopularNews.Listing />);

  //       await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

  //       const errorMessage = "Failed to fetch artworks. Please try again later.";
  //       expect(screen.getByText(errorMessage)).toBeInTheDocument();
  //     });
  //   });
});
