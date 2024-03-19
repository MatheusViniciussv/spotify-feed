# Spotify Feed

Spotify feed é uma plataforma desenvolvida com o objetivo de saber os 50 artistas mais escutados por você no spotify, utilizando a [API](https://developer.spotify.com/) própria do [Spotify](https://spotify.com/).

O projeto foi desenvolvido utilizando as ferramentas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Kendu UI](https://www.telerik.com/kendo-react-ui)

## Instalando configurando a aplicação

```
   //Faça o clone do repositório
   $ git clone https://github.com/MatheusViniciussv/spotify-feed.git

  //Abra o projeto no vscode
   $ cd spotify-feed

   $ code .

   //Instale as dependências
   $ `npm`, `yarn` or `pnpm` install

  //Execute o projeto
  $ `npm run dev`
  $ `yarn dev` or `pnpm dev`
```

## Variáveis ambiente

Para que o Projeto funcione perfeitamente, você precisará possuir uma conta no spotify. Feito isso entrar no [dashboard](https://developer.spotify.com/dashboard) utilizando a conta do spotify.

Dentro do dashboard, crie um app com o nome: Spotify Feed de preferência. Após isso, volte a página do dashboard e acesse app, siga para as configurações preencha os campos. No campo `redirect_uri` passe a url: `http://localhost:5173/authorization` depois copie o `Client ID` e o `Client secret`. Crie na raiz do projeto um arquivo `.env` utilizando como base o arquivo `.env.example`. Preencha os dados no arquivo `.env` com dados do seu projeto que estão no [dashboard](https://developer.spotify.com/dashboard).

#### Ao final seu arquivo `.env` deve estar desta forma

```js
VITE_CLIENT = client_id;
VITE_CLIENT_SECRET = client_secrete;
```

Seguindo todos os passos com êxito, execute o projeto e descubra quais os seus artistas mais ouvidos.

## Testes

Os testes unitários foram feitos utilizando a ferramenta [vitest](https://vitest.dev/) e para executá-los escreva em seu terminal

```ts
npm run test

yarn test

pnpm test
```
