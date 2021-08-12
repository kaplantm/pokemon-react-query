import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import { GridItemContent } from "react-virtuoso";
import { getAllPokemon } from "../api/pokemon";
import { reactQueryDefaults } from "../lib/constants/react-query";
import PokemonTile from "../../components/pokemon-tile";
import useStyles from "./use-styles";
import LoadableGrid from "../../components/loadable-grid";

// TODO: now scss?
function HomePage() {
  const classes = useStyles();
  // TODO: now enter name and play
  // TODO: now context
  const { isFetched, data, isSuccess } = useQuery(
    "todos",
    getAllPokemon,
    reactQueryDefaults
  );
  console.log({ isFetched, data, isSuccess });

  const Item = useMemo(() => {
    return ((index: number) => {
      const pokemonData = data?.results[index];
      return (
        <PokemonTile
          name={pokemonData?.name}
          url={pokemonData?.url}
          number={index + 1}
        />
      );
    }) as GridItemContent;
  }, [data]);

  if (!isFetched) {
    return <CircularProgress />;
  }
  return (
    <>
      <h1>Home</h1>
      {data?.results?.length ? (
        <LoadableGrid count={data.results.length} ItemContent={Item} />
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default HomePage;
