//Use map() quando: é preciso traduzir/mapear todos os elementos em um array para outro conjunto de valores.

const usuarios = [
    {nome: 'Diego', idade: 15, empresa: 'Facebook'},
    {nome: 'Gabriel', idade: 23, empresa: 'Google'},
    {nome: 'Lucas', idade: 30, empresa: 'Google'}
];

const newUsers = usuarios.map(function(users){
    return users.idade;
})
console.log(newUsers);

console.log('##############################');

//Use filter() quando: é preciso remover elementos indesejados com base em alguma(s) condição(ões).

const filter = usuarios.filter(function(users) {
    return users.empresa === 'Google' && users.idade > 25;
})

console.log(filter);

console.log('##############################');
//Use find() quando: é preciso encontrar elementos.

const find = usuarios.find(function(users){
    return users.empresa === 'Instagram';
})

console.log(find);

console.log('##############################');

//Unindo operações 

const calcAge = usuarios.map(function(users){
    return users.idade * 2; 
})

console.log(calcAge);