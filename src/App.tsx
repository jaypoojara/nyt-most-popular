import { QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppQueryClient } from "./api/queryClient";
import ErrorPagesConfig from "./app/ErrorPages/ErrorPagesConfig";
import MostPopularNews from "./app/MostPopularNews/MostPopularNewsConfig";
import Layout from "./components/Layout";

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
          <Route path="*" element={<ErrorPagesConfig.Notfound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
