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
    "dev": "webpack --mode=development -w"
  }
}
```

### Configurando Webpack (Ambiente DEV) </br>
yarn add webpack webpack-cli -D
criar arquivo com nome webpack.config.js e configurar

```js
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
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
}
```
yarn add babel-loader -D

# Exercícios: Módulo 01

## 1º exercício

Testando conhecimentos com classes, crie uma classe com nome "Carro". 

A classe Carro deve receber três parâmetros no método construtor, cor, modelo e velocidadeMaxima, e anotá-los em propriedades da classe, deve conter também propriedade "ligado" como `false` na classe e velocidadeAtual = 0.

Agora com suas classes formatadas, adicione um método na classe Carro chamado `ligaeDesliga` que retorna se o carro esta ligado ou não baseado na propriedade `ligado` ser `true` ou não.
Um método `cordoVeiculo` que retorna a cor e o modelo, um método `acelera(quantidade)` que irá retornar a velocidade do veículo e um método `pegaMarcha` que irá devolver a marcha do veículo de acordo com sua velocidade. 

## 2º exercício

A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):

```js
const usuarios = [
  { nome: 'Diego', idade: 15, empresa: 'Facebook' },
  { nome: 'Gabriel', idade: 23, empresa: 'Google' },
  { nome: 'Lucas', idade: 30, empresa: 'Google' },
];
```

### 2.1 Utilizando o `map`

Crie uma variável que contenha todas idades dos usuários: `[23, 15, 30]`

### 2.2 Utilizando o `filter`

Crie uma variáveis que tenha apenas os usuários que trabalham na Google e com mais de 25 anos: `[{ nome: 'Lucas', idade: 30, empresa: 'Google' }]`

### 2.3 Utilizando o `find`

Crie uma variável que procura por um usuário que trabalhe na empresa Instagram: `undefined`

### 2.4 Unindo operações

Multiplique a idade de todos usuários por dois. 

## 3º exercício

Converta as funções nos seguintes trechos de código em Arrow Functions:

```js
// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});
```

```js
// 3.2 
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Henrique', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);
```

```js
// 3.3
// Dica: Utilize uma constante pra function

const nome = "Henrique";
const idade = 26;

function mostraUsuario(nome = 'Henrique', idade = 26) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```

## 4º exercício

### 4.1 Desestruturação simples

A partir do seguinte objeto:

```js
const empresa = {
  nome: 'Henrique',
  endereco: {
    cidade: 'Curitiba',
    estado: 'PR',
  }
};
```

Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:

```js
console.log(nome); // Henrique
console.log(cidade); // Curitiba
console.log(estado); // PR
```

### 4.2 Desestruturação em parâmetros

Na seguinte função:

```js
function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Henrique', idade: 26 })
```

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:

```js
return `${nome} tem ${idade} anos.`;
```

## 5º Exercício

Utilizando o operador de rest/spread (`...`) realize as seguintes operações:

### 5.1 Rest

A partir do obejto: 
`const usuario = {
    nome: 'Henrique',
    idade: 26,
    cidade: 'Curitiba'
};
`
retorne o resultado abaixo
```js
console.log(nome); // Henrique
console.log(resto); // {idade: 26, cidade: "Curitiba"}
```

A partir do array: `const arr = [1, 2, 3, 4, 5, 6]`, defina uma variável `x` que recebe a primeira posição do vetor e outra variável `y` que recebe todo restante dos dados.

```js
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```

Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

```js
// function soma...

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

### 5.2 Spread

A partir do objeto e utilizando o operador spread:

```js
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
```

Crie uma variável `usuario2` que contenha todos os dados do usuário porém com nome `Gabriel`.

Crie uma variável `usuario3` que contenha todos os dados do usuário porém com cidade `Lontras`.

## 6º Exercício

Converta o seguinte trecho de código utilizando Template Literals:

```js
const usuario = 'Diego';
const idade = 23;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
```

## 7º exercício

Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:

```js
const nome = 'Diego';
const idade = 23;

const usuario = {
  nome: nome,
  idade: idade,
  cidade: 'Rio do Sul',
};
```
