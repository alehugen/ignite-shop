# Ignite Shop

Este é um projeto de e-commerce construído com Next.js, React e Stripe. O objetivo deste projeto é fornecer uma solução completa de comércio eletrônico para empresas que desejam iniciar suas operações on-line. Este projeto é uma parte do programa Ignite da Rocketseat.

## Pré-requisitos

Antes de prosseguir com a instalação, certifique-se de que sua máquina atenda aos seguintes requisitos:

- Node.js 14.x ou superior
- Yarn 1.x ou superior

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:

```
npm install
```

## Dependências

- [Next.js](https://nextjs.org/) - Framework React para produção
- [React](https://reactjs.org/) - Biblioteca JavaScript para criar interfaces de usuário
- [React DOM](https://reactjs.org/docs/react-dom.html) - Pacote para manipulação do DOM React
- [@stitches/react](https://stitches.dev/docs/installation/react) - Biblioteca CSS-in-JS
- [Stripe](https://stripe.com/) - Plataforma de pagamentos online
- [Keen Slider](https://keen-slider.io/) - Biblioteca de slider para React
- [TypeScript](https://www.typescriptlang.org/) - Linguagem de programação JavaScript tipada
- [ESLint](https://eslint.org/) - Ferramenta de análise de código estático para identificar problemas em código JavaScript/TypeScript
- [eslint-config-next](https://github.com/vercel/eslint-config-next) - Configurações do ESLint para projetos Next.js
- [@types/node](https://www.npmjs.com/package/@types/node) - Tipos TypeScript para Node.js
- [@types/react](https://www.npmjs.com/package/@types/react) - Tipos TypeScript para React
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) - Tipos TypeScript para React DOM

## Configuração

Antes de executar o projeto, você precisará configurar suas chaves de API do Stripe. Para fazer isso, crie um

## Configuração

Antes de executar o projeto, você precisará configurar suas chaves de API do Stripe. Para fazer isso, crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves de API como variáveis ​​de ambiente. Exemplo:

```
STRIPE_PUBLIC_KEY
STRIPE_SECRET_KEY
```

## Executando o projeto

Para executar o projeto, execute o seguinte comando na raiz do projeto:


```
npm run dev
```

Isso iniciará o servidor de desenvolvimento em `http://localhost:3000`.

## Testando

Para executar os testes automatizados, execute o seguinte comando na raiz do projeto:

```
npm run test
```

## Contribuindo

Contribuições são bem-vindas! Se você encontrar um bug ou desejar adicionar um recurso, sinta-se à vontade para abrir uma issue ou enviar uma pull request.

