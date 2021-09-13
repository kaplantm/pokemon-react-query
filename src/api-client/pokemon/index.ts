import { AxiosResponse } from "axios";
import { useInfiniteQuery } from "react-query";
import { defaultQueryFn } from "../../utils/react-query";
import { getURLParams } from "../../utils/url-utils";
import { defaultPageSize } from "../config";
import { allPokemonEndpoint } from "../endpoints";
import { AllPokemonSearchResults, Paginated } from "../types";

export const usePaginatedPokemon = () =>
  useInfiniteQuery<AxiosResponse<Paginated<AllPokemonSearchResults>>>(
    allPokemonEndpoint,
    ({ pageParam = 0 }) => defaultQueryFn({ queryKey: [allPokemonEndpoint, { limit: defaultPageSize, offset: pageParam }] }),
    {
      keepPreviousData: true,
      // using getURLParams isn't really necessary here - could just use the returned url instead of extracting the offset
      // but i wanted to demo how to use params
      getNextPageParam: (lastPage) => getURLParams(lastPage.data?.next)?.offset || undefined,
      getPreviousPageParam: (firstPage) => getURLParams(firstPage.data?.previous)?.offset || undefined,
    }
  );
