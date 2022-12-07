describe('6 - Testa o componente Pokémon', () => {
  describe('6.1 - Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    test.todo('6.1.1 - Testa se o nome correto do Pokémon é mostrado na tela', () => {});
    test.todo('6.1.2 - Testa se o tipo correto do Pokémon é mostrado na tela', () => {});
    test.todo('6.1.3 - Testa se o peso médio do Pokémon é exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do Pokémon e sua unidade de medida;', () => {});
    test.todo('6.1.4 - Testa se a imagem do Pokémon é exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do Pokémon.', () => {});
  });

  test.todo('6.2 - Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL `/pokemon/<id>`, onde `<id>` é o id do Pokémon exibido', () => {});

  test.todo('6.3 - Testa se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {});

  test.todo('6.4 - Testa também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do Pokémon cujos detalhes se deseja ver', () => {});

  describe('6.5 - Testa se existe um ícone de estrela nos Pokémon favoritados:', () => {
    test.todo('6.5.1 - Testa se o ícone é uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`', () => {});
    test.todo('6.5.2 - Testa se a imagem tem o atributo `alt` igual a `<Pokemon> is marked as favorite`, onde `<Pokemon>` é o nome do Pokémon exibido.', () => {});
  });
});
//
