import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Testa se a página contém um heading `h2` com o texto `Page requested not found`', () => {
// Acessar
  const { history } = renderWithRouter(<App />);

  // Agir
  act(() => {
    history.push('/wrongpage');
  });

  // Testar
  const heading = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });
  expect(heading).toBeInTheDocument();
});

test('Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`', () => {
// Acessar
  const { history } = renderWithRouter(<App />);

  act(() => { history.push('/wrongPage'); });

  // Agir
  // Testar
  const src = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  const image = screen.getByRole('img');
  expect(image).toBeInTheDocument();
  expect(image.src).toBe(src);
});
