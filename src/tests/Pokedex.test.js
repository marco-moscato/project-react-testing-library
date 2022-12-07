import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import data from '../data';
import '@testing-library/jest-dom';

const nameList = data.map((ele) => ele.name);

describe('Testa o componente Pokédex.js', () => {
  test('Testa se a página contém um heading `h2` com o texto `Encountered Pokémon`', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole('heading', { name: 'Encountered Pokémon', level: 2 });
    expect(heading).toBeInTheDocument();
  });

  describe('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    test('Testa se o botão contém o texto Próximo Pokémon', () => {
      renderWithRouter(<App />);
      const nextButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
      expect(nextButton).toBeInTheDocument();
    });

    test('Testa se os próximos Pokémon da lista são mostrados, um a um, ao clicar sucessivamente no botão', () => {
      renderWithRouter(<App />);
      const nextButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
      nameList.forEach(async (ele) => {
        const checkPokemon = await screen.findByText(ele);
        userEvent.click(nextButton);
        expect(checkPokemon).toBeInTheDocument();
      });
    });

    test('Testa se o primeiro Pokémon da lista é mostrado ao clicar no botão, se estiver no último Pokémon da lista.', async () => {
      renderWithRouter(<App />);
      const nextButton = screen.getByRole('button', { name: /próximo/i });
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);
      userEvent.click(nextButton);

      const lastPokemon = await screen.findByText(/dragonair/i);
      expect(lastPokemon).toBeInTheDocument();
    });

    // test.todo('Testa se é mostrado apenas um Pokémon por vez', () => {
    //   renderWithRouter(<App />);
    // });
  });

  describe('Teste se a Pokédex tem os botões de filtro', () => {
    test('Testa se existe um botão de filtragem para cada tipo de Pokémon, sem repetição', () => {
      renderWithRouter(<App />);
      const pokemonFilters = screen.getAllByTestId('pokemon-type-button');
      const pokemonTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
      pokemonFilters.forEach((ele, i) => {
        expect(ele).toHaveTextContent(pokemonTypes[i]);
      });
    });

    test('Testa se a partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo', () => {
      renderWithRouter(<App />);
      const electricButton = screen.getByRole('button', { name: 'Electric' });
      userEvent.click(electricButton);

      const type = screen.getByTestId('pokemon-type');
      expect(type).toHaveTextContent('Electric');
    });

    test('Testa se o botão `All` está sempre visível', () => {

    });
  });
});
