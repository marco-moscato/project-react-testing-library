import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FavoritePokemon from '../pages/FavoritePokemon';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testa se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha Pokémon favoritos', () => {
  render(<FavoritePokemon />);
  const noFavoritePokemon = screen.getByText(/No favorite Pokémon found/i);
  expect(noFavoritePokemon).toBeInTheDocument();
});

test('Teste se são exibidos todos os cards de Pokémon favoritados', () => {
  // Acessar
  const { history } = renderWithRouter(<App />);

  // Agir
  const openDetails = screen.getByRole('link', { name: /details/i });
  userEvent.click(openDetails);

  const favorite = screen.getByRole('checkbox');
  userEvent.click(favorite);

  const favPage = screen.getByRole('link', { name: /favorite/i });
  userEvent.click(favPage);

  // Testar
  expect(history.location.pathname).toBe('/favorites');

  const checkFav = screen.getByRole('img', { name: /favorite/i });
  expect(checkFav).toBe(checkFav);
});
