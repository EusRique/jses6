# Javascript com ES6+

## Configurações

### Instalar </br>
Node.js </br>
Yarn

### Installar as dependências </br>
Na raiz do projeto </br>
yarn init </br>
yarn add @babel/cli </br>
yarn add @babel/preset-env </br>
yarn add @babel/core </br>
yarn add @babel/plugin-proposal-object-rest-spread </br>

### Configurar o Babel no projeto </br>
Necessário criar um arquivo .babelrc </br>

```js
{
  "presets": ["@babel/preset-env"]
}
```

No arquivo package.js criar uma nova propriedade chamada conforme abaixo para gerar o arquivo bundle.js

```js
{
  "scripts": {
    "dev": "babel ./arquivo.js -o bundle.js -w"
  }
}
```
