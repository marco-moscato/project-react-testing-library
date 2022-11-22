import { render, screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';

test('Testa se a página contém as informações sobre a Pokédex', () => {
  render(<About />);
  const info = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);
  expect(info).toBeInTheDocument();
});

test('Testa se a página contém um heading `h2` com o texto `About Pokédex`', () => {
  render(<About />);
  screen.logTestingPlaygroundURL();
  const heading = screen.getByRole('heading', { name: 'About Pokédex' });
  expect(heading).toBeInTheDocument();
});

test('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  render(<About />);
  const paragrahpOne = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon/i);
  const paragraphTwo = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them/i);
  expect(paragrahpOne).toBeInTheDocument();
  expect(paragraphTwo).toBeInTheDocument();
});

test('Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`', () => {
  render(<About />);
  const image = screen.queryByRole('img');
  expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
