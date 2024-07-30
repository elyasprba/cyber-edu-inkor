import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import DetailPokemon from "../detail-pokemon/detail-pokemon";
import { ListPokemonProps, PokemonDetails } from "../../types/pokemon-types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2em;
  padding: 1em;
`;

const PokemonList = styled.ul`
  list-style: none;
  flex: 1;
`;

const PokemonItem = styled.li`
  margin: 0.5em 0;
  transition: color 0.3s ease, background-color 0.3s ease;
  &:hover {
    color: #333;
    background-color: #f0f0f0;
  }
  cursor: pointer;
  padding: 0.5em;
  border-radius: 5px;
`;

const ListPokemon: React.FC<ListPokemonProps> = ({ pokemon }) => {
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePokemonClick = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setSelectedPokemon(response.data);
    } catch (error) {
      throw new Error();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <PokemonList>
        {pokemon.map((poke, idx) => (
          <PokemonItem key={idx} onClick={() => handlePokemonClick(poke.url)}>
            {poke.name}
          </PokemonItem>
        ))}
      </PokemonList>
      <DetailPokemon selectedPokemon={selectedPokemon} isLoading={isLoading} />
    </Container>
  );
};

export default ListPokemon;
