import React, { useMemo } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
  Box,
  Typography,
} from "@material-ui/core";
import { GridItemContent, GroupedVirtuoso, VirtuosoGrid } from "react-virtuoso";
import PokemonTile from "../../components/pokemon-tile";
import useStyles from "./use-styles";
import LoadableGrid from "../../components/loadable-grid";
import CustomItem from "../../components/loadable-grid/custom-item";
import CustomList from "../../components/loadable-grid/custom-list";
import { allPokemonEndpoint, getPokemonEndpoint } from "../../api-client/endpoints";
import { Paginated, PokemonType } from "../../api-client/types";
import { AxiosResponse } from "axios";

const ListContainer: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>> = React.forwardRef<HTMLDivElement>(
  (props, ref) => <Box border="1px solid grey" p={3} />
);
const ItemContainer: React.FunctionComponent = () => <Box border="1px solid red" p={1} />;
const Item: React.FunctionComponent = () => <Box>hello</Box>;

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
function HomePage() {
  const classes = useStyles();
  // // TODO: now enter name and play
  // // TODO: now context
  const { isFetched, data, isSuccess } = useInfiniteQuery<Paginated<PokemonType>>(allPokemonEndpoint, {
    getNextPageParam: (lastPage) => lastPage?.next,
    getPreviousPageParam: (firstPage) => firstPage?.previous,
  });
  console.log({ isFetched, data, isSuccess, zero: data?.pages[0].count });

  if (!isFetched) {
    return <CircularProgress size={50} />;
  }

  if (!data?.pages?.length) {
    return <Typography>Oof.</Typography>;
  }

  return (
    <>
      <VirtuosoGrid
        style={{ height: 300 }}
        totalCount={100}
        overscan={10}
        components={{
          Item: Item,
          List: ListContainer,
          ScrollSeekPlaceholder: ({ height, index }: any) => <ItemContainer>{"--"}</ItemContainer>,
        }}
        itemContent={(index) => <Box>Item {index}</Box>}
        scrollSeekConfiguration={{
          enter: (velocity) => Math.abs(velocity) > 200,
          exit: (velocity) => Math.abs(velocity) < 30,
          change: (_, range) => console.log({ range }),
        }}
      />
    </>
  );
}

export default HomePage;
