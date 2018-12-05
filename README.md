# Aplicação básica Javascript com ES6+

## Comunicação com API do Git

### Configurações

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

### Configurando Webpack (Ambiente DEV) </br>
yarn add webpack webpack-cli -D </br>
criar arquivo com nome webpack.config.js e configurar </br>

```js
module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
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
yarn add babel-loader -D </br>
yarn add webpack-dev-server -D </br>

### Instalnado bibliotecas para trabalhar com Async/await </br>
yarn add @babel/plugin-transform-async-to-generator -D </br>
yarn add @babel/polyfill -D </br>

### Configurando Axios
yarn add axios

### Os qrquivos de config devem ficar desta forma

## Configurar o Babel no projeto </br>
Necessário criar um arquivo .babelrc </br>

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
    ]
}
```

No arquivo package.json criar uma nova propriedade chamada conforme abaixo para gerar o arquivo bundle.js </br>

```js
{
  "name": "jses6",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/EusRique/jses6.git",
  "author": "Henrique <hiquesc_@hotmail.com>",
  "license": "MIT",
  "devDependencies": {
    "@babel/cli": "^7.1.5",
    "@babel/core": "^7.1.6",
    "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
    "@babel/polyfill": "^7.0.0",
    "@babel/preset-env": "^7.1.6",
    "babel-loader": "^8.0.4",
    "webpack": "^4.26.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  },
  "scripts": {
    "dev": "webpack-dev-server --mode=development",
    "build": "webpack --mode=production"
  },
  "dependencies": {
    "@babel/plugin-transform-async-to-generator": "^7.2.0"
  }
}

```
### Ambiente de Produção </br>
Ir no arquivo package.json  e criar o seguint comando
```js
"scripts": {
    "build": "webpack --mode=production"
  }
```
yarn build
