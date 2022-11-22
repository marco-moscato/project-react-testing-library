import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import App from '../App';
import '@testing-library/jest-dom';
import renderWithRouter from '../renderWithRouter';

test('Testa se o  primeiro link possui o texto `Home`', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();
});

test('Testa se o segundo link possui o texto `About`', () => {
  renderWithRouter(<App />);
  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();
});

test('Testa se terceiro link possui o texto `Favorite Pokémons`', () => {
  renderWithRouter(<App />);
  const favoriteLink = screen.getByRole('link', { name: 'Favorite Pokémon' });
  expect(favoriteLink).toBeInTheDocument();
});

test('Testa se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: 'Home' });
  userEvent.click(link);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/');
});

test('Testa se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: 'About' });
  userEvent.click(link);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/about');
});

test('Testa se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const link = screen.getByRole('link', { name: 'Favorite Pokémon' });
  userEvent.click(link);

  const { location: { pathname } } = history;
  expect(pathname).toBe('/favorites');
});

test('Testa se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  act(() => {
    history.push('Not Found');
  });
});
