export interface Pokemon {
  name: string;
  url: string;
}

interface Ability {
  ability: { name: string };
}

export interface PokemonDetails {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: Ability[];
  height: number;
  weight: number;
}

export interface DetailPokemonProps {
  selectedPokemon: PokemonDetails | null;
  isLoading: boolean;
}

export interface ListPokemonProps {
  pokemon: Pokemon[];
}
