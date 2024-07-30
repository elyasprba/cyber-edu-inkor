import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import axios from "axios";
import ListPokemon from "../list-pokemon";
import {
  mockPokemonDataResult,
  mockPokemonDetails,
} from "../../../mock/data-mock-poke";

// Mock axios
vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("ListPokemon Component", () => {
  it("renders Pokémon names correctly", () => {
    render(<ListPokemon pokemon={mockPokemonDataResult} />);

    expect(screen.getByText("Pikachu")).toBeInTheDocument();
    expect(screen.getByText("Bulbasaur")).toBeInTheDocument();
  });

  it("fetches and displays Pokémon details when an item is clicked", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetails });

    render(<ListPokemon pokemon={mockPokemonDataResult} />);

    fireEvent.click(screen.getByText("Pikachu"));

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(
        "https://pokeapi.co/api/v2/pokemon/1/"
      );
      expect(screen.getByTestId("pokemon-name")).toHaveTextContent(
        mockPokemonDetails.name
      );
      expect(screen.getByTestId("pokemon-image")).toHaveAttribute(
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
  });

  it("renders DetailPokemon with correct props", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonDetails });

    render(<ListPokemon pokemon={mockPokemonDataResult} />);

    fireEvent.click(screen.getByText("Pikachu"));

    await waitFor(() => {
      expect(screen.getByTestId("pokemon-name")).toHaveTextContent(
        mockPokemonDetails.name
      );
    });
  });
});
