# Desafio Front End South System

## How to run

-   git clone https://github.com/wozzp/south_system_frontend.git
-   yarn install
-   yarn start
-   yarn test

# Comportamentos

## Menu

-   Versão desktop acima de 720px de largura de tela
-   Versão mobile abaixo de 720px de largura de tela
    -   Ao clicar no hamburger abrirá uma modal
    -   A modal deve fechar ao clicar no overlay ou botão de fechar ou ao clicar 'ESC'

## Lista de Dragões

-   Breakpoints de responsividade em 900px e 720px de largura de tela

## Login

-   Dados de Login: user | 123456
-   Após submeter o formulário de login será executado uma função que demorará 1 segundo para validar os dados,
    simulando o asincronismo de uma requisição real

## Teste feito com

-   ESLint + Prettierrc
-   Create React App
-   StyledComponents
-   useReducer + useContext ao invés de Redux
    -   devido a complexidade do teste não exigir o uso de Redux,
        acredito que para esse teste o uso dos Hooks seja mais simples e sucinto sem necessidade de usar 3 libs (redux, react-redux e redux-saga)
-   Nenhum arquivo excede 150 linhas de código (Se eu não me engano é uma boa pratica que a South System adotou, posso estar enganado)
-   JEST + Enzyme

## Styles

-   as cores, espaçamentos e tipografia foram modularizados com intuito de padronizar o layout
