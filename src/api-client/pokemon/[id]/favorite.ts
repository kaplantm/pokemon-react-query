import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export const usePostFavoritePokemon = (endpoint: string) => {
  const queryClient = useQueryClient();

  // would need this if your endpoint requires a refetch to get the updated data after success
  // its fine that its on a page twice, thats the magic of react-query - it deduplicates requests by key
  //   const { refetch } = useQuery<AxiosResponse<{ isFavorited: boolean }>>(endpoint);

  return useMutation<boolean, string, { isFavorited: boolean }>((isFavorited) => axios.post(endpoint, { isFavorited }), {
    onMutate: (data) => {
      // A mutation is about to happen
      // optimistically update the query locally with the expected response
      queryClient.setQueryData(endpoint, { data });
      // Optionally return a context containing data to use when for example rolling back
      return { data };
    },
    onError: (error, variables, context: any) => {
      // An error happened
      // rolling back optimistic update
      queryClient.setQueryData(endpoint, { data: context });
    },
    onSuccess: (data, variables, context) => {
      // didn't actually test this since the endpoint never succeeds
      // but in theory you would want to update the date here too make sure you're in sync with the server

      // assuming you post endpoint returns the updated data:
      queryClient.setQueryData(endpoint, { data: context });
      // or if your post endpoint does not return the updated data, you'd want to call refetch() on for the relevant endpoint
      // refetch();
    },
  });
};
