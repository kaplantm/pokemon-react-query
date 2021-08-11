import { pokemonApiUrl } from "./constants";

export const getFullPokemonApiUrl = (ending: string) =>
  `${pokemonApiUrl}${ending}`;
