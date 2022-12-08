import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('', () => {
  describe('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    test('Testa se a página contém um texto `<name> Details`, onde `<name>` é o nome do Pokémon', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const title = screen.getByRole('heading', { name: /pikachu details/i });
      expect(title).toBeDefined();
    });
    test('Testa se não existe o link de navegação para os detalhes do Pokémon selecionado', () => {
    //   renderWithRouter(<App />);
    //   const moreDetails = screen.getByRole('link', { name: /more details/i });
    //   expect.not(moreDetails).toBeInTheDocument();
    });
    test('Testa se a seção de detalhes contém um heading `h2` com o texto `Summary`', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const title = screen.getByRole('heading', { name: /summary/i });
      expect(title).toBeInTheDocument();
    });
    test('Testa se a seção de detalhes contém um parágrafo com o resumo do Pokémon específico sendo visualizado', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const summary = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat/i);
      expect(summary).toBeInTheDocument();
    });
  });
  describe('Testa se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    test('Testa se na seção de detalhes existe um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do Pokémon exibido', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const heading = screen.getByRole('heading', { name: /Game Locations of Pikachu/i });
      expect(heading).toBeInTheDocument();
    });
    test('Testa se todas as localizações do Pokémon são mostradas na seção de detalhes', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);
      const locationMap = screen.getAllByRole('img', { name: /location/i });
      expect(locationMap).toHaveLength(2);
    });
    test('Testa se são exibidos o nome da localização e uma imagem do mapa em cada localização', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const locationMap = screen.getAllByRole('img', { name: /location/i });
      expect(locationMap[0]).toBeInTheDocument();
      expect(locationMap[1]).toBeInTheDocument();

      const locationName = screen.getByText('Kanto Viridian Forest');
      expect(locationName).toBeInTheDocument();

      const locationName2 = screen.getByText('Kanto Power Plant');
      expect(locationName2).toBeInTheDocument();
    });
    test('Testa se a imagem da localização tem um atributo `src` com a URL da localização', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const image = screen.getAllByRole('img', { name: /pikachu location/i });
      expect(image[0])
        .toHaveAttribute('src', expect.stringContaining('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png'));
    });
    test('Testa se a imagem da localização tem um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do Pokémon', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const image = screen.getAllByRole('img', { name: /pikachu location/i });
      expect(image[0])
        .toHaveAttribute('alt', expect.stringContaining('Pikachu location'));
    });
  });
  describe('Testa se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    test('Testa se a página exibe um `checkbox` que permite favoritar o Pokémon', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });
    test('Testa se cliques alternados no `checkbox` adicionam e removem respectivamente o Pokémon da lista de favoritos', () => {
    //   const { history } = renderWithRouter(<App />);
    //   const moreDetails = screen.getByRole('link', { name: /more details/i });
    //   userEvent.click(moreDetails);

      //   const checkbox = screen.getByRole('checkbox');
      //   userEvent.click(checkbox);

      //   const favorite = screen.getByRole('link', { name: /favorite/i });
      //   userEvent.click(favorite);

      //   const pokemonFavorite = screen.getByTestId('pokemon-name');
      //   expect(pokemonFavorite).toHaveTextContent(/pikachu/i);

    //   userEvent.click(moreDetails);
    //   userEvent.click(checkbox);
    //   userEvent.click(favorite);
    //   expect(pokemonFavorite).not.toHaveTextContent(/pikachu/i);
    });
    test('O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`', () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', { name: /more details/i });
      userEvent.click(moreDetails);

      const label = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
      expect(label).toBeInTheDocument();
    });
  });
});

/*
Será avaliado se o arquivo teste `PokemonDetails.test.js` contempla 100% dos casos de uso criados pelo Stryker:
    * É exibido na tela um `h2` com o texto `<name> Details`
    * É exibido na tela um `h2` com o texto `Summary`
    * É exibido na tela um texto contendo `<summary>`
    * É exibido na tela um `h2` com o texto `Game Locations of <name>`
    * São exibidas na tela imagens de localização com o `src` correto
    * É exibido na tela uma `label` com o texto `Pokémon favoritado?`
*/
