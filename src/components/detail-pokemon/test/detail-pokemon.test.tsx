import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DetailPokemon from "../detail-pokemon";
import { mockPokemonDetails } from "../../../mock/data-mock-poke";

describe("DetailPokemon Component", () => {
  it("displays loading indicator when isLoading is true", () => {
    render(<DetailPokemon selectedPokemon={null} isLoading={true} />);

    expect(screen.getByText(/Loading Pokémon details.../i)).toBeInTheDocument();
  });

  it("renders Pokémon details when selectedPokemon is provided", () => {
    render(
      <DetailPokemon selectedPokemon={mockPokemonDetails} isLoading={false} />
    );

    expect(screen.getByText(mockPokemonDetails.name)).toBeInTheDocument();
    expect(screen.getByAltText(mockPokemonDetails.name)).toHaveAttribute(
      "src",
      mockPokemonDetails.sprites.front_default
    );

    expect(screen.getByTestId("pokemon-height")).toHaveTextContent(
      `Height: ${mockPokemonDetails.height}`
    );
    expect(screen.getByTestId("pokemon-weight")).toHaveTextContent(
      `Weight: ${mockPokemonDetails.weight}`
    );
    expect(screen.getByTestId("pokemon-abilities")).toHaveTextContent(
      "Abilities: static, lightning-rod"
    );
  });

  it("renders nothing when selectedPokemon is null and isLoading is false", () => {
    render(<DetailPokemon selectedPokemon={null} isLoading={false} />);

    expect(
      screen.queryByText(/Loading Pokémon details.../i)
    ).not.toBeInTheDocument();
    expect(screen.queryByText(mockPokemonDetails.name)).not.toBeInTheDocument();
  });
});
