# Javascript com ES6+

## Configurações

### Instalar </br>
Node.js </br>
Yarn

### Installar as dependências (Ambiente DEV) </br>
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
    "dev": "webpack-dev-server --mode=development"
  }
}
```

### Configurando Webpack (Ambiente DEV) </br>
yarn add webpack webpack-cli -D
criar arquivo com nome webpack.config.js e configurar

```js
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};
```
yarn add babel-loader -D
yarn add webpack-dev-server -D

### Ambiente de Produção </br>
Ir no arquivo package.json  e criar o seguint comando
```js
"scripts": {
    "build": "webpack --mode=production"
  }
```
yarn build