import { http, HttpResponse } from "msw";
import { responses } from "../responses";

export const Handlers = [
  http.get(
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=",
    () => {
      return HttpResponse.json(responses.nytMostPopularResponseGet);
    }
  ),
];
