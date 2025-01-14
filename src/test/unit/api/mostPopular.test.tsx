import { http, HttpResponse } from "msw";
import { toast } from "react-toastify";
import { useGetMostPopular } from "../../../api/mostPopular/mostPopular.query";
import { mockedServer } from "../../mock/mockServer";
import { queryClient, renderHook, waitFor, Wrapper } from "../../TestUtils";

afterEach(() => {
  queryClient.clear(); // Clear query client cache to ensure a fresh state
});

// Mock the toast function
vi.mock("react-toastify", () => {
  const actual = vi.importActual("react-toastify");
  return {
    ...actual,
    toast: vi.fn(), // Mock the toast function
    ToastContainer: () => <div data-testid="toast-container" />,
  };
});

describe("useGetMostPopular", () => {
  it("fetches and returns the most popular articles", async () => {
    const { result } = renderHook(() => useGetMostPopular(), {
      wrapper: Wrapper,
    });

    await waitFor(() => expect(result.current.data).toBeDefined());
    expect(result.current.data?.results).toHaveLength(20);

    const article = result.current.data?.results[0];
    console.log({ article });
    expect(article?.title).toBe("Maps: Tracking the Los Angeles Wildfires");
    expect(article?.abstract).toBe(
      "See the latest extent of the devastating fires in the Los Angeles area."
    );
  });

  it("handles API errors gracefully", async () => {
    mockedServer.use(
      http.get("*/mostpopular/v2/viewed/1.json", () => {
        return HttpResponse.json(
          { message: "Internal Server Error" },
          {
            status: 500,
          }
        );
      })
    );

    const { result } = renderHook(() => useGetMostPopular(), {
      wrapper: Wrapper,
    });

    // Wait for the query to finish
    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    expect(toast).toHaveBeenCalledWith(
      "Something went wrong while getting most popular list",
      expect.objectContaining({
        type: "error",
      })
    );
  });
});
