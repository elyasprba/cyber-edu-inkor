import { useEffect, useState } from "react";
import "./App.css";
import ListPokemon from "./components/list-pokemon/list-pokemon";
import { getListPokemon } from "./api/list-pokemon-api";
import styled from "styled-components";
import { Pokemon } from "./types/pokemon-types";

const PokemonContainer = styled.div`
  text-align: center;
  margin: 2em;
`;

function App() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const responseGetListPokemon = async () => {
    const res = await getListPokemon();
    setPokemon(res);
  };

  useEffect(() => {
    responseGetListPokemon();
  }, []);

  return (
    <div>
      <h1>List of Pokémon</h1>
      <PokemonContainer>
        <ListPokemon pokemon={pokemon} />
      </PokemonContainer>
    </div>
  );
}

export default App;
