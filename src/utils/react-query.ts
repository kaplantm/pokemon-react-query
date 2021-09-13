// https://react-query.tanstack.com/guides/default-query-function

import axios from "axios";
import { QueryClient } from "react-query";

// Define a default query function that will receive the query key
// the queryKey is guaranteed to be an Array here
// Setup custom fetch to expect URL as first element
const defaultQueryFn = async ({ queryKey }: { queryKey: readonly unknown[] }) => {
  const { data } = await axios.get(queryKey[0] as string);
  return data;
};

// provide the default query function to your app with defaultOptions
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: Infinity,
    },
  },
});

export default queryClient;
