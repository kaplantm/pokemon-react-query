import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import useStyles from "./use-styles";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getFavoritePokemonEndpoint } from "../../api-client/endpoints";
import { usePostFavoritePokemon } from "../../api-client/pokemon/[id]/favorite";

type PokemonStatsProps = {
  id: string | number;
};

function FavoritePokemonComponent({ id }: PokemonStatsProps) {
  const classes = useStyles();
  const favoritePokemonEndpoint = getFavoritePokemonEndpoint(id);
  const { data, isFetched } = useQuery<AxiosResponse<{ isFavorited: boolean }>>(favoritePokemonEndpoint);
  const { mutate, isLoading, error, status } = usePostFavoritePokemon(favoritePokemonEndpoint);

  const isFavorited = !!data?.data?.isFavorited; // will always be falsy since this endpoint is fake

  console.log({ data, isFetched, isFavorited, dd: data?.data });
  const handleClick = () => {
    mutate({ isFavorited: !isFavorited });
  };
  return (
    <div>
      <IconButton disabled={!isFetched} onClick={handleClick} className={classes.favorite}>
        {isFavorited ? <Favorite color="inherit" fontSize="inherit" /> : <FavoriteBorder color="inherit" fontSize="inherit" />}
      </IconButton>
      {error && <Typography color="error">oof ({status})</Typography>}
      {isLoading && "foo"}
    </div>
  );
}

const FavoritePokemon = React.memo(FavoritePokemonComponent);

export default FavoritePokemon;
