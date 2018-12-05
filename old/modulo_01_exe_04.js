//Desestruturação simples

const empresa = {
    nome: 'Henrique',
    endereco: {
        cidade: 'Curitiba',
        estado: 'PR',
    }
};

const {nome, endereco:{cidade, estado}} = empresa;
console.log(nome); // Henrique
console.log(cidade); // Curitiba
console.log(estado); // PR

//Desestruturação em parâmetros

function mostrarInfo(usuario) {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`);
}

mostrarInfo({ nome: 'Henrique', idade: 26 })