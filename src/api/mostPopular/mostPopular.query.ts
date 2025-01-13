import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { nytAxiosInstance } from "../axios";
import { ACTION_KEYS, QUERY_KEYS } from "../queryKeys";
import { GetResponse } from "./mostPopular.types";

const BASE_API_PATH = "/mostpopular/v2/viewed";
const ENTITY_QUERY_KEY = QUERY_KEYS.MOST_POPULAR;

export const useGetMostPopular = () => {
  return useQuery({
    queryKey: [ENTITY_QUERY_KEY, ACTION_KEYS.GET],
    queryFn: async () => {
      const { data } = await nytAxiosInstance.get<GetResponse>(
        `${BASE_API_PATH}/1.json?api-key=${import.meta.env.VITE_NYT_API_KEY}`
      );
      return data;
    },
    throwOnError(error) {
      const errorMessage =
        "Something went wrong while getting most popular list";

      toast(errorMessage, {
        type: "error",
      });
      console.error(error);

      // we must return false to handle default suspense behavior
      return false;
    },
  });
};
