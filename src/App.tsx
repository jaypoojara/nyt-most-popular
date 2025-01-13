import { QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { AppQueryClient } from "./api/queryClient";
import ErrorPagesConfig from "./app/ErrorPages/ErrorPagesConfig";
import MostPopularNews from "./app/MostPopularNews/MostPopularNewsConfig";

function App() {
  return (
    <QueryClientProvider client={AppQueryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to={`${MostPopularNews.baseRoute}`} replace />}
          />
          <Route
            path={`${MostPopularNews.baseRoute}`}
            element={<MostPopularNews.Listing />}
          />
          <Route
            path={`${MostPopularNews.baseRoute}/:slug`}
            element={<MostPopularNews.Detail />}
          />
          <Route path="*" element={<ErrorPagesConfig.Notfound />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
