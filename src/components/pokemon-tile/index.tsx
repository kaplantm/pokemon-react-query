import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./use-styles";

type PokemonTileProps = {
  name: string | undefined;
  url: string | undefined;
  number: string | number | undefined;
  loading?: boolean;
};

function PokemonTileComponent({ name, url, number, loading }: PokemonTileProps) {
  const classes = useStyles();

  const label = (
    <Typography variant="h4">
      #{number} {name}
    </Typography>
  );
  const linkedLabel = url ? (
    <Link
      component={RouterLink}
      to={{
        pathname: `/pokemon/${number}`,
        state: { name, id: number },
      }}
    >
      {label}
    </Link>
  ) : (
    label
  );
  return (
    <Paper className={classes.pokemonPaper}>
      <div className={classes.imgWrapper}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number || 0}.png`}
          width="100%"
          alt={name}
        />
      </div>
      {!loading && linkedLabel}
    </Paper>
  );
}

const PokemonTile = React.memo(PokemonTileComponent);

export default PokemonTile;
