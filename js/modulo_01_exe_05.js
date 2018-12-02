//Rest pega o resto
console.log('Rest');
const usuario = {
    nome: 'Henrique',
    idade: 26,
    cidade: 'Curitiba'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

console.log('---------------------------');

const arr = [1, 2, 3, 4, 5, 6]
const [x, ...y] = arr;

console.log(x);
console.log(y);
console.log('---------------------------');
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 4, 5, 6, 9, 10));
// Spread faz o papel de repassar as informações para outra estrutura
console.log('Spread');
console.log('--------------------------');

const usuario1 = {
    nome: 'Henrique',
    idade: 27,
    endereco: {
      cidade: 'Curitiba',
      uf: 'PR',
      pais: 'Brasil',
    }
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);

const usuario3 = { ...usuario1, cidade: 'Londrina'};
console.log(usuario3);