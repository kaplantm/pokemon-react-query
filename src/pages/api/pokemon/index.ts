import axios from "axios";
import { getFullPokemonApiUrl } from "../utils";
import { AllPokemonSearchResults } from "./types";

const url = getFullPokemonApiUrl("pokemon");

export async function getAllPokemon(): Promise<AllPokemonSearchResults> {
  const results = await axios.get<AllPokemonSearchResults>(url);
  return results.data;
}
