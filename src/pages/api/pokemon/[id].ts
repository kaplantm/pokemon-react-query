import axios from "axios";
import { getFullPokemonApiUrl } from "../utils";
import { PokemonFull } from "./types";

const getUrl = (id: string) => getFullPokemonApiUrl(`pokemon/${id}`);

export async function getAllPokemon(id: string): Promise<PokemonFull> {
  const results = await axios.get<PokemonFull>(getUrl(id));
  return results.data;
}
