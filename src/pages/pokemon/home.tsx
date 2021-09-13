import React, { useMemo } from "react";
import { CircularProgress, Typography } from "@material-ui/core";
import { GridItemContent } from "react-virtuoso";
import PokemonTile from "../../components/pokemon-tile";
import LoadableGrid from "../../components/loadable-grid";
import { AllPokemonSearchResult } from "../../api-client/types";
import { defaultPageSize } from "../../api-client/config";
import { usePaginatedPokemon } from "../../api-client/pokemon";

const fallbackSearchResult = { name: "Not Found", url: "" };

function HomePage() {
  const { isFetched, data, fetchNextPage, isFetchingNextPage } = usePaginatedPokemon();
  const Item = useMemo(() => {
    return ((index: number) => {
      let pokemonData: AllPokemonSearchResult = fallbackSearchResult;
      if (index === -1) {
        return <PokemonTile name={undefined} url={undefined} number={undefined} loading />;
      }
      // used for scroll search placeholder
      try {
        const pageIndex = Math.floor(index / defaultPageSize);
        const itemOnPage = Math.floor(index % defaultPageSize);
        pokemonData = data?.pages[pageIndex].data.results[itemOnPage] || fallbackSearchResult;
      } catch (e) {
        pokemonData = fallbackSearchResult;
      }

      return <PokemonTile name={pokemonData?.name} url={pokemonData?.url} number={index + 1} />;
    }) as GridItemContent;
  }, [data]);

  const totalLoadedItems = useMemo(
    () =>
      (data?.pages || []).reduce((acc, val) => {
        return acc + val?.data.results?.length || 0;
      }, 0),
    [data]
  );

  if (!isFetched) {
    return <CircularProgress size={50} />;
  }

  if (!data?.pages?.length) {
    return <Typography>Oof.</Typography>;
  }

  // I'm not being petty, i'm just being nice to the free pokemon api
  const fullyLoaded = totalLoadedItems >= 151 - defaultPageSize;
  function loadMore() {
    if (!fullyLoaded) {
      fetchNextPage();
    }
  }
  return (
    <>
      <LoadableGrid
        count={totalLoadedItems}
        ItemContent={Item}
        loadMore={loadMore}
        isFetchingNextPage={isFetchingNextPage}
        fullyLoaded={fullyLoaded}
      />
    </>
  );
}
export default HomePage;
