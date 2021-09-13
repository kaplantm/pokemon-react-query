import { CircularProgress, Grid } from "@material-ui/core";
import { useQuery } from "react-query";
import { useParams, useLocation } from "react-router-dom";
import { getPokemonEndpoint } from "../../../api-client/endpoints";
import { PokemonFull } from "../../../api-client/types";
import FavoritePokemon from "../../../components/favorite";
import PageContainer from "../../../components/page-container";
import PokemonTile from "../../../components/pokemon-tile";
import PokemonStats from "../../../components/stats";

function PokemonPage() {
  const params = useParams() as { pokemonId: string };
  const { state }: { state: { name: string; id: string } } = useLocation();
  const { pokemonId } = params;

  const { isFetched, data } = useQuery<PokemonFull>(getPokemonEndpoint(pokemonId), {
    enabled: !!pokemonId,
  });

  const name = data?.name || state?.name;
  const id = data?.id || state?.id;

  return (
    <PageContainer>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <PokemonTile name={name} url={undefined} number={id} loading={!name || !id} />
          {id && <FavoritePokemon id={id} />}
        </Grid>
        <Grid item xs={8}>
          {isFetched ? data?.stats && <PokemonStats stats={data.stats} /> : <CircularProgress size={25} />}
        </Grid>
      </Grid>
    </PageContainer>
  );
}

export default PokemonPage;
