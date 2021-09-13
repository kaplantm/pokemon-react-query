import React from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./use-styles";
import { PokemonStat } from "../../api-client/types";

type PokemonStatsProps = {
  stats: PokemonStat[];
};

function PokemonStatsComponent({ stats }: PokemonStatsProps) {
  const classes = useStyles();

  return (
    <div className={classes.statsContainer}>
      <Typography variant="h4">Stats</Typography>
      <ul>
        {stats.map(({ base_stat, stat }) => (
          <li key={stat.name}>
            <div style={{ width: base_stat * 5 }} className={classes.statLine}>
              <Typography variant="h5" className={classes.statLabel}>
                {stat.name}
              </Typography>
              <Typography variant="h5" className={classes.statValue}>
                {base_stat}
              </Typography>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const PokemonStats = React.memo(PokemonStatsComponent);

export default PokemonStats;
