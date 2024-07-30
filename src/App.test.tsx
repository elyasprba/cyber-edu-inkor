import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "./App";

// Mock axios
vi.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockData = {
  data: {
    results: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ],
  },
};

describe("App Component", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue(mockData);
  });

  test("renders loading initially", () => {
    render(<App />);
    expect(screen.getByText(/List of Pokémon/i)).toBeInTheDocument();
  });

  test("fetches and displays Pokémon data", async () => {
    render(<App />);
    await waitFor(() => {
      mockData.data.results.forEach((pokemon) => {
        expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      });
    });
  });
});
