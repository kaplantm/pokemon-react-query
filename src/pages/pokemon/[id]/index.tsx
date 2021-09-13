import React, { useMemo } from "react";
import { useQuery } from "react-query";
import { CircularProgress } from "@material-ui/core";
import { GridItemContent, VirtuosoGrid } from "react-virtuoso";
import PokemonTile from "../../../components/pokemon-tile";
import useStyles from "./use-styles";
import LoadableGrid from "../../../components/loadable-grid";
import CustomItem from "../../../components/loadable-grid/custom-item";
import CustomList from "../../../components/loadable-grid/custom-list";

const data = {
  count: 1118,
  next: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  previous: null,
  results: [
    { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
    { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
    { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
    { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
    { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    { name: "caterpie", url: "https://pokeapi.co/api/v2/pokemon/10/" },
    { name: "metapod", url: "https://pokeapi.co/api/v2/pokemon/11/" },
    { name: "butterfree", url: "https://pokeapi.co/api/v2/pokemon/12/" },
    { name: "weedle", url: "https://pokeapi.co/api/v2/pokemon/13/" },
    { name: "kakuna", url: "https://pokeapi.co/api/v2/pokemon/14/" },
    { name: "beedrill", url: "https://pokeapi.co/api/v2/pokemon/15/" },
    { name: "pidgey", url: "https://pokeapi.co/api/v2/pokemon/16/" },
    { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon/17/" },
    { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon/18/" },
    { name: "rattata", url: "https://pokeapi.co/api/v2/pokemon/19/" },
    { name: "raticate", url: "https://pokeapi.co/api/v2/pokemon/20/" },
  ],
};

// TODO: now scss?
function PokemonPage() {
  const classes = useStyles();
  // // TODO: now enter name and play
  // // TODO: now context
  // const { isFetched, data, isSuccess } = useQuery(
  //   "todos",
  //   getAllPokemon,
  //   reactQueryDefaults
  // );
  // console.log({ isFetched, data, isSuccess });

  // const Item = useMemo(() => {
  //   return ((index: number) => {
  //     const pokemonData = data?.results[index];
  //     return <PokemonTile name={pokemonData?.name} url={pokemonData?.url} number={index + 1} />;
  //   }) as GridItemContent;
  // }, [data]);

  // if (!isFetched) {
  //   return <CircularProgress />;
  // }

  // return (
  //   <VirtuosoGrid
  //     style={{ height: "300px" }}
  //     totalCount={data.results.length}
  //     overscan={24}
  //     itemContent={(i: number) =>
  //       data.results[i] ? (
  //         <div>
  //           #{i} {data.results[i].name}
  //         </div>
  //       ) : (
  //         <div></div>
  //       )
  //     }
  //     components={{
  //       Item: CustomItem,
  //       List: CustomList,
  //     }}
  //   />
  // );
  // return <LoadableGrid count={data.results.length} />;
  return (
    <>
      <h1>ID</h1>
      {/* <LoadableGrid count={data.results.length} ItemContent={Item} /> */}
      {/* {data?.results?.length ? (
        <LoadableGrid count={data.results.length} ItemContent={Item} />
      ) : (
        <h1>loading</h1>
      )} */}
    </>
  );
}

export default PokemonPage;
