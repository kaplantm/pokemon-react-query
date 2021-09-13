import { apiUrl } from "./config";

export const allPokemonEndpoint = `${apiUrl}/pokemon/`;
export const getPokemonEndpoint = (nameOrId: string | number) => `${allPokemonEndpoint}/${nameOrId}`;
export const getPokemonEncountersEndpoint = (nameOrId: string) => `${getPokemonEndpoint(nameOrId)}/encouters`;
export const getPokemonStatsEndpoint = (nameOrId: string) => `stats/${nameOrId}`;
