export const mockPokemonDataResult = [
  { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/1/" },
  { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
];

export const mockPokemonData = {
  data: {
    results: [
      { name: "Pikachu", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    ],
  },
};

export const mockPokemonDetails = {
  name: "Pikachu",
  sprites: {
    front_default: "https://example.com/pikachu.png",
  },
  abilities: [
    { ability: { name: "static" } },
    { ability: { name: "lightning-rod" } },
  ],
  height: 4,
  weight: 60,
};
