import React from "react";
import styled from "styled-components";
import { DetailPokemonProps } from "../../types/pokemon-types";

const PokemonDetail = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const PokemonImage = styled.img`
  display: block;
  margin: 1em auto;
`;

const LoadingIndicator = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const DetailPokemon: React.FC<DetailPokemonProps> = ({
  selectedPokemon,
  isLoading,
}) => {
  if (isLoading) {
    return <LoadingIndicator>Loading Pokémon details...</LoadingIndicator>;
  }

  if (!selectedPokemon) return null;

  if (!selectedPokemon) return null;

  return (
    <PokemonDetail>
      <h2 data-testid="pokemon-name">{selectedPokemon.name}</h2>
      <PokemonImage
        src={selectedPokemon.sprites.front_default}
        alt={selectedPokemon.name}
        data-testid="pokemon-image"
      />
      <p data-testid="pokemon-height">
        <strong>Height:</strong> {selectedPokemon.height}
      </p>
      <p data-testid="pokemon-weight">
        <strong>Weight:</strong> {selectedPokemon.weight}
      </p>
      <p data-testid="pokemon-abilities">
        <strong>Abilities:</strong>{" "}
        {selectedPokemon.abilities.map((ability, index) => (
          <span key={index}>
            {ability.ability.name}
            {index < selectedPokemon.abilities.length - 1 ? ", " : ""}
          </span>
        ))}
      </p>
    </PokemonDetail>
  );
};

export default DetailPokemon;
