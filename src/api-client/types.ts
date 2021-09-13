export type AllPokemonSearchResult = {
  name: string;
  url: string;
};

export type AllPokemonSearchResults = {
  count: number;
  next: string;
  previous: string;
  results: AllPokemonSearchResult[];
};

export type Paginated<T> = T[] & {
  count: number;
  next: string | null;
  previous: string | null;
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type NamedUrlReference = { name: string; url: string };

export type PokemonAbility = {
  ability: NamedUrlReference;
  is_hidden: false;
  slot: 1;
};

export type GameIndices = {
  game_index: 153;
  version: NamedUrlReference;
};

export type versionGroupDetail = {
  level_learned_at: number;
  move_learn_method: NamedUrlReference;
  version_group: NamedUrlReference;
};

export type BattleMove = {
  move: NamedUrlReference;
  version_group_details: versionGroupDetail[];
};

export type SpriteGroup = {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: NamedUrlReference;
};

export type PokemonFull = {
  abilities: PokemonAbility[];
  base_experience: number;
  forms: NamedUrlReference[];
  game_indices: GameIndices[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: BattleMove[];
  name: string;
  order: 1;
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
        front_female: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": SpriteGroup;
        yellow: SpriteGroup;
      };
      "generation-ii": {
        crystal: SpriteGroup;
        gold: SpriteGroup;
        silver: SpriteGroup;
      };
      "generation-iii": {
        emerald: SpriteGroup;
        "firered-leafgreen": SpriteGroup;
        "ruby-sapphire": SpriteGroup;
      };
      "generation-iv": {
        "diamond-pearl": SpriteGroup;
        "heartgold-soulsilver": SpriteGroup;
        platinum: SpriteGroup;
      };
      "generation-v": {
        "black-white": SpriteGroup;
      };
      "generation-vi": {
        "omegaruby-alphasapphire": SpriteGroup;
        "x-y": SpriteGroup;
      };
      "generation-vii": {
        icons: SpriteGroup;
        "ultra-sun-ultra-moon": SpriteGroup;
      };
      "generation-viii": {
        icons: SpriteGroup;
      };
    };
  };
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
};
