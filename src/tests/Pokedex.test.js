import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Testa se a página contém um heading `h2` com o texto `Encountered Pokémon`', () => {
  renderWithRouter(<App />);
  const heading = screen.getByRole('heading', { name: /encountered pokémon/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test('Testa se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', async () => {
  renderWithRouter(<App />);

  const nextButton = screen.getByRole('button', { name: 'Próximo Pokémon' });
  expect(nextButton).toBeInTheDocument();

  const firstPokemon = screen.getByText(/pikachu/i);
  expect(firstPokemon).toBeInTheDocument();
});

// test.todo('', () => {});
