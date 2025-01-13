import React from "react";

const Detail = React.lazy(() => import("./Detail"));
const Listing = React.lazy(() => import("./Listing"));

const baseRoute = "/nyt-most-popular-news";

const MostPopularNews = {
  Listing,
  Detail,
  baseRoute,
};
export default MostPopularNews;
