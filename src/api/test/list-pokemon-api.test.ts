import axios from "axios";
import { describe, it, expect, vi } from "vitest";
import { getListPokemon } from "../list-pokemon-api";
import { mockPokemonData } from "../../mock/data-mock-poke";

// Mock axios
vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("getListPokemon", () => {
  it("should fetch the list of Pokémon and return the results", async () => {
    mockedAxios.get.mockResolvedValueOnce(mockPokemonData);

    const result = await getListPokemon();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      "https://pokeapi.co/api/v2/pokemon"
    );

    expect(result).toEqual(mockPokemonData.data.results);
  });

  it("should handle errors properly", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    await expect(getListPokemon()).rejects.toThrow("Network Error");
  });
});
