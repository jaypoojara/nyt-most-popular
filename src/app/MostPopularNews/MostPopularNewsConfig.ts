import React from "react";

const Listing = React.lazy(() => import("./Listing"));

const baseRoute = "/nyt-most-popular-news";

const MostPopularNews = {
  Listing,
  baseRoute,
};
export default MostPopularNews;
