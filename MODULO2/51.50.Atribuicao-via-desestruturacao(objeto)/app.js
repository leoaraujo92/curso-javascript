//Objeto

const pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Araujo',
    idade: 33,
    endereco: {
        rua: 'Leonardo da Vinci',
        numero: 329
    }
}; // Objeto precisa de ponto e vingula

//Atribuição via desestruturação
//const {nome, sobrenome, idade} = pessoa
// console.log(nome, sobrenome, idade) // Leonardo Araujo 33

//Valor undefined
// const {nome = 'Não existe', sobrenome, idade} = pessoa // Não existe Araujo 33

//Alterando o valor da chave
const{nome: teste = '', sobrenome} = pessoa

console.log(teste, sobrenome) // Leonardo Araujo

const {endereco: {rua, numero}} = pessoa

console.log(rua, numero) // Leonardo da Vinci 329
