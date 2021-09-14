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
  const { mutate, error: postError } = usePostFavoritePokemon(favoritePokemonEndpoint);

  const isFavorited = !!data?.data?.isFavorited; // will always be falsy since this endpoint is fake

  const handleClick = () => {
    mutate({ isFavorited: !isFavorited });
  };
  return (
    <div>
      <IconButton disabled={!isFetched} onClick={handleClick} className={classes.favorite}>
        {isFavorited ? <Favorite color="inherit" fontSize="inherit" /> : <FavoriteBorder color="inherit" fontSize="inherit" />}
      </IconButton>
      {postError && <Typography color="error">oof {postError?.response?.status}</Typography>}
    </div>
  );
}

const FavoritePokemon = React.memo(FavoritePokemonComponent);

export default FavoritePokemon;
