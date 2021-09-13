// https://react-query.tanstack.com/guides/default-query-function

import axios from "axios";
import { QueryClient } from "react-query";

// Define a default query function that will receive the query key
// the queryKey is guaranteed to be an Array here

// Setup default fetcher as custom fetch to expect URL as first element and query params as second
// When we need to deviate from this approach (e.g. for other types of requests), use a custom fetcher
export const defaultQueryFn = async ({ queryKey }: { queryKey: readonly unknown[] }) =>
  axios.get(queryKey[0] as string, { params: queryKey[1] });

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
      retry: false,
    },
  },
});

export default queryClient;
