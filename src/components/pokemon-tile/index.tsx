import React from "react";
import Paper from "@material-ui/core/Paper";
import { Typography, Link, Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useStyles from "./use-styles";

type PokemonTileProps = {
  name: string | undefined;
  url: string | undefined;
  number: number;
};

function PokemonTile({ name, url, number }: PokemonTileProps) {
  const classes = useStyles();
  // return <h1>{name || "???"}</h1>;
  return (
    <Paper className={classes.pokemonPaper}>
      {/* TODO: now update link and add image call */}
      <Link component={RouterLink} to="/play">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          width="100"
          height="100"
          alt={name}
        />
      </Link>
      <Link component={RouterLink} to="/play">
        <Typography variant="h4">
          #{number} {name}
        </Typography>
      </Link>
    </Paper>
  );
}

export default PokemonTile;
